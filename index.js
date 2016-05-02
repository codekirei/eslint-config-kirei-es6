'use strict'

// modules ---------------------------------------------------------------------

// npm
const es5Rules = require('eslint-config-kirei-es5').rules

// local
const es6Rules = require('./rules/es6')
const importRules = require('./rules/import')

// config ----------------------------------------------------------------------

const overrideRules = {
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
    overrideRules,
    es6Rules,
    importRules
  ),
  es6Rules,
  importRules,
}
