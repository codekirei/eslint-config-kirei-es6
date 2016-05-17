'use strict'

module.exports = {
  'import/default': 2,
  'import/export': 2,
  'import/extensions': [2, {
    js: 'never',
    jsx: 'always',
  }],
  'import/imports-first': [2, 'absolute-first'],
  'import/named': 0,
  'import/namespace': 2,
  'import/no-amd': 0,
  'import/no-commonjs': 0,
  'import/no-deprecated': 0,
  'import/no-duplicates': 2,
  'import/no-extraneous-dependencies': 2,
  'import/no-named-as-default': 2,
  'import/no-named-as-default-member': 2,
  'import/no-namespace': 0,
  'import/no-nodejs-modules': 0,
  'import/no-unresolved': [2, { commonjs: true }],
  'import/order': [2, { groups: ['builtin', 'external'] }],
}
