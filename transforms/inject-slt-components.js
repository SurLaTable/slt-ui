const glob = require('glob');
const fs = require('fs');
const path = require('path');
const j = require('jscodeshift').withParser('flow');
const prettier = require('prettier');
const componentNameStyle = /^\W+[A-Z]/;
const prettierConfig = require('../prettier.config.js');

// TODO:
// Set a base directory for material-ui (config for paths).

function read(path) {
  var source = fs.readFileSync(path, 'utf8').toString();
  return source;
}
function write(path, source) {
  return fs.writeFileSync(path, source);
}

function buildExportSpecifiers() {
  return new Promise((resolve, reject) => {
    glob('./src/*/index.js', function(err, files) {
      if (err) {
        return reject(err);
      }
      var exports = {};

      for (let i = 0; i < files.length; i++) {
        let source = read(files[i]);
        let root = j(source);
        let defaultName = path
          .dirname(files[i])
          .split('/')
          .slice(-1);
        let exp = (exports[`./${defaultName}`] = []);

        root.find(j.ExportNamedDeclaration).map(path => {
          if (path.node && path.node.source) {
            var sourceLocation = path.node.source.value;
            if (sourceLocation.match(componentNameStyle)) {
              // Is a component export
              for (let i = 0, specifier; i < path.node.specifiers.length; i++) {
                specifier = path.node.specifiers[i];
                let localExport = specifier.local.name === specifier.exported.name;
                if (localExport && specifier.local.name === 'default') {
                  exp.push(`default as ${defaultName}`);
                } else {
                  exp.push(`${specifier.exported.name}`);
                }
              }
            }
          }
        });
        exports[`./${defaultName}`] = `export { ${exp.join(', ')} } from './${defaultName}';`;
      }
      // We've compiled all the specifiers for the exports
      resolve(exports);
    });
  });
}

function injectExports() {
  console.log('Start Injecting SLT components into matierl-ui.');
  return new Promise((resolve, reject) => {
    var source = read('./material-ui/packages/material-ui/src/index.js');
    var root = j(source);
    buildExportSpecifiers().then(function(exports) {
      var files = Object.keys(exports);
      root.find(j.ExportNamedDeclaration).map(path => {
        if (path.node && path.node.source) {
          let existingExport = files.indexOf(path.node.source.value);
          if (existingExport !== -1) {
            j(path).replaceWith(exports[files[existingExport]]);
            delete exports[files[existingExport]];
          }
        }
      });
      console.log(exports);
      root.get().node.program.body.push(Object.values(exports).join('\n'));

      write(
        './material-ui/packages/material-ui/src/index.js',
        prettier.format(root.toSource(), prettierConfig),
      );
      console.log('Finished injecting SLT components into material-ui.');
      resolve();
    });
  });
}

module.exports = injectExports;
