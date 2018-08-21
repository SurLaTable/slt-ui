import config from '../builder/config/build.webpack.config.js';
import path from 'path';
import DotEnv from 'dotenv-webpack';
import styleguidist from 'react-styleguidist';

import { resolver } from 'react-docgen';
import fs from 'fs';

function getFileSize(filename) {
	const stats = fs.statSync(filename);
	return stats.size / 1000.0;
}

let styleguide = styleguidist({
	ribbon: {
		url: 'https://github.com/SurLaTable/slt-ui',
		text: 'Check it out on GitHub'
	},
	require: [],
	template: {
		body: {
			scripts: [{ src: '/async/index.min.js', defer: true }]
		}
	},
	skipComponentsWithoutExample: false,
	resolver: resolver.findAllExportedComponentDefinitions,
	components: [
		path.resolve(`./src/[A-Z]*/?([A-Z]*)/[A-Z]*.{js,jsx,ts,tsx}`),
		path.resolve(`./src/[A-Z]*/[A-Z]*.{js,jsx,ts,tsx}`)
		//path.resolve(`./src/[A-Z]*/index.js`)
	],
	defaultExample: path.resolve(__dirname, 'DefaultExample.md')
});
let styleguidistConfig = styleguide.makeWebpackConfig(process.env.NODE_ENV);

export default config('Sandbox', styleguidistConfig, {
	entry: [path.resolve(__dirname, 'globals.js')],
	externals: {
		react: false,
		'react-dom': false,
		'react-redux': false,
		redux: false
	},
	output: {
		publicPath: '/'
	},
	// DotEnv includes the .env environment variables
	// in this bundle so you can actually use them:
	plugins: [new DotEnv()]
});
