const MAX_HEADER_LENGTH = 72

/** @type {import('cz-git').UserConfig} */
const config = {
  rules: {
    'header-max-length': [0, 'always', MAX_HEADER_LENGTH]
  },
  prompt: {
    useEmoji: true,
    scopes: ['global', 'utils-generic'],
    allowCustomScopes: false,
    allowEmptyScopes: false,
    maxHeaderLength: MAX_HEADER_LENGTH,
    types: customTypes()
  }
}

module.exports = config

function customTypes() {
  return [
    {
      value: 'wip',
      name: 'wip:      🚧  Work in progress (will eventually be squashed)',
      emoji: ':construction:'
    },
    { value: 'fix', name: 'fix:      🐛  A bug fix (patch)', emoji: ':bug:' },
    {
      value: 'feat',
      name: 'feat:     ✨  A new feature (minor)',
      emoji: ':sparkles:'
    },
    {
      value: 'test',
      name: 'test:     ✅  Adding missing tests or correcting existing tests',
      emoji: ':white_check_mark:'
    },
    {
      value: 'style',
      name: 'style:    💄  Changes that do not affect the meaning of the code',
      emoji: ':lipstick:'
    },
    {
      value: 'build',
      name: 'build:    📦️   Changes that affect the build system or external dependencies (patch)',
      emoji: ':package:'
    },
    {
      value: 'ci',
      name: 'ci:       🎡  Changes to our CI configuration files and scripts',
      emoji: ':ferris_wheel:'
    },
    {
      value: 'chore',
      name: "chore:    🔨  Other changes that don't modify src or test files",
      emoji: ':hammer:'
    },
    {
      value: 'docs',
      name: 'docs:     📝  Documentation only changes (patch)',
      emoji: ':memo:'
    },
    {
      value: 'perf',
      name: 'perf:     ⚡️  A code change that improves performance (patch)',
      emoji: ':zap:'
    },
    {
      value: 'revert',
      name: 'revert:   ⏪️  Reverts a previous commit',
      emoji: ':rewind:'
    },
    {
      value: 'init',
      name: 'init:     🎉️  Initial commit for a project',
      emoji: ':tada:'
    }
  ]
}
