const transformGroups = require('style-dictionary/lib/common/transformGroups')

module.exports = {
  source: ['packages/style-dictionary/tokens/**/*.json'],
  platforms: {
    scss: {
      transforms: transformGroups.scss,
      buildPath: 'dist/packages/style-dictionary/scss/',
      files: [
        sassMapFor('colors/_base', isBaseColor),
        sassMapFor('colors/_light_mode', isLightModeColor),
        sassMapFor('colors/_dark_mode', isDarkModeColor),
        sassMapFor('_sizes', isNonFontSize),
        sassVariablesFor('fonts/_families', isFontFamily),
        sassMapFor('fonts/_sizes', isFontSize)
      ]
    },
    js: {
      transforms: transformGroups.js,
      buildPath: 'dist/packages/style-dictionary/js/',
      files: [
        ...esModuleFor('colors/base', isBaseColor),
        ...esModuleFor('colors/light_mode', isLightModeColor),
        ...esModuleFor('colors/dark_mode', isDarkModeColor),
        ...esModuleFor('sizes', isNonFontSize),
        ...esModuleFor('fonts/families', isFontFamily),
        ...esModuleFor('fonts/sizes', isFontSize)
      ]
    }
  }
}

function isBaseColor(token) {
  return isColor(token) && typeIs(token, 'base')
}

function isLightModeColor(token) {
  return isColor(token) && typeIs(token, 'light_mode')
}

function isDarkModeColor(token) {
  return isColor(token) && typeIs(token, 'dark_mode')
}

function isNonFontSize(token) {
  return isSize(token) && !typeIs(token, 'font')
}

function isFontFamily(token) {
  return token.attributes.category === 'font_family'
}

function isFontSize(token) {
  return isSize(token) && typeIs(token, 'font')
}

function isColor(token) {
  return token.attributes.category === 'color'
}

function isSize(token) {
  return token.attributes.category === 'size'
}

function typeIs(token, type) {
  return token.attributes.type === type
}

function sassMapFor(path, filter) {
  return {
    format: 'scss/map-flat',
    destination: `${path}.scss`,
    filter
  }
}

function sassVariablesFor(path, filter) {
  return {
    format: 'scss/variables',
    destination: `${path}.scss`,
    filter
  }
}

function esModuleFor(path, filter) {
  return [
    {
      format: 'javascript/es6',
      destination: `${path}.js`,
      filter
    },
    {
      format: 'typescript/es6-declarations',
      destination: `${path}.d.ts`,
      filter
    }
  ]
}
