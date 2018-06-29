import path from 'path';
import webpack from 'webpack';
import { info } from './modules/print.js';
import webpackConfig from './config/build.webpack.config.js';

export async function buildComponents() {
	info('BUILD COMPONENTS STARTED');
	var finalConfig = webpackConfig('Sync', {
		entry: {
			index: './src/index.js'
		},
		output: {
			path: path.resolve('./build/sync')
		}
	});

	return new Promise((resolve, reject) => {
		webpack(finalConfig, (err, stats) => {
			console.log(
				stats.toString({
					// Shows colors in the console
					colors: true
				})
			);
			info('BUILD COMPONENTS ENDED');
			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

buildComponents.displayName = 'components';
buildComponents.description = 'components';
