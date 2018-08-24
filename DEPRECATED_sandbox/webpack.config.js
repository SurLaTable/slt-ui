import config from '../builder/config/build.webpack.config.js';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default config('Sandbox', {
	resolve: {
		alias: {
			//This will probably change
			'@sur-la-table/slt-ui': path.posix.resolve('./src/'),
			'@sur-la-table/slt-ui-async': path.posix.resolve('./manifest/index.js')
		}
	},
	externals: {
		react: false,
		'react-dom': false,
		'react-redux': false,
		redux: false
	},
	entry: {
		index: path.posix.resolve(__dirname, 'index.js')
	},
	output: {
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.posix.resolve(__dirname, 'index.html')
		})
	]
});
