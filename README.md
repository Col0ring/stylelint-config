# @col0ring/stylelint-config

Col0ring's Stylelint Config Presets.

## Install

```sh
npm install stylelint @col0ring/stylelint-config -D
# or
yarn add stylelint @col0ring/stylelint-config -D
```

## Usage

```js
// stylelint.config.js
module.exports = {
  extends: ['@col0ring/stylelint-config'],
}
```

If you need a separate configuration:

```js
// stylelint.config.js
module.exports = {
  // css less
  extends: [
    '@col0ring/stylelint-config/basic',
    '@col0ring/stylelint-config/less',
  ],
}
```

This config has built-in prettier, you need to create a prettier.config.js file and set the following configuration：

```js
// prettier.config.js
module.exports = require('@col0ring/prettier-config')()
```

See More: [@col0ring/prettier-config](https://github.com/col0ring/prettier-config)
