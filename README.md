# crypto-dir

Cross platform package to get the data directory for a cryptocurrency

## Install

```bash
$ npm install crypto-dir
```

## Test

```bash
$ npm test
```

## Usage

```js
var dir = require('crypto-dir')
dir('bitcoin')
// => '/Users/evan/Library/Application Support/Bitcoin'
```

## CLI

```bash
$ npm install -g crypto-dir
$ crypto-dir bitcoin
// => '/Users/evan/Library/Application Support/Bitcoin'
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
