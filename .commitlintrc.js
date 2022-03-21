module.exports = {
  extends: ['gitmoji'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^((?:\w|-)*)(?:\((.*)\))?!?: (.*)$/,
      breakingHeaderPattern: /^((?:\w|-)*)(?:\((.*)\))?!: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
    }
  }
}
