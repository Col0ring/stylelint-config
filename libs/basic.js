module.exports = {
  ignoreFiles: [
    '/**/.umi/**',
    '/**/.umi-production/**',
    '/**/*.min.*',
    '/**/dist/**',
    '/**/output/**',
    '/**/coverage/**',
    '/**/public/**',
    '/**/temp/**',
    '/**/__snapshots__/**',
    // dumi
    '/**/docs-dist/**',
    '/**/.dumi/tmp/**',
    '/**/.dumi/tmp-test/**',
    '/**/.dumi/tmp-production/**',
    '/**/tmp/**',
  ],
  extends: [
    // 标准配置
    'stylelint-config-standard',
    // 用于排序
    'stylelint-config-rational-order',
    // prettier
    'stylelint-prettier/recommended',
  ],
  plugins: [
    // 提示书写矛盾的样式
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'font-family-name-quotes': null,
    // rgba
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    // 选择器命名
    'selector-class-pattern': [
      // 命名规范
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case',
      },
    ],
  },
}
