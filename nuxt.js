const isProd = process.env.NODE_ENV === 'production'

const warnToErrorLevel = isProd ? 'error' : 'warn'

const config = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  settings: {
    'import/resolver': 'nuxt'
  },
  rules: {
    curly: ['error', 'multi-line'],
    'no-unused-vars': [warnToErrorLevel, {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'vue/no-v-html': 0,
    'arrow-parens': ['error', 'as-needed'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false
    }],
    'template-curly-spacing': 0,
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
      SwitchCase: 1
    }],
    'vue/custom-event-name-casing': 0,
    'vue/no-lone-template': 0,
    'no-console': [warnToErrorLevel],
    'no-undef': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error', {
      destructuring: 'all'
     }],
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: true
    }],
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true
      }
    ],
    'prefer-template': 0
  }
}

module.exports = config
