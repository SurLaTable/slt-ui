import path from "path";
import webpack from "webpack";

import { componentPaths as paths } from "./config/paths.config";
import config from './config/build.webpack.config.js';

async function buildComponents() {
	var finalConfig = {
		...config,
		entry: {
	    'index': './src/index.js',
			'manifest': './manifest/index.js'
	  }
	}

	return new Promise((resolve,reject)=>{
		webpack(finalConfig,(err,stats)=>{
			if(err || stats.hasErrors()){
				reject(err);
			}else{
				resolve();
			}
		});
	});
}

buildComponents.displayName = "components";
buildComponents.description = "components";

export default buildComponents;
