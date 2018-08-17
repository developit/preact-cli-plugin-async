# preact-cli-plugin-async

[![npm](https://img.shields.io/npm/v/preact-cli-plugin-async.svg)](https://npm.im/preact-cli-plugin-async) [![travis](https://travis-ci.org/developit/preact-cli-plugin-async.svg?branch=master)](https://travis-ci.org/developit/preact-cli-plugin-async) [![greenkeeper](https://badges.greenkeeper.io/developit/preact-cli-plugin-async.svg)](https://greenkeeper.io/)

[Preact CLI] plugin that adds optimized support for async/await via [fast-async].

> **Note:** this is now just a copy of [preact-cli-plugin-fast-async](https://github.com/plusCubed/preact-cli-plugin-fast-async) by [@plusCubed](https://github.com/pluscubed).

## Why do I want this?

ormally, transpiling async/await produces a large amount of code and depends on a runtime like `regenerator-runtime`.  While that is optimal from a compatibility standpoint, it's not so great for bundle size.  Using [fast-async], this plugin transforms your async functions into Promises just like you would write by hand!

It transforms this:

```js
async () => await (await fetch('/')).text()
```

... to something that roughly looks like this:

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

MIT  
Original version © [developit](https://github.com/developit)  
Current fast-async version © [Daniel Ciao](https://github.com/pluscubed)

[Preact CLI]: https://github.com/developit/preact-cli
[fast-async]: https://github.com/MatAtBread/fast-async
