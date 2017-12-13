# preact-cli-plugin-async [![npm](https://img.shields.io/npm/v/preact-cli-plugin-async.svg)](https://npm.im/preact-cli-plugin-async)

[Preact CLI] plugin that adds optimized support for async/await via [Kneden].


## Why do I want this?

Normally, transpiling async/await produces a large amount of code and depends on a runtime like `regenerator-runtime`.  While that is optimal from a compatibility standpoint, it's not so great for bundle size.  Using Kneden, this plugin transforms your async functions into Promises just like you would write by hand!

It transforms this:

```js
async () => await (await fetch('/')).text()
```

... to this:

```js
function () {
	return Promise.resolve().then(function() {
		return fetch("/")
	}).then(function(e) {
		return e.text()
	})
}
```

Pretty great, right?


## Installation

```bash
npm i -D preact-cli-plugin-async
```

... then include it in your project by creating a `preact.config.js`:

```js
import asyncPlugin from 'preact-cli-plugin-async';

export default (config) => {
    asyncPlugin(config);
}
```


## License

MIT © [developit](https://github.com/developit)

[Preact CLI]: https://github.com/developit/preact-cli
[Kneden]: https://github.com/babel/kneden