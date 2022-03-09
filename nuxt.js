const vanillaRules = require('./vanilla.js').rules

// const isProd = process.env.NODE_ENV === 'production'
// const warnToErrorLevel = isProd ? 'error' : 'warn'

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
    ...vanillaRules,
    'vue/no-v-html': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false
    }],
    'vue/custom-event-name-casing': 0,
    'vue/no-lone-template': 0,
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: true
    }]
  }
}

module.exports = config
