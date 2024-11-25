const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginReact = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }],
      '@typescript-eslint/no-shadow': ['error'],
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-console': ['error', {
        allow: ['warn', 'error']
      }],
      'react/jsx-max-props-per-line': ['error', {
        'maximum': 1
      }],
      'indent': ['error', 2],
      '@typescript-eslint/no-explicit-any': 'off',
      'function-paren-newline': ['error', {
        'minItems': 1
      }],
      'object-curly-newline': [
        'error',
        {
          'ObjectExpression': {
            'multiline': true,
            'minProperties': 1
          },
          'ObjectPattern': {
            'multiline': true
          },
          'ImportDeclaration': 'never',
          'ExportDeclaration': {
            'multiline': true,
            'minProperties': 1
          }
        }
      ],
      'object-property-newline': ['error', {
        'allowMultiplePropertiesPerLine': false
      }]
    }
  }
];