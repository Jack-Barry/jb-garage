import { BootstrapJs } from '../../BootstrapJs'
import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../../utils'

import { BsJsOpacityStylesOptions, applyOpacityStyles } from './opacity'

describe('Utilities: Opacity', () => {
  let result: BsJsStyles
  let baseOptions: BsJsOpacityStylesOptions

  beforeEach(() => {
    result = emptyStyles()
    baseOptions = { classNamePrefix: 'opacity-prefix' }
  })

  test('returns early when no opacity is provided', () => {
    applyOpacityStyles(result, baseOptions)
    expect(result).toStrictEqual(emptyStyles())
  })

  describe('when opacity is number', () => {
    test('sets opacity class', () => {
      applyOpacityStyles(result, baseOptions, 10)
      expect(result).toStrictEqual({
        classes: { 'opacity-prefix-10': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when opacity is string', () => {
    test('sets opacity class', () => {
      applyOpacityStyles(result, baseOptions, '0')
      expect(result).toStrictEqual({
        classes: { 'opacity-prefix-0': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      result = emptyStyles()
      applyOpacityStyles(result, baseOptions, '1')
      expect(result).toStrictEqual({
        classes: { 'opacity-prefix-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      result = emptyStyles()
      applyOpacityStyles(result, baseOptions, '10')
      expect(result).toStrictEqual({
        classes: { 'opacity-prefix-10': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('with CSS variable key', () => {
    beforeEach(() => {
      baseOptions.cssVariableKey = 'css-key'
    })

    describe('when opacity is number', () => {
      test('sets CSS variable value', () => {
        applyOpacityStyles(result, baseOptions, { asCssVar: 0.9 })
        expect(result).toStrictEqual({
          classes: {},
          inlineStyles: {
            'css-key': 0.9
          },
          elementAttributes: {}
        })
      })
    })

    describe('when opacity is string', () => {
      test('sets CSS variable value', () => {
        applyOpacityStyles(result, baseOptions, { asCssVar: '50%' })
        expect(result).toStrictEqual({
          classes: {},
          inlineStyles: {
            'css-key': '50%'
          },
          elementAttributes: {}
        })
      })
    })
  })

  describe('with class name suffix', () => {
    beforeEach(() => {
      baseOptions.classNameSuffix = '-opacity-suffix'
    })

    describe('when opacity is number', () => {
      test('sets opacity class', () => {
        applyOpacityStyles(result, baseOptions, 10)
        expect(result).toStrictEqual({
          classes: { 'opacity-prefix-10-opacity-suffix': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    describe('when opacity is string', () => {
      test('sets opacity class', () => {
        applyOpacityStyles(result, baseOptions, '0')
        expect(result).toStrictEqual({
          classes: { 'opacity-prefix-0-opacity-suffix': true },
          inlineStyles: {},
          elementAttributes: {}
        })

        result = emptyStyles()
        applyOpacityStyles(result, baseOptions, '1')
        expect(result).toStrictEqual({
          classes: { 'opacity-prefix-1-opacity-suffix': true },
          inlineStyles: {},
          elementAttributes: {}
        })

        result = emptyStyles()
        applyOpacityStyles(result, baseOptions, '10')
        expect(result).toStrictEqual({
          classes: { 'opacity-prefix-10-opacity-suffix': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })
  })

  describe('as plain opacity util', () => {
    const bsJs = new BootstrapJs().bsJs

    test('sets opacity class', () => {
      expect(bsJs({ opacity: 0 })).toStrictEqual({
        classes: { 'opacity-0': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
