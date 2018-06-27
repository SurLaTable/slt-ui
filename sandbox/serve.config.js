import path from 'path';
import config from './webpack.config.js';
import serve from 'webpack-serve';

var serverConfig =  {
  content:path.resolve(__dirname,'index.js'),
  config:config,
  port:4000,
  open:true
};

serve(serverConfig);
