import path from 'path';
import DotEnv from 'dotenv-webpack';

export default {
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
};
