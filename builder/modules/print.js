import "colors";

export function time(){
  return `[${new Date().toLocaleTimeString()}]`;
}

export function info(...args){
  return console.info([time(),...args].join(' ').cyan);
}

export function warn(...args){
  return console.warn([time(),...args].join(' ').yellow);
}

export function error(...args){
  return console.error([time(),...args].join(' ').bgRed.white);
}

export function data(...args){
  return console.log([time(),...args].join(' ').grey);
}
