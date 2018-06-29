module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					ie: 11,
					edge: 14,
					firefox: 45,
					chrome: 49,
					safari: 10,
					node: '6.11'
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
				polyfill: false,
				regenerator: true,
				moduleName: '@babel/runtime',
				useBuiltIns: true,
				useESModules: true
			}
		],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-classes'
	]
};
