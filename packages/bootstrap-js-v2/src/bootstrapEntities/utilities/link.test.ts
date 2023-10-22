import { BootstrapJs } from '../../BootstrapJs'
import { emptyStyles } from '../../utils'

describe('Utilities: Link', () => {
  const bsJs = new BootstrapJs().bsJs

  test('returns early when no options are provided', () => {
    expect(bsJs({ elementType: 'link' })).toStrictEqual(emptyStyles())
  })

  test('applies color styles', () => {
    expect(bsJs({ elementType: 'link', linkColor: 'primary' })).toStrictEqual({
      classes: { 'link-primary': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies opacity styles', () => {
    expect(bsJs({ elementType: 'link', linkOpacity: '10' })).toStrictEqual({
      classes: { 'link-opacity-10': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'link', linkOpacity: { asCssVar: '10' } })).toStrictEqual({
      classes: {},
      inlineStyles: {
        '--bs-link-opacity': '10'
      },
      elementAttributes: {}
    })
  })

  test('applies underline color styles', () => {
    expect(bsJs({ elementType: 'link', underlineColor: 'primary' })).toStrictEqual({
      classes: { 'link-underline-primary': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies underline offset styles', () => {
    expect(bsJs({ elementType: 'link', underlineOffset: '1' })).toStrictEqual({
      classes: { 'link-offset-1': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies underline opacity styles', () => {
    expect(bsJs({ elementType: 'link', underlineOpacity: '10' })).toStrictEqual({
      classes: { 'link-underline-opacity-10': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'link', underlineOpacity: { asCssVar: '10' } })).toStrictEqual({
      classes: {},
      inlineStyles: {
        '--bs-link-underline-opacity': '10'
      },
      elementAttributes: {}
    })
  })

  test('applies hover opacity styles', () => {
    expect(bsJs({ elementType: 'link', hoverOpacity: '10' })).toStrictEqual({
      classes: { 'link-opacity-10-hover': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'link', hoverOpacity: { asCssVar: '10' } })).toStrictEqual({
      classes: {},
      inlineStyles: {
        '--bs-link-opacity-hover': '10'
      },
      elementAttributes: {}
    })
  })

  test('applies hover underline offset styles', () => {
    expect(bsJs({ elementType: 'link', hoverUnderlineOffset: '1' })).toStrictEqual({
      classes: { 'link-offset-1-hover': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies hover underline opacity styles', () => {
    expect(bsJs({ elementType: 'link', hoverUnderlineOpacity: '10' })).toStrictEqual({
      classes: { 'link-underline-opacity-10-hover': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'link', hoverUnderlineOpacity: { asCssVar: '10' } })).toStrictEqual({
      classes: {},
      inlineStyles: {
        '--bs-link-underline-opacity-hover': '10'
      },
      elementAttributes: {}
    })
  })
})
