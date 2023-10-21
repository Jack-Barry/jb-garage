import { BootstrapJs } from '../BootstrapJs'
import { BootstrapElement } from '../_bootstrapTypes'

describe('Elements', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies class name for expected simple element types', () => {
    const elementTypes: BootstrapElement[] = [
      'accordion',
      'accordion-body',
      'accordion-button',
      'accordion-collapse',
      'accordion-header',
      'accordion-item',
      'alert-heading',
      'alert-link',
      'badge',
      'breadcrumb',
      'breadcrumb-item',
      'btn-toolbar'
    ]

    for (const elementType of elementTypes) {
      expect(bsJs({ elementType })).toStrictEqual({
        classes: { [elementType]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    }
  })

  describe('Alerts', () => {
    test('applies base class name', () => {
      expect(bsJs({ elementType: 'alert' })).toStrictEqual({
        classes: { alert: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies "show" class name', () => {
      expect(bsJs({ elementType: 'alert', show: true })).toStrictEqual({
        classes: { alert: true, show: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'alert', show: false })).toStrictEqual({
        classes: { alert: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
