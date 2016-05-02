'use strict'

// modules ---------------------------------------------------------------------

// node
const assert = require('assert')

// npm
const diff = require('lodash.difference')
const es5Conf = require('eslint-config-kirei-es5')
const eslint = require('eslint')
const importPlugin = require('eslint-plugin-import')

// local
const es6Conf = require('..')

// setup -----------------------------------------------------------------------

const allRules = Object.keys(eslint.linter.defaults().rules)
const es5Rules = Object.keys(es5Conf.rules)
const es6Rules = Object.keys(es6Conf.es6Rules)

const allImportRules = Object.keys(importPlugin.rules)
const confImportRules = Object.keys(es6Conf.importRules)
  .map(rule => rule.split('/')[1])

// cases -----------------------------------------------------------------------

exports['eslint-config-kirei-es6'] = {

  'all ESLint rules are configured': () => {
    assert.deepEqual(diff(allRules, [].concat(es5Rules, es6Rules)), [])
  },

  'only ES6 rules are configured': () => {
    assert.deepEqual(diff(es6Rules, allRules), [])
  },

  'all import rules are configured': () => {
    assert.deepEqual(diff(allImportRules, confImportRules), [])
  },

  'only import rules are configured': () => {
    assert.deepEqual(diff(confImportRules, allImportRules), [])
  },

  'config does not throw': () => {
    const linter = new eslint.CLIEngine({
      useEslintrc: false,
      configFile: './index.js',
    })
    assert.doesNotThrow(() => linter.executeOnText(''))
  },

}

