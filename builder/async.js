import fs from 'fs';
import path from 'path';
import {data} from './modules/print';

import * as sltUI from '../src/index.js';

function write(filePath,code){
  var dir = path.dirname(filePath);
  if(fs.existsSync(dir) == false){
    fs.mkdirSync(dir);
  }

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

async function generateAsync() {
  //loop over slt ui components
  var promises = [];
  var code = `
    import {asyncComponent} from 'react-async-component';
  `;

  for (let component in sltUI) {
    //generate source code that wraps each component in asyncComponent
    if(/^[A-Z]/.test(component) === false){
      continue;
    }
    data('ASYNC:',component);
    code += `
      export const ${component} = asyncComponent({
        resolve: ()=>import('./temp/${component}.js' /*webpackChunkName: '${component}'*/)
      });
    `;

    promises.push(write(path.resolve(`manifest/temp/${component}.js`), `
      export {${component}} from '../../src/index.js';
    `));
  }
  // save source to async-wrapper.js in Manifest
  promises.push(write(path.resolve('manifest/async-wrapper.js'), code));

  return Promise.all(promises);
}

export default generateAsync;
generateAsync.displayName = 'generate-async';
generateAsync.description = 'wrap slt-ui components in asyncComponent';
