import cp from "child_process";
import os from "os";

export default function clip(text){
  let exec = os.platform() == "win32" ? 'clip' : 'xclip';
  return new Promise((resolve,reject)=>{
    let child = cp.spawn(exec);

    child.stdin.on('error',(err)=>{
      child.stdin.end();
      reject(err);
    });
    child.stdin.on('end',resolve);

    child.stdin.write(text,"utf-8",()=>{
      child.stdin.end();
    });

  });
}
