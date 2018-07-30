import path from 'path';
import webpack from 'webpack';
import log from './modules/print.js';
import webpackConfig from './config/build.webpack.config.js';
import { customArgs } from './modules/args.js';
import tasks from './modules/tasks.js';

/*
- need to create config with public path
- need to give it a library config with a good name
- maybe a wrapper for auto registering to react-habitat
- need to pass a script to this to build from
- maybe also an output directory (with a defualt)
*/

export default function buildDynamicRegistration() {
	let args = customArgs({
		string: ['library'],
		default: {
			library: 'slt_dynamic_registration'
		}
	});
	
	let entry = path.resolve(args._[1]);
	return new Promise((resolve, reject) => {
		log.assert(entry, 'Dynamic Registration needs an entry');

		let config = webpackConfig('dynamic-registration', {
			entry: entry,
			output: {
				library: args.library,
				path: path.resolve('./build/dynamic-registration')
			},
			plugins:[
				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 1
				})
			]
		});

		webpack(config, (err, stats) => {
			console.log(
				stats.toString({
					// Shows colors in the console
					colors: true
				})
			);

			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}
buildDynamicRegistration.displayName = "dynamic-registration";
buildDynamicRegistration.description = "build a single bundle ready to be used with ComponentManifest.register().";
tasks.add(tasks.timed(buildDynamicRegistration));
