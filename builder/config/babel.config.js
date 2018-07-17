module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'ie >= 11'],
					node: 10,
				},
				useBuiltIns: 'usage',
				loose: true,
			},
		],
		'@babel/preset-react',
	],
	// Plugin order matters:
	plugins: [
		[
			'@babel/plugin-transform-runtime',
			{
				helpers: false,
				polyfill: false,
				regenerator: true,
				moduleName: '@babel/runtime',
				useBuiltIns: true,
				useESModules: true,
			},
		],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-classes',
	],
};
