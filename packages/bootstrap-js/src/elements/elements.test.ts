import { BootstrapJs } from '../BootstrapJs'
import { BootstrapDefaultBreakpoint } from '../_bootstrapTypes'
import { BsJsElement, BsJsOptions } from '../_types'

describe('Elements', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies class name for expected simple element types', () => {
    const elementTypes: BsJsElement[] = [
      'accordion',
      'accordion-body',
      'accordion-collapse',
      'accordion-header',
      'accordion-item',
      'alert-heading',
      'alert-link',
      'badge',
      'breadcrumb',
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
      'dropdown-menu',
      'form-check-label',
      'form-text',
      'input-group-text',
      'list-group',
      'modal-body',
      'modal-content',
      'modal-footer',
      'modal-header',
      'modal-title',
      'navbar-brand',
      'navbar-collapse',
      'navbar-nav',
      'navbar-text',
      'navbar-toggler',
      'navbar-toggler-icon',
      'offcanvas-body',
      'offcanvas-header',
      'offcanvas-title',
      'page-link',
      'placeholder',
      'popover-body',
      'popover-header',
      'progress-stacked',
      'toast-body',
      'toast-container',
      'toast-header',
      'tooltip-arrow',
      'tooltip-inner'
    ]

    for (const elementType of elementTypes) {
      expect(
        bsJs({ elementType } as BsJsOptions<BootstrapDefaultBreakpoint, typeof elementType>)
      ).toStrictEqual({
        classes: { [elementType]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    }
  })
})
