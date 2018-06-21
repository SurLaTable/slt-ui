const webpack = require("webpack");
const babelConfig = require("./babel.config");

module.exports = function() {
	return {
		entry:{
			'index':'./src/index.js'
		},
		resolve: {
		},
		resolveLoader: {
			alias: {
				//needed to support requirejs module
				text: "text-loader",
			}
		},
		externals: {
			jquery: "jQuery",
			'react':'React',
			'react-dom':'ReactDom',
			'react-redux':'ReactRedux',
			'redux':'Redux'
		},
		output: {
			filename: "[name].min.js",
			chunkFilename: "[name].js",
			jsonpFunction: "webpackJsonp",
			publicPath: ""
		},
		module: {
			rules: [
				{
					test: /\.html$/,
					use: {
						loader: "html-loader",
						options: {
							removeComments: false
						}
					}
				},
				{
					test: /(\.js|\.jsx)$/,
					use: { loader: "babel-loader", options: babelConfig },
					//exclude: /(node_modules|bower_components)/
				}
			]
		},
		plugins: [
			new webpack.NamedModulesPlugin(),
			new webpack.NamedChunksPlugin(),
			new webpack.DefinePlugin({
				"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
			})
		]
	};
};
