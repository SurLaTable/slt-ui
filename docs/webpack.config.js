import config from '../builder/config/build.webpack.config.js';
import path from 'path';
import DotEnv from 'dotenv-webpack';
import styleguidist from 'react-styleguidist';
import glob from 'glob';

import { resolver } from 'react-docgen';
import fs from 'fs';

function getFileSize(filename) {
	const stats = fs.statSync(filename);
	return stats.size / 1000.0;
}
function getDemos() {
	let files = glob.sync('./demos/**/*.md', {
		cwd: __dirname
	});

	let sections = [];
	for (let i = 0; i < files.length; i++) {
		sections.push({
			name: path.basename(files[i], '.md'),
			content: path.resolve(__dirname, files[i])
		});
	}
	return sections;
}

let styleguide = styleguidist({
	defaultExample: path.resolve(__dirname, 'DefaultExample.md'),
	pagePerSection: true,
	require: [path.join(__dirname, 'styleguidist-env.css')],
	resolver: resolver.findAllExportedComponentDefinitions,
	ribbon: {
		url: 'https://github.com/SurLaTable/slt-ui',
		text: 'Check it out on GitHub'
	},
	sections: [
		{
			name: 'Components',
			sectionDepth: 0,
			components: [
				path.resolve(`./src/[A-Z]*/?([A-Z]*)/[A-Z]*.{js,jsx,ts,tsx}`),
				path.resolve(`./src/[A-Z]*/[A-Z]*.{js,jsx,ts,tsx}`)
				//path.resolve(`./src/[A-Z]*/index.js`)
			]
		},
		{
			name: 'Demos',
			sections: getDemos(),
			sectionDepth: 1
		}
	],
	skipComponentsWithoutExample: false,
	template: {
		body: {
			scripts: [{ src: '/async/index.min.js', defer: true }]
		}
	}
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
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	output: {
		publicPath: '/'
	},
	// DotEnv includes the .env environment variables
	// in this bundle so you can actually use them:
	plugins: [new DotEnv()]
});