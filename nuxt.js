const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')
const vanillaRules = require('./vanilla.js').rules

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
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false
    }],
    'vue/custom-event-name-casing': 'off',
    'vue/no-lone-template': 'off',
    'vue/comma-dangle': ['error', 'never'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below'
    }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/require-prop-types': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/padding-lines-in-component-definition': ['error', {
      betweenOptions: 'always',
      withinOption: {
        methods: {
          betweenItems: 'always'
        },
        watch: {
          betweenItems: 'always'
        },
        computed: {
          betweenItems: 'always'
        }
      }
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      ignoreWhenNoAttributes: false
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      allowEmptyLines: true
    }],
    'vue/prefer-template': vanillaRules['prefer-template'],
    'vue/array-element-newline': vanillaRules['array-element-newline'],
    'vue/array-bracket-newline': vanillaRules['array-bracket-newline'],
    'vue/no-useless-concat': vanillaRules['no-useless-concat'],
    'vue/template-curly-spacing': vanillaRules['template-curly-spacing'],
    'vue/object-property-newline': vanillaRules['object-property-newline'],
    'vue/object-curly-newline': vanillaRules['object-curly-newline']
  }
}

module.exports = config
