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
    parser: '@babel/eslint-parser',
    requireConfigFile: false
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
    }],
    'vue/multi-word-component-names': 0,
    'vue/comma-dangle': ['error', 'never'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below'
    }],
    'vue/object-curly-spacing': [2, 'always'],
    'vue/require-prop-types': 0,
  }
}

module.exports = config
