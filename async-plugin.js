export default function asyncPlugin(config) {
	let babel = config.module.loaders.filter( loader => loader.loader === 'babel-loader')[0].options;

	// Blacklist regenerator within env preset:
	babel.presets[0][1].exclude.push('transform-async-to-generator');

	// Add fast-async
	babel.plugins.push([require.resolve('fast-async'), { spec: true }]);
}
