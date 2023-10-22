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
import {
  applyPageItemStyles,
  applyPaginationStyles
} from '../bootstrapEntities/components/pagination'
import { applyPlaceholderAnimationStyles } from '../bootstrapEntities/components/placeholder'
import { applyPopoverStyles } from '../bootstrapEntities/components/popover'
import {
  applyProgressBarStyles,
  applyProgressStyles
} from '../bootstrapEntities/components/progress'
import { applySpinnerStyles } from '../bootstrapEntities/components/spinner'
import { applyToastStyles } from '../bootstrapEntities/components/toast'
import { applyTooltipStyles } from '../bootstrapEntities/components/tooltip'
import { applyImageStyles } from '../bootstrapEntities/content/image'
import {
  applyTableEntryStyles,
  applyTableGroupStyles,
  applyTableResponsiveStyles,
  applyTableStyles
} from '../bootstrapEntities/content/table'
import {
  applyFormCheckInputStyles,
  applyFormCheckStyles
} from '../bootstrapEntities/forms/formCheck'
import { applyFormControlStyles } from '../bootstrapEntities/forms/formControl'
import { applyFormGroupStyles } from '../bootstrapEntities/forms/formGroup'
import { applyFormLabelStyles } from '../bootstrapEntities/forms/formLabel'
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
    case 'form-check':
      applyFormCheckStyles(result, options as BsJsOptions<'form-check'>)
      break
    case 'form-check-input':
      applyFormCheckInputStyles(result, options as BsJsOptions<'form-check-input'>)
      break
    case 'form-group':
      applyFormGroupStyles(result, options as BsJsOptions<'form-group'>)
      break
    case 'form-control':
    case 'form-range':
      applyFormControlStyles(result, options as BsJsOptions<'form-control' | 'form-range'>)
      break
    case 'form-label':
      applyFormLabelStyles(result, options as BsJsOptions<'form-label'>)
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
    case 'page-item':
      applyPageItemStyles(result, options as BsJsOptions<'page-item'>)
      break
    case 'pagination':
      applyPaginationStyles(result, options as BsJsOptions<'pagination'>)
      break
    case 'placeholder-animation':
      applyPlaceholderAnimationStyles(
        result,
        options as unknown as BsJsOptions<'placeholder-animation'>
      )
      break
    case 'popover':
      applyPopoverStyles(result, options as BsJsOptions<'popover'>)
      break
    case 'progress':
      applyProgressStyles(result, options as unknown as BsJsOptions<'progress'>)
      break
    case 'progress-bar':
      applyProgressBarStyles(result, options as unknown as BsJsOptions<'progress-bar'>)
      break
    case 'spinner':
      applySpinnerStyles(result, options as unknown as BsJsOptions<'spinner'>)
      break
    case 'table':
      applyTableStyles(result, options as unknown as BsJsOptions<'table'>)
      break
    case 'table-entry':
      applyTableEntryStyles(result, options as unknown as BsJsOptions<'table-entry'>)
      break
    case 'table-group':
      applyTableGroupStyles(result, options as unknown as BsJsOptions<'table-group'>)
      break
    case 'table-responsive':
      applyTableResponsiveStyles(result, options as unknown as BsJsOptions<'table-responsive'>)
      break
    case 'toast':
      applyToastStyles(result, options as unknown as BsJsOptions<'toast'>)
      break
    case 'tooltip':
      applyTooltipStyles(result, options as unknown as BsJsOptions<'tooltip'>)
      break
    default:
      applyElementNameAsClass(result, options.elementType)
      break
  }
}
