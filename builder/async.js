import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import glob from 'glob';
import webpack from "webpack";
import {data, info, error} from './modules/print';
import webpackConfig from './config/build.webpack.config.js';

import * as sltUI from '../src/index.js';
import * as material from '@material-ui/core';

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

        if(process.env.NODE_ENV === 'development'){
          console.warn('Using development version of slt-ui');
        }
      `;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let folderName = path.posix.basename(path.posix.dirname(file));
        info(file);
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
              resolve: ()=>import('./slt/${component}.js' /*webpackChunkName: '${component}'*/)
            });
          `;

          promises.push(write(path.resolve(`./builder/temp/slt/${component}.js`), `
            export ${exportName} from '${
              path.posix.relative(
                './builder/temp/slt/',
                path.posix.resolve(file)
              )
            }';
          `));
        }
      }

      // save source to async-wrapper.js in Manifest
      promises.push(write(path.resolve('./builder/temp/async-wrapper.js'), code));
      resolve();

    });
  });
}

function generateMaterialAsync(promises) {

  return new Promise((resolve, reject) => {
    glob('../node_modules/\\@material-ui/core/[A-Z]*/index.js', {
      cwd: __dirname
    }, async function(err, files) {
      if (err) {
        error(err);
        reject(err);
      }

      let code = `
        import {asyncComponent} from 'react-async-component';
      `;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let folderName = path.posix.basename(path.posix.dirname(file));
        info(file);
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
          data('ASYNC MATERIAL:', file, " - ", component);
          code += `
            export const ${component} = asyncComponent({
              resolve: ()=>import('./material/${component}.js' /*webpackChunkName: '${component}'*/)
            });
          `;

          promises.push(write(path.resolve(`./builder/temp/material/${component}.js`), `
            export ${exportName} from '${
              path.posix.relative(
                './builder/temp/material/',
                path.posix.resolve(file)
              )
            }';
          `));
        }
      }

      promises.push(write(path.resolve('./builder/temp/async-material-wrapper.js'), code));
      resolve();

    });
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
  var finalConfig = webpackConfig('Async',{
    entry: {
      'index': './manifest/index.js'
    },
    output: {
      path: path.resolve('./build/async'),
      publicPath:"/scripts/manifest/"
    },
    resolve:{
      alias:{
        "@material-ui/core":path.resolve("./builder/temp/async-material-wrapper.js"),
        "@sur-la-table/slt-ui":path.resolve('./builder/temp/async-wrapper.js')
      }
    }
  });

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
