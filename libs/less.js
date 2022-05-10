module.exports = {
  extends: ['./basic'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
  ],
}
