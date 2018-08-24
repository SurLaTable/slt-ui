import path from 'path';
import webpack from 'webpack';
import log from './modules/print.js';
import webpackConfig from './config/build.webpack.config.js';
import { customArgs } from './modules/args.js';
import tasks from './modules/tasks.js';

/*
- Need to create config with public path
- Need to give it a library config with a good name
- Maybe a wrapper for auto registering to react-habitat
- Need to pass a script to this to build from
- Maybe also an output directory (with a default)
*/

export default function buildDynamicRegistration() {
	let args = customArgs({
		string: ['library'],
		default: {
			library: 'slt_dynamic_registration'
		}
	});

	let entry = path.posix.resolve(args._[1]);
	return new Promise((resolve, reject) => {
		log.assert(entry, 'Dynamic Registration needs an entry');

		let config = webpackConfig('dynamic-registration', {
			entry: entry,
			output: {
				library: args.library,
				path: path.posix.resolve('./build/dynamic-registration')
			},
			plugins: [
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
buildDynamicRegistration.displayName = 'dynamic-registration';
buildDynamicRegistration.description =
	'build a single bundle ready to be used with ComponentManifest.register().';
tasks.add(tasks.timed(buildDynamicRegistration));
