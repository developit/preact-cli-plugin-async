# preact-cli-plugin-async [![npm](https://img.shields.io/npm/v/preact-cli-plugin-async.svg)](https://npm.im/preact-cli-plugin-async)

[Preact CLI] plugin that adds optimized support for async/await via [Kneden].

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

[Kneden]: https://github.com/babel/kneden