const highlight = require('cli-highlight').highlight;

const transformer = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const componentNameStyle = /^\W+[A-Z]/;

  console.log('Inspecting', file.path);

  var body = root.get().node.program.body;
  var header = `import { asyncComponent } from 'react-async-component';`;

  if (
    body.length &&
    j(body[0]).toSource() != header
  ) {
    body.unshift(header);
  }

  return root
    .find(j.ExportNamedDeclaration)
    .map(path => {
      if (path.node && path.node.source) {
        // Test to see if the first character of the first word is UPPERCASE.
        // This is a good test according to the Material UI
        // maintainers.
        // https://github.com/mui-org/material-ui/issues/10647#issuecomment-373093870
        // This is "./FormGroup" if we see `export {default} from "./FromGroup"`
        var sourceLocation = path.node.source.value;
        if (sourceLocation.match(componentNameStyle)) {
          console.log(
            'Transforming at line',
            path.node.loc.start.line,
            '\n',
            highlight(j(path.node).toSource(), {
              language: 'javascript',
            }),
          );
          var exports = [];
          for (let i = 0, specifier; i < path.node.specifiers.length; i++) {
            specifier = path.node.specifiers[i];
            let localExport = specifier.local.name === specifier.exported.name;
            if (localExport && specifier.local.name === 'default') {
              exports.push(
                [
                  `export default asyncComponent({`,
                  `	resolve: () => import('${sourceLocation}' /* webpackChunkName: "${sourceLocation.split('/').slice(-1)}" */),`,
                  `});`,
                ].join('\n'),
              );
            } else {
              exports.push(
                [
                  `export const ${specifier.exported.name} = asyncComponent({`,
                  `	resolve: () => import('${sourceLocation}' /* webpackChunkName: "${specifier.exported.name}" */)${
                    specifier.local.name !== 'default'
                      ? `.then(module => module['${specifier.local.name}'])`
                      : ''
                  },`,
                  `});`,
                ].join('\n'),
              );
            }
          }
          var comments = path.node.comments;
          j(path).replaceWith(exports.join('\n'));
          path.node.comments = comments;
        }
      }
      return path;
    })
    .toSource();
};

module.exports = transformer;
