'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'kirei-es5',
    './rules/es6',
    './rules/import',
  ].map(require.resolve),
  rules: {
    strict: 0,
  },
}
