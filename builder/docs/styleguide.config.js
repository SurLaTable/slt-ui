/*
Look inside of `webpack.config.js` at the `styleguide` variable
to edit our styleguidist config.
*/
const babelConfig = require('../config/babel.config');
module.exports = {
	styleguideDir: '../../docs',
	webpackConfig: Object.assign({}, require('./webpack.config').styleguidistConfig, {
		module: {
			rules: [
				{
					test: /(\.js|\.jsx)$/,
					use: {
						loader: 'babel-loader',
						options: babelConfig
					},
					exclude: /(node_modules)/
				}
			]
		}
	})
};
