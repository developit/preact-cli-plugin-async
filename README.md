# preact-cli-plugin-fast-async

[![npm](https://img.shields.io/npm/v/preact-cli-plugin-fast-async.svg)](https://npm.im/preact-cli-plugin-fast-async) [![travis](https://travis-ci.org/plusCubed/preact-cli-plugin-fast-async.svg?branch=master)](https://travis-ci.org/plusCubed/preact-cli-plugin-fast-async)

[Preact CLI] plugin that adds optimized support for async/await via [fast-async].


## Why do I want this?

Normally, transpiling async/await produces a large amount of code and depends on a runtime like `regenerator-runtime`.  While that is optimal from a compatibility standpoint, it's not so great for bundle size.  Using fast-async, this plugin transforms your async functions into Promises just like you would write by hand!


## Installation

```bash
npm i -D preact-cli-plugin-fast-async
```

... then include it in your project by creating a `preact.config.js`:

```js
import asyncPlugin from 'preact-cli-plugin-fast-async';

export default (config) => {
    asyncPlugin(config);
}
```


## License

MIT  
Original work © [developit](https://github.com/developit)  
Modified work © [Daniel Ciao](https://github.com/pluscubed)

[Preact CLI]: https://github.com/developit/preact-cli
[fast-async]: https://github.com/MatAtBread/fast-async
