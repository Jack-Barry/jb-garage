import { LiteralUnion } from '@jb-garage/utils-generic'
import * as CSS from 'csstype'

import { BootstrapElement, BootstrapTextColor, BootstrapTheme } from './_bootstrapTypes'
import { BsJsButtonGroupOptions, BsJsButtonOptions } from './bootstrapEntities/components/button'
import { BsJsCardImageOptions } from './bootstrapEntities/components/card'
import {
  BsJsCarouselControlOptions,
  BsJsCarouselItemOptions,
  BsJsCarouselOptions
} from './bootstrapEntities/components/carousel'
import {
  BsJsDropdownItemOptions,
  BsJsDropdownToggleOptions
} from './bootstrapEntities/components/dropdown'
import { BsJsListGroupItemOptions } from './bootstrapEntities/components/listGroup'
import { BsJsModalDialogOptions, BsJsModalOptions } from './bootstrapEntities/components/modal'
import {
  BsJsNavItemOptions,
  BsJsNavLinkOptions,
  BsJsNavOptions
} from './bootstrapEntities/components/nav'
import { BsJsNavbarOptions } from './bootstrapEntities/components/navbar'
import { BsJsOffcanvasOptions } from './bootstrapEntities/components/offcanvas'
import {
  BsJsPageItemOptions,
  BsJsPaginationOptions
} from './bootstrapEntities/components/pagination'
import { BsJsPlaceholderAnimationOptions } from './bootstrapEntities/components/placeholder'
import { BsJsPopoverOptions } from './bootstrapEntities/components/popover'
import {
  BsJsProgressBarOptions,
  BsJsProgressOptions
} from './bootstrapEntities/components/progress'
import { BsJsSpinnerOptions } from './bootstrapEntities/components/spinner'
import { BsJsImageOptions } from './bootstrapEntities/content/image'
import {
  BsJsTableEntryOptions,
  BsJsTableGroupOptions,
  BsJsTableOptions,
  BsJsTableResponsiveOptions
} from './bootstrapEntities/content/table'
import {
  BsJsFormCheckInputOptions,
  BsJsFormCheckOptions
} from './bootstrapEntities/forms/formCheck'
import { BsJsFormControlOptions } from './bootstrapEntities/forms/formControl'
import { BsJsFormGroupOptions } from './bootstrapEntities/forms/formGroup'
import { BsJsFormLabelOptions } from './bootstrapEntities/forms/formLabel'
import { BsJsFormSelectOptions } from './bootstrapEntities/forms/formSelect'
import { BsJsFormFeedbackOptions } from './bootstrapEntities/forms/formValidation'
import { BsJsInputGroupOptions } from './bootstrapEntities/forms/inputGroup'
import {
  BsJsColBreakpointDependentOptions,
  BsJsColOptions
} from './bootstrapEntities/layout/columns'
import { BsJsContainerOptions } from './bootstrapEntities/layout/container'
import { BsJsRowBreakpointDependentOptions, BsJsRowOptions } from './bootstrapEntities/layout/row'
import { BsJsBackgroundOptions } from './bootstrapEntities/utilities/background'
import { BsJsLinkOptions } from './bootstrapEntities/utilities/link'

/** Options that can be applied to any element */
export type BsJsBreakpointAgnosticOptions = {
  /** Theme to apply */
  theme?: LiteralUnion<BootstrapTheme, string>
  /** Options to use for background */
  background?: BsJsBackgroundOptions
  /** Text color to apply */
  color?: LiteralUnion<BootstrapTextColor, string>
}

/** Options that can be applied to specific breakpoints */
export type BsJsBreakpointDependentOptions<
  Breakpoints extends string,
  Element extends BsJsElement | undefined
> = Record<
  Breakpoints, // Breakpoints,
  {
    //
  } & (Element extends 'col'
    ? BsJsColBreakpointDependentOptions
    : Element extends 'row'
    ? BsJsRowBreakpointDependentOptions
    : unknown)
>

/** Object that can used as an option to set a custom CSS variable value */
export type BsJsAsCssVar<T> = {
  /** Custom value that can be used for a CSS variable */
  asCssVar: T
}

/** Options for elements with a `show` class */
export type BsJsShowableElementOptions = { show?: boolean }

/** Options for elements with an `active` class */
export type BsJsActivatableElementOptions = {
  /** Apply active styles to element */
  active?: boolean
}

/** Options for element with a `disabled` class */
export type BsJsDisableableElementOptions = {
  /** Apply disabled styles to element */
  disabled?: boolean
}

/** Options for element with a fade class */
export type BsJsFadeableElementOptions = {
  /** Apply fade styles to element */
  fade?: boolean
}

export type BsJsElement =
  | BootstrapElement
  | 'form-validation'
  | 'form-group'
  | 'img'
  | 'link'
  | 'table-entry'
  | 'table-group'

/** Options to provide when calculating Bootstrap styles for a given element */
export type BsJsOptions<
  Breakpoints extends string,
  Element extends BsJsElement | undefined
> = BsJsBreakpointAgnosticOptions &
  (Element extends BsJsElement
    ? {
        /** Type of Bootstrap element */
        elementType: Element
      }
    : { elementType?: undefined }) & {
    /** Breakpoint-dependent style options */
    breakpoints?: BsJsBreakpointDependentOptions<Breakpoints, Element>
  } & (Element extends 'alert'
    ? BsJsShowableElementOptions
    : Element extends 'btn'
    ? BsJsButtonOptions
    : Element extends 'btn-group'
    ? BsJsButtonGroupOptions
    : Element extends 'card-img'
    ? BsJsCardImageOptions
    : Element extends 'carousel'
    ? BsJsCarouselOptions
    : Element extends 'carousel-control' | 'carousel-control-icon'
    ? BsJsCarouselControlOptions
    : Element extends 'carousel-item'
    ? BsJsCarouselItemOptions
    : Element extends 'col'
    ? BsJsColOptions
    : Element extends 'container'
    ? BsJsContainerOptions
    : Element extends 'dropdown-item'
    ? BsJsDropdownItemOptions
    : Element extends 'dropdown-toggle'
    ? BsJsDropdownToggleOptions
    : Element extends 'form-check'
    ? BsJsFormCheckOptions
    : Element extends 'form-check-input'
    ? BsJsFormCheckInputOptions
    : Element extends 'form-control' | 'form-range'
    ? BsJsFormControlOptions
    : Element extends 'form-validation'
    ? BsJsFormFeedbackOptions
    : Element extends 'form-group'
    ? BsJsFormGroupOptions
    : Element extends 'form-label'
    ? BsJsFormLabelOptions
    : Element extends 'form-select'
    ? BsJsFormSelectOptions
    : Element extends 'img'
    ? BsJsImageOptions
    : Element extends 'input-group'
    ? BsJsInputGroupOptions
    : Element extends 'link' | 'card-link'
    ? BsJsLinkOptions
    : Element extends 'list-group-item'
    ? BsJsListGroupItemOptions
    : Element extends 'modal'
    ? BsJsModalOptions
    : Element extends 'modal-dialog'
    ? BsJsModalDialogOptions
    : Element extends 'nav'
    ? BsJsNavOptions
    : Element extends 'nav-item'
    ? BsJsNavItemOptions
    : Element extends 'nav-link'
    ? BsJsNavLinkOptions
    : Element extends 'navbar'
    ? BsJsNavbarOptions
    : Element extends 'offcanvas'
    ? BsJsOffcanvasOptions
    : Element extends 'page-item'
    ? BsJsPageItemOptions
    : Element extends 'pagination'
    ? BsJsPaginationOptions
    : Element extends 'placeholder-animation'
    ? BsJsPlaceholderAnimationOptions
    : Element extends 'popover' | 'tooltip'
    ? BsJsPopoverOptions
    : Element extends 'progress'
    ? BsJsProgressOptions
    : Element extends 'progress-bar'
    ? BsJsProgressBarOptions
    : Element extends 'row'
    ? BsJsRowOptions
    : Element extends 'spinner'
    ? BsJsSpinnerOptions
    : Element extends 'toast'
    ? BsJsFadeableElementOptions
    : Element extends 'table'
    ? BsJsTableOptions
    : Element extends 'table-entry'
    ? BsJsTableEntryOptions
    : Element extends 'table-group'
    ? BsJsTableGroupOptions
    : Element extends 'table-responsive'
    ? BsJsTableResponsiveOptions
    : unknown)

/** Object representing styles that can be applied to an HTML element */
export type ElementStyle = CSS.Properties<string | number> &
  // Use Record utility type to allow handing in CSS variable values
  Record<string, string | number>

/** Bootstrap styles to apply to an HTML element */
export type BsJsStyles = {
  /** Object wherein each key represents a class name to apply to the element */
  classes: Record<string, true>
  /** Object representing inline styles to apply to the element */
  inlineStyles: ElementStyle
  /** Attributes other than `class` or `style` (e.g. `data-` prefixed attributes) */
  elementAttributes: Record<string, string | number>
}
