import config from '../builder/config/build.webpack.config.js';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default config('Sandbox', {
	mode: 'development',
	resolve: {
		alias: {
			//This will probably change
			'@sur-la-table/slt-ui': path.resolve('./src/index.js'),
		},
	},
	externals: {
		react: false,
		'react-dom': false,
		'react-redux': false,
		redux: false,
	},
	entry: {
		index: path.resolve(__dirname, 'index.js'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
		}),
	],
});
