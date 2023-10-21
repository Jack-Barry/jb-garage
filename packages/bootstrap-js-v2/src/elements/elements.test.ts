import { BootstrapJs } from '../BootstrapJs'
import { BsJsElement, BsJsOptions } from '../_types'

describe('Elements', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies class name for expected simple element types', () => {
    const elementTypes: BsJsElement[] = [
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
      'btn-toolbar',
      'card',
      'card-body',
      'card-footer',
      'card-group',
      'card-header',
      'card-img-overlay',
      'card-subtitle',
      'card-text',
      'card-title',
      'carousel-caption',
      'carousel-indicators',
      'carousel-inner',
      'collapse',
      'dropdown',
      'dropdown-divider',
      'dropdown-header',
      'dropdown-menu'
    ]

    for (const elementType of elementTypes) {
      expect(bsJs({ elementType } as BsJsOptions<typeof elementType>)).toStrictEqual({
        classes: { [elementType]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    }
  })
})
