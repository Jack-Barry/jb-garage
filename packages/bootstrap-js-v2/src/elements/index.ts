import { BsJsElement, BsJsOptions, BsJsStyles } from '../_types'
import {
  applyAccordionButtonStyles,
  applyAccordionStyles
} from '../bootstrapEntities/components/accordion'
import { applyAlertStyles } from '../bootstrapEntities/components/alert'
import {
  applyBreadcrumbItemStyles,
  applyBreadcrumbsWrapperStyles
} from '../bootstrapEntities/components/breadcrumb'
import {
  applyButtonGroupStyles,
  applyButtonStyles,
  applyButtonToolbarStyles
} from '../bootstrapEntities/components/button'
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
import { applyFormSelectStyles } from '../bootstrapEntities/forms/formSelect'
import { applyFormValidationStyles } from '../bootstrapEntities/forms/formValidation'
import { applyInputGroupStyles } from '../bootstrapEntities/forms/inputGroup'
import { applyVerticalRuleStyles } from '../bootstrapEntities/helpers/verticalRule'
import { applyColStyles } from '../bootstrapEntities/layout/columns'
import { applyContainerStyles } from '../bootstrapEntities/layout/container'
import { applyRowStyles } from '../bootstrapEntities/layout/row'
import { applyLinkStyles } from '../bootstrapEntities/utilities/link'

import { applyElementNameAsClass } from './utils'

/** Modifies the provided `result` object with element-specific styles */
export function applyElementStyles<
  Breakpoints extends string,
  Element extends BsJsElement | undefined
>(prefix: string, result: BsJsStyles, options: BsJsOptions<Breakpoints, Element>) {
  if (!options.elementType) {
    return
  }

  switch (options.elementType) {
    case 'accordion':
      applyAccordionStyles(result, options as BsJsOptions<Breakpoints, 'accordion'>)
      break
    case 'accordion-button':
      applyAccordionButtonStyles(result, options as BsJsOptions<Breakpoints, 'accordion-button'>)
      break
    case 'alert':
      applyAlertStyles(result, options as BsJsOptions<Breakpoints, 'alert'>)
      break
    case 'breadcrumbs-wrapper':
      applyBreadcrumbsWrapperStyles(
        prefix,
        result,
        options as BsJsOptions<Breakpoints, 'breadcrumbs-wrapper'>
      )
      break
    case 'breadcrumb-item':
      applyBreadcrumbItemStyles(result, options as BsJsOptions<Breakpoints, 'breadcrumb-item'>)
      break
    case 'btn':
      applyButtonStyles(result, options as BsJsOptions<Breakpoints, 'btn'>)
      break
    case 'btn-group':
      applyButtonGroupStyles(result, options as BsJsOptions<Breakpoints, 'btn-group'>)
      break
    case 'btn-toolbar':
      applyButtonToolbarStyles(result, options as BsJsOptions<Breakpoints, 'btn-toolbar'>)
      break
    case 'card-img':
      applyCardImageStyles(result, options as BsJsOptions<Breakpoints, 'card-img'>)
      break
    case 'card-link':
      applyCardLinkStyles(prefix, result, options as BsJsOptions<Breakpoints, 'card-link'>)
      break
    case 'carousel':
      applyCarouselStyles(result, options as BsJsOptions<Breakpoints, 'carousel'>)
      break
    case 'carousel-control':
      applyCarouselControlStyles(
        result,
        options as unknown as BsJsOptions<Breakpoints, 'carousel-control'>
      )
      break
    case 'carousel-control-icon':
      applyCarouselControlIconStyles(
        result,
        options as unknown as BsJsOptions<Breakpoints, 'carousel-control-icon'>
      )
      break
    case 'carousel-item':
      applyCarouselItemStyles(result, options as BsJsOptions<Breakpoints, 'carousel-item'>)
      break
    case 'container':
      applyContainerStyles(result, options as BsJsOptions<Breakpoints, 'container'>)
      break
    case 'col':
      applyColStyles(result, options as BsJsOptions<Breakpoints, 'col'>)
      break
    case 'dropdown-item':
      applyDropdownItemStyles(result, options as BsJsOptions<Breakpoints, 'dropdown-item'>)
      break
    case 'dropdown-toggle':
      applyDropdownToggleStyles(result, options as BsJsOptions<Breakpoints, 'dropdown-toggle'>)
      break
    case 'form-check':
      applyFormCheckStyles(result, options as BsJsOptions<Breakpoints, 'form-check'>)
      break
    case 'form-check-input':
      applyFormCheckInputStyles(result, options as BsJsOptions<Breakpoints, 'form-check-input'>)
      break
    case 'form-group':
      applyFormGroupStyles(result, options as BsJsOptions<Breakpoints, 'form-group'>)
      break
    case 'form-control':
    case 'form-range':
      applyFormControlStyles(
        result,
        options as BsJsOptions<Breakpoints, 'form-control' | 'form-range'>
      )
      break
    case 'form-validation':
      applyFormValidationStyles(result, options as BsJsOptions<Breakpoints, 'form-validation'>)
      break
    case 'form-label':
      applyFormLabelStyles(result, options as BsJsOptions<Breakpoints, 'form-label'>)
      break
    case 'form-select':
      applyFormSelectStyles(result, options as BsJsOptions<Breakpoints, 'form-select'>)
      break
    case 'img':
      applyImageStyles(result, options as BsJsOptions<Breakpoints, 'img'>)
      break
    case 'input-group':
      applyInputGroupStyles(result, options as BsJsOptions<Breakpoints, 'input-group'>)
      break
    case 'link':
      applyLinkStyles(prefix, result, options as BsJsOptions<Breakpoints, 'link' | 'card-link'>)
      break
    case 'list-group-item':
      applyListGroupItemStyles(result, options as BsJsOptions<Breakpoints, 'list-group-item'>)
      break
    case 'modal':
      applyModalStyles(result, options as BsJsOptions<Breakpoints, 'modal'>)
      break
    case 'modal-dialog':
      applyModalDialogStyles(result, options as BsJsOptions<Breakpoints, 'modal-dialog'>)
      break
    case 'nav':
      applyNavStyles(result, options as BsJsOptions<Breakpoints, 'nav'>)
      break
    case 'nav-item':
      applyNavItemStyles(result, options as BsJsOptions<Breakpoints, 'nav-item'>)
      break
    case 'nav-link':
      applyNavLinkStyles(result, options as BsJsOptions<Breakpoints, 'nav-link'>)
      break
    case 'navbar':
      applyNavbarStyles(result, options as BsJsOptions<Breakpoints, 'navbar'>)
      break
    case 'offcanvas':
      applyOffcanvasStyles(result, options as BsJsOptions<Breakpoints, 'offcanvas'>)
      break
    case 'page-item':
      applyPageItemStyles(result, options as BsJsOptions<Breakpoints, 'page-item'>)
      break
    case 'pagination':
      applyPaginationStyles(result, options as BsJsOptions<Breakpoints, 'pagination'>)
      break
    case 'placeholder-animation':
      applyPlaceholderAnimationStyles(
        result,
        options as unknown as BsJsOptions<Breakpoints, 'placeholder-animation'>
      )
      break
    case 'popover':
      applyPopoverStyles(result, options as BsJsOptions<Breakpoints, 'popover'>)
      break
    case 'progress':
      applyProgressStyles(result, options as unknown as BsJsOptions<Breakpoints, 'progress'>)
      break
    case 'progress-bar':
      applyProgressBarStyles(result, options as unknown as BsJsOptions<Breakpoints, 'progress-bar'>)
      break
    case 'row':
      applyRowStyles(result, options as BsJsOptions<Breakpoints, 'row'>)
      break
    case 'spinner':
      applySpinnerStyles(result, options as unknown as BsJsOptions<Breakpoints, 'spinner'>)
      break
    case 'table':
      applyTableStyles(result, options as unknown as BsJsOptions<Breakpoints, 'table'>)
      break
    case 'table-entry':
      applyTableEntryStyles(result, options as unknown as BsJsOptions<Breakpoints, 'table-entry'>)
      break
    case 'table-group':
      applyTableGroupStyles(result, options as unknown as BsJsOptions<Breakpoints, 'table-group'>)
      break
    case 'table-responsive':
      applyTableResponsiveStyles(
        result,
        options as unknown as BsJsOptions<Breakpoints, 'table-responsive'>
      )
      break
    case 'toast':
      applyToastStyles(result, options as unknown as BsJsOptions<Breakpoints, 'toast'>)
      break
    case 'tooltip':
      applyTooltipStyles(result, options as unknown as BsJsOptions<Breakpoints, 'tooltip'>)
      break
    case 'vr':
      applyVerticalRuleStyles(result)
      break
    default:
      applyElementNameAsClass(result, options.elementType)
      break
  }
}
