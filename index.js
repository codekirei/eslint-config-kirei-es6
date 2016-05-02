'use strict'

// modules ---------------------------------------------------------------------

// npm
const es5Rules = require('eslint-config-kirei-es5').rules

// local
const es6Rules = require('./rules/import')
const importRules = require('./rules/import')

// config ----------------------------------------------------------------------

const overrides = {
  strict: 0,
}

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.jsx',
        ],
      },
    },
  },
  rules: Object.assign(
    {},
    es5Rules,
    overrides,
    es6Rules,
    importRules
  ),
  es6Rules,
  importRules,
}
