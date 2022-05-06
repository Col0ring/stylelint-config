# @col0ring/stylelint-config
Col0ring's Stylelint Config Presets.
## Install
```sh
npm install @col0ring/stylelint-config -D
# or
yarn add @col0ring/stylelint-config -D
```
## Usage
```js
// stylelint.config.js
module.exports = {
    extends: ["@col0ring/stylelint-config"]
}
```
if you need a  separate configuration:
```js
// stylelint.config.js
module.exports = {
    // css less
    extends: ["@col0ring/stylelint-config/basic","@col0ring/stylelint-config/less"]
}
```
