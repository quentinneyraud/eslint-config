const isDev = process.env.NODE_ENV === 'development'
const warnToErrorLevel = isDev ? 'warn' : 'error'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'eslint-config-standard'
  ],
  rules: {
    curly: ['error', 'multi-line'],
    'no-unused-vars': [warnToErrorLevel, {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'arrow-parens': ['error', 'as-needed'],
    'template-curly-spacing': ['error', 'never'],
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral', 'TemplateLiteral *'],
      SwitchCase: 1
    }],
    'no-console': [warnToErrorLevel],
    'no-undef': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error', {
      destructuring: 'all'
    }],
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true
      }],
    'no-return-assign': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'prefer-template': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'import/newline-after-import': ['error', {
      count: 1
    }],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': 'error',
    'no-useless-concat': 'error',
    'object-property-newline': [
      'error', {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ]
  }
}
