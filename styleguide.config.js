/*
Look inside of `webpack.config.js` at the `styleguide` variable
to edit our styleguidist config.
*/
// const config = require('./docs/webpack.config.js');
// module.exports = config;
const babelConfig = require('./builder/config/babel.config');
module.exports = {
	webpackConfig: Object.assign({}, require('./docs/webpack.config.js').styleguidistConfig, {
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
