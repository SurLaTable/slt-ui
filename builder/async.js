import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import glob from 'glob';
import webpack from "webpack";
import {data, info, error} from './modules/print';
import config from './config/build.webpack.config.js';

import * as sltUI from '../src/index.js';
import * as material from '@material-ui/core';

import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

function write(filePath, code) {
  mkdirp.sync(path.dirname(filePath));

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, code, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function hasModule(filename) {
  try {
    return Boolean(require.resolve(filename));
  } catch (e) {
    return false;
  }
}

function generateSLTUIAsync(promises) {

  return new Promise((resolve, reject) => {
    glob('../src/[A-Z]*/index.js', {
      cwd: __dirname
    }, async function(err, files) {
      if (err) {
        error(err);
        reject(err);
      }

      let code = `
        import {asyncComponent} from 'react-async-component';
        export * from './async-material-wrapper.js';
      `;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let folderName = path.posix.basename(path.posix.dirname(file));
        info("MADE IT", file);
        var module = require(file);

        for (let component in module) {
          if(module.hasOwnProperty(component) === false || component == "__esModule"){
            continue;
          }
          let exportName = `{${component} as default}`;
          if (component == 'default') {
            component = folderName;
            exportName = `{default}`;
          }
          data('ASYNC SLT-UI:', file, " - ", component);
          code += `
            export const ${component} = asyncComponent({
              resolve: ()=>import('./temp/slt/${component}.js' /*webpackChunkName: '${component}'*/)
            });
          `;

          promises.push(write(path.resolve(`manifest/temp/slt/${component}.js`), `
            export ${exportName} from '${
              path.posix.relative(
                './manifest/temp/slt/',
                path.posix.resolve(file)
              )
            }';
          `));
        }
      }

      // save source to async-wrapper.js in Manifest
      promises.push(write(path.resolve('manifest/async-wrapper.js'), code));
      resolve();

    });
  });
}

function generateMaterialAsync(promises) {
  return new Promise((resolve, reject) => {
    let code = `
      import {asyncComponent} from 'react-async-component';
    `;
    for (let component in material) {
      //generate source code that wraps each component in asyncComponent
      if (/^[A-Z]/.test(component) === false || hasModule(`@material-ui/core/${component}`) === false) {
        continue;
      }
      data('ASYNC MATERIAL:', `@material-ui/core/${component}`);
      code += `
        export const ${component} = asyncComponent({
          resolve: ()=>import('./temp/material/${component}.js' /*webpackChunkName: '${component}'*/)
        });
      `;

      promises.push(write(path.resolve(`manifest/temp/material/${component}.js`), `
        export ${component} from '${
          path.posix.relative(
            './manifest/temp/material/',
            `./node_modules/@material-ui/core/${component}`
          )
        }';
      `));
    }

    // save source to async-wrapper.js in Manifest
    promises.push(write(path.resolve('manifest/async-material-wrapper.js'), code));

    resolve();
  });
}

export async function generateAsync() {

  let promises = []
  await generateMaterialAsync(promises);
  await generateSLTUIAsync(promises);



  await Promise.all(promises);
}
generateAsync.displayName = 'generate-async';
generateAsync.description = 'wrap material and slt-ui components in asyncComponent';

export async function buildManifest() {
  info("BUILD MANIFEST STARTED");
  var finalConfig = {
    ...config,
    entry: {
      'index': './manifest/index.js'
    },
    output: {
      ...config.output,
      path: path.resolve('./manifest-build')
    },
    resolve:{
      ...config.resolve,
      alias:{
        ...config.resolve.alias,
        "@material-ui/core":path.resolve("./manifest/async-material-wrapper.js")
      }
    },
    plugins:[
      ...config.plugins,
      new BundleAnalyzerPlugin()
    ]
  }

  return new Promise((resolve, reject) => {
    webpack(finalConfig, (err, stats) => {
      console.log(stats.toString({
        // Shows colors in the console
        colors: true
      }));
      info("BUILD MANIFEST ENDED");
      if (err || stats.hasErrors()) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

buildManifest.displayName = "manifest";
buildManifest.description = "manifest";
