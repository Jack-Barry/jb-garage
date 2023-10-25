import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Text', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided config is not breakpoint specific', () => {
    test('sets applicable text classes', () => {
      expect(
        bsJs({
          text: {
            align: 'center',
            break: true,
            decoration: 'line-through',
            lineHeight: '1',
            monospace: true,
            resetColor: true,
            size: '2',
            style: 'italic',
            transform: 'capitalize',
            weight: 'bold',
            wrap: true
          }
        })
      ).toStrictEqual({
        classes: {
          'text-center': true,
          'text-break': true,
          'text-decoration-line-through': true,
          'lh-1': true,
          'font-monospace': true,
          'text-reset': true,
          'fs-2': true,
          'fst-italic': true,
          'text-capitalize': true,
          'fw-bold': true,
          'text-wrap': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided config is breakpoint specific', () => {
    test('sets applicable text classes', () => {
      expect(bsJs({ breakpoints: { sm: { text: { align: 'end' } } } })).toStrictEqual({
        classes: { 'text-sm-end': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
