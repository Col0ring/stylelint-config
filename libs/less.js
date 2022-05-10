module.exports = {
  extends: ['./basic'],
  overrides: [
    {
      files: ['**/*.less'],
      // postcss-less 会引起报错，暂时不用这个，直接关 at-rule-no-unknown
      // customSyntax: 'postcss-less',
      rules: {
        'no-invalid-double-slash-comments': null,
        'at-rule-no-unknown': null,
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
