const isProd = process.env.NODE_ENV === 'production'
const warnToErrorLevel = isProd ? 'error' : 'warn'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
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
    'template-curly-spacing': 0,
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
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
    'no-return-assign': 0,
    'multiline-ternary': ['error', 'always-multiline']
  }
}
