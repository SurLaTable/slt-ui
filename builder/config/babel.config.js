module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'ie >= 11'],
					node: 10
				},
				useBuiltIns: 'usage',
				loose: true
			}
		],
		'@babel/preset-react'
	],
	// Plugin order matters:
	plugins: [
		[
			'@babel/plugin-transform-runtime',
			{
				helpers: false,
				regenerator: true,
				useESModules: true
			}
		],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-transform-classes',
		'react-hot-loader/babel'
	]
};
