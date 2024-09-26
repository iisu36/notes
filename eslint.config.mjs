import globals from 'globals'
import react from 'eslint-plugin-react'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    ignores: ['**/vite.config.js', '**/node_modules/', '**/dist/'],
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: { react },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],

      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'no-console': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
]
