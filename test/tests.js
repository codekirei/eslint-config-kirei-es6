'use strict'

// node modules ----------------------------------------------------------------

const assert = require('assert')

// node modules ----------------------------------------------------------------

const diff = require('lodash.difference')
const eslint = require('eslint')
const importPlugin = require('eslint-plugin-import')

// local modules ---------------------------------------------------------------

const localES6 = require('../rules/es6').rules
const localImport = require('../rules/import').rules

// es5 rules
const bestPractices = require('../node_modules/eslint-config-kirei-es5/rules/best-practices')
const node = require('../node_modules/eslint-config-kirei-es5/rules/node')
const possibleErrors = require('../node_modules/eslint-config-kirei-es5/rules/possible-errors')
const strictMode = require('../node_modules/eslint-config-kirei-es5/rules/strict-mode')
const stylisticIssues = require('../node_modules/eslint-config-kirei-es5/rules/stylistic-issues')
const variables = require('../node_modules/eslint-config-kirei-es5/rules/variables')

// setup -----------------------------------------------------------------------

const eslintRules = Object.keys(eslint.linter.defaults().rules)

const localES5Rules = Object.keys(
  Object.assign(
    {},
    bestPractices.rules,
    node.rules,
    possibleErrors.rules,
    strictMode.rules,
    stylisticIssues.rules,
    variables.rules
  )
)

const localES6Rules = Object.keys(localES6)

const importRules = Object.keys(importPlugin.rules)
const localImportRules = Object.keys(localImport).map(rule => rule.split('/')[1])

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

