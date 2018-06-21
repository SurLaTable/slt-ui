/*import gulp from "gulp";
import 'colors';
import components from "./builder/components.js";
import asyncComponents from "./builder/async.js";

if(process.argv.includes('--dev')){
  console.info("DEVELOPMENT BUILD".yellow);
  process.env.NODE_ENV = 'development';
}else{
  console.info("PRODUCTION BUILD".cyan);
  process.env.NODE_ENV = 'production';
}

gulp.task(asyncComponents);
gulp.task(components);

let defaultTask = gulp.series(asyncComponents,function(){
  if(process.env.NODE_ENV === 'development'){
    console.info("DEVELOPMENT BUILD FINISHED".yellow);
  }else{
    console.info("PRODUCTION BUILD FINISHED".cyan);
  }
});
defaultTask.displayName = "default";
defaultTask.description = "default";
gulp.task(defaultTask);*/


import * as sltUI from './src/index.js';
