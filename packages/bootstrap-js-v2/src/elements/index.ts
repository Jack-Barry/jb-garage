import { BsJsElement, BsJsOptions, BsJsStyles } from '../_types'
import { applyAlertStyles } from '../bootstrapEntities/components/alert'
import { applyButtonGroupStyles, applyButtonStyles } from '../bootstrapEntities/components/button'
import { applyCardImageStyles, applyCardLinkStyles } from '../bootstrapEntities/components/card'
import {
  applyCarouselControlIconStyles,
  applyCarouselControlStyles,
  applyCarouselItemStyles,
  applyCarouselStyles
} from '../bootstrapEntities/components/carousel'
import {
  applyDropdownItemStyles,
  applyDropdownToggleStyles
} from '../bootstrapEntities/components/dropdown'
import { applyListGroupItemStyles } from '../bootstrapEntities/components/listGroup'
import { applyModalDialogStyles, applyModalStyles } from '../bootstrapEntities/components/modal'
import {
  applyNavItemStyles,
  applyNavLinkStyles,
  applyNavStyles
} from '../bootstrapEntities/components/nav'
import { applyNavbarStyles } from '../bootstrapEntities/components/navbar'
import { applyOffcanvasStyles } from '../bootstrapEntities/components/offcanvas'
import { applyImageStyles } from '../bootstrapEntities/content/image'
import { applyLinkStyles } from '../bootstrapEntities/utilities/link'

import { applyElementNameAsClass } from './utils'

export type ElementStyleOptions<Element extends BsJsElement | undefined> = Omit<
  BsJsOptions<Element>,
  'breakpoints'
>

/** Modifies the provided `result` object with element-specific styles */
export function applyElementStyles<Element extends BsJsElement | undefined>(
  prefix: string,
  result: BsJsStyles,
  options: ElementStyleOptions<Element>
) {
  if (!options.elementType) {
    return
  }

  switch (options.elementType) {
    case 'alert':
      applyAlertStyles(result, options as BsJsOptions<'alert'>)
      break
    case 'btn':
      applyButtonStyles(result, options as BsJsOptions<'btn'>)
      break
    case 'btn-group':
      applyButtonGroupStyles(result, options as BsJsOptions<'btn-group'>)
      break
    case 'card-img':
      applyCardImageStyles(result, options as BsJsOptions<'card-img'>)
      break
    case 'card-link':
      applyCardLinkStyles(prefix, result, options as BsJsOptions<'card-link'>)
      break
    case 'carousel':
      applyCarouselStyles(result, options as BsJsOptions<'carousel'>)
      break
    case 'carousel-control':
      applyCarouselControlStyles(result, options as unknown as BsJsOptions<'carousel-control'>)
      break
    case 'carousel-control-icon':
      applyCarouselControlIconStyles(
        result,
        options as unknown as BsJsOptions<'carousel-control-icon'>
      )
      break
    case 'carousel-item':
      applyCarouselItemStyles(result, options as BsJsOptions<'carousel-item'>)
      break
    case 'dropdown-item':
      applyDropdownItemStyles(result, options as BsJsOptions<'dropdown-item'>)
      break
    case 'dropdown-toggle':
      applyDropdownToggleStyles(result, options as BsJsOptions<'dropdown-toggle'>)
      break
    case 'img':
      applyImageStyles(result, options as BsJsOptions<'img'>)
      break
    case 'link':
      applyLinkStyles(prefix, result, options as BsJsOptions<'link' | 'card-link'>)
      break
    case 'list-group-item':
      applyListGroupItemStyles(result, options as BsJsOptions<'list-group-item'>)
      break
    case 'modal':
      applyModalStyles(result, options as BsJsOptions<'modal'>)
      break
    case 'modal-dialog':
      applyModalDialogStyles(result, options as BsJsOptions<'modal-dialog'>)
      break
    case 'nav':
      applyNavStyles(result, options as BsJsOptions<'nav'>)
      break
    case 'nav-item':
      applyNavItemStyles(result, options as BsJsOptions<'nav-item'>)
      break
    case 'nav-link':
      applyNavLinkStyles(result, options as BsJsOptions<'nav-link'>)
      break
    case 'navbar':
      applyNavbarStyles(result, options as BsJsOptions<'navbar'>)
      break
    case 'offcanvas':
      applyOffcanvasStyles(result, options as BsJsOptions<'offcanvas'>)
      break
    default:
      applyElementNameAsClass(result, options.elementType)
      break
  }
}
