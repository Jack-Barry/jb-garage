module.exports = {
  env: {
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    {
      env: {
        node: true
      },
      files: ['tools/{configs,scripts}/**/*.{mjs,cjs}', '.eslintrc.js', 'release.config.base.js'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      env: { node: true },
      files: ['**/*.config.js', '**/*.cjs', 'jest.preset.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
