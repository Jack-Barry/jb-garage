const commitTypes = require('cz-emoji/lib/types.json')

module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [2, 'always', commitTypes.map((type) => type.name)]
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^((?:\w|-)*)(?:\((.*)\))?!?: (.*)$/,
      breakingHeaderPattern: /^((?:\w|-)*)(?:\((.*)\))?!: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
    }
  }
}
