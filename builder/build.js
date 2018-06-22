import {done,clean} from './setup.js';
import 'colors';
import {error} from './modules/print';
import components from "./components.js";
import generateAsync from "./async.js";

clean().then(()=>{
  return Promise.all([generateAsync(),components()]).then(done);
}).catch((err)=>{
  error(err);
});
