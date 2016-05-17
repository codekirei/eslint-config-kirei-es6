'use strict'

// modules ---------------------------------------------------------------------

// npm
const es5Rules = require('eslint-config-kirei-es5').rules

// local
const es6Rules = require('./rules/es6')
const importRules = require('./rules/import')

// config ----------------------------------------------------------------------

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
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
  env: {
    es6: true,
  },
  rules: Object.assign(
    {},
    es5Rules,
    es6Rules,
    importRules
  ),
  es6Rules,
  importRules,
}
