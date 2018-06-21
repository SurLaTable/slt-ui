import fs from 'fs';
import path from 'path';

import * as sltUI from '../src/index.js';

export default function generateAsync(done){
  //loop over slt ui components
  var code = `
    import {asyncComponent} from 'react-async-component';
  `;
  for(let component in sltUI){
    //generate source code that wraps each component in asyncComponent
    code += `
      export let ${component} = asyncComponent({
        resolve: ()=>import('../src/index.js').then((module)=>module[${component}])
      });
    `;
  }
  // save source to async-wrapper.js in Manifest
  fs.writeFile(path.resolve('manifest/async-wrapper.js'),code,done);
}

generateAsync.displayName = 'generate-async';
generateAsync.description = 'wrap slt-ui components in asyncComponent';
