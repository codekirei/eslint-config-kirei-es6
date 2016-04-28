'use strict'

// node modules ----------------------------------------------------------------

const fs = require('fs')
const path = require('path')
const assert = require('assert')

// node modules ----------------------------------------------------------------

const diff = require('lodash.difference')

// local modules ---------------------------------------------------------------

const kireiES6Rules = Object.keys(require('../rules/es6').rules)
const kireiImportRules =
  Object.keys(
    require('../rules/import').rules
  ).map(rule => rule.split('/')[1])

// setup -----------------------------------------------------------------------

const kireiES5Path = './node_modules/eslint-config-kirei-es5/rules'
let kireiES5Rules
let kireiESLintRules
let eslintRules
let importRules

// cases -----------------------------------------------------------------------

exports['eslint-config-kirei-es6'] = {

  'before': () => {
    kireiES5Rules = Object.keys(
      fs.readdirSync(kireiES5Path)
        .map(file => path.join('..', kireiES5Path, file))
        .map(file => require(file).rules)
        .reduce((prev, cur) => Object.assign(prev, cur), {})
    )

    kireiESLintRules = [].concat(kireiES5Rules, kireiES6Rules)

    eslintRules = fs.readdirSync('./node_modules/eslint/lib/rules')
      .map(rule => path.basename(rule, '.js'))

    importRules = fs.readdirSync('./node_modules/eslint-plugin-import/lib/rules')
      .map(rule => path.basename(rule, '.js'))
  },

  'all ESLint rules are configured': () => {
    assert.deepEqual(diff(eslintRules, kireiESLintRules), [])
  },

  'only ESLint rules are configured': () => {
    assert.deepEqual(diff(kireiESLintRules, eslintRules), [])
  },

  'all import rules are configured': () => {
    assert.deepEqual(diff(importRules, kireiImportRules), [])
  },

  'only import rules are configured': () => {
    assert.deepEqual(diff(kireiImportRules, importRules), [])
  },

}

