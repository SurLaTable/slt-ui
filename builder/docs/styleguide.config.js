import glob from 'glob';
import path from 'path';

import { resolver } from 'react-docgen';

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

const config = {
	assetsDir: path.resolve('./builder/docs/assets'),
	defaultExample: path.resolve(__dirname, 'DefaultExample.md'),
	pagePerSection: true,

	require: [],
	resolver: resolver.findAllExportedComponentDefinitions,
	ribbon: {
		url: 'https://github.com/SurLaTable/slt-ui',
		text: `We're on GitHub!`
	},
	sections: [
		{
			name: 'Components',
			sectionDepth: 0,
			components: [
				path.resolve(`./src/[A-Z]*/?([A-Z]*)/[A-Z]*.{js,jsx,ts,tsx}`),
				path.resolve(`./src/[A-Z]*/[A-Z]*.{js,jsx,ts,tsx}`)
			]
		},
		{
			name: 'Demos',
			sections: getDemos(),
			sectionDepth: 1
		}
	],
	skipComponentsWithoutExample: false,
	styleguideDir: path.resolve('./docs'),
	template: {
		body: {
			scripts: [{ src: '/async/index.min.js', defer: true }]
		},
		head: {
			links: [
				{
					href: './styleguidist-env.css',
					rel: 'stylesheet',
					type: 'text/css'
				}
			]
		}
	}
};

export default config;
