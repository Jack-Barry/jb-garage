import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Progress', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Progress', () => {
    test('applies element class name and default aria attributes', () => {
      expect(bsJs({ elementType: 'progress', progressValue: 50 })).toStrictEqual({
        classes: { progress: true },
        inlineStyles: {},
        elementAttributes: {
          role: 'progressbar',
          'aria-valuenow': 50,
          'aria-valuemax': 100,
          'aria-valuemin': 0
        }
      })
    })

    test('applies custom valuemin', () => {
      expect(bsJs({ elementType: 'progress', progressValue: 50, progressMin: 20 })).toStrictEqual({
        classes: { progress: true },
        inlineStyles: {},
        elementAttributes: {
          role: 'progressbar',
          'aria-valuenow': 50,
          'aria-valuemax': 100,
          'aria-valuemin': 20
        }
      })
    })

    test('applies custom valuemax', () => {
      expect(bsJs({ elementType: 'progress', progressValue: 50, progressMax: 200 })).toStrictEqual({
        classes: { progress: true },
        inlineStyles: {},
        elementAttributes: {
          role: 'progressbar',
          'aria-valuenow': 50,
          'aria-valuemax': 200,
          'aria-valuemin': 0
        }
      })
    })

    test('applies width when stacked', () => {
      expect(bsJs({ elementType: 'progress', progressValue: 50, isStacked: true })).toStrictEqual({
        classes: { progress: true },
        inlineStyles: { width: '50%' },
        elementAttributes: {
          role: 'progressbar',
          'aria-valuenow': 50,
          'aria-valuemax': 100,
          'aria-valuemin': 0
        }
      })
    })
  })

  describe('Progress Bar', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'progress-bar', progressValue: 50 })).toStrictEqual({
        classes: { 'progress-bar': true },
        inlineStyles: { width: '50%' },
        elementAttributes: {}
      })
    })

    test('applies custom valuemin', () => {
      expect(
        bsJs({ elementType: 'progress-bar', progressValue: 50, progressMin: 20 })
      ).toStrictEqual({
        classes: { 'progress-bar': true },
        inlineStyles: { width: '62.5%' },
        elementAttributes: {}
      })
    })

    test('applies custom valuemax', () => {
      expect(
        bsJs({ elementType: 'progress-bar', progressValue: 50, progressMax: 200 })
      ).toStrictEqual({
        classes: { 'progress-bar': true },
        inlineStyles: { width: '25%' },
        elementAttributes: {}
      })
    })

    test('does not apply width when stacked', () => {
      expect(
        bsJs({ elementType: 'progress-bar', progressValue: 50, isStacked: true })
      ).toStrictEqual({
        classes: { 'progress-bar': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies striped class name', () => {
      expect(bsJs({ elementType: 'progress-bar', progressValue: 50, striped: true })).toStrictEqual(
        {
          classes: { 'progress-bar': true, 'progress-bar-striped': true },
          inlineStyles: { width: '50%' },
          elementAttributes: {}
        }
      )

      expect(
        bsJs({ elementType: 'progress-bar', progressValue: 50, striped: false })
      ).toStrictEqual({
        classes: { 'progress-bar': true },
        inlineStyles: { width: '50%' },
        elementAttributes: {}
      })
    })

    test('applies animated class name', () => {
      expect(
        bsJs({ elementType: 'progress-bar', progressValue: 50, animated: true })
      ).toStrictEqual({
        classes: { 'progress-bar': true, 'progress-bar-animated': true },
        inlineStyles: { width: '50%' },
        elementAttributes: {}
      })

      expect(
        bsJs({ elementType: 'progress-bar', progressValue: 50, animated: false })
      ).toStrictEqual({
        classes: { 'progress-bar': true },
        inlineStyles: { width: '50%' },
        elementAttributes: {}
      })
    })
  })
})
