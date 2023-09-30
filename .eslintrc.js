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
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
        pathGroups: [
          { pattern: 'src/**', group: 'internal' },
          { pattern: 'stories/**', group: 'internal' },
          { pattern: 'styles/**', group: 'internal' },
          { pattern: 'testing/**', group: 'internal' }
        ],
        pathGroupsExcludedImportTypes: []
      }
    ]
  },
  overrides: [
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@nx/dependency-checks': 'error'
      }
    },
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
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off'
      }
    }
  ]
}
