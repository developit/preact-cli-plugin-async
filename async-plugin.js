export default function asyncPlugin(config) {
	let babel = config.module.loaders.filter(loader => loader.loader === 'babel-loader')[0].options;

	// Blacklist regenerator within env preset:
	babel.presets[0][1].exclude.push(
		'transform-async-to-generator'
	);

	// Add missing plugin syntax, until new patch for (developit/preact-cli#461)
	babel.plugins.push('syntax-dynamic-import');

	// Add Kneden
	babel.plugins.push(require.resolve('babel-plugin-async-to-promises'));
}
