'use strict'

module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-standard-scss',
    'stylelint-config-html/html',
    'stylelint-config-html/vue',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': '^[a-z][a-z0-9-_]*$',
  },
}
