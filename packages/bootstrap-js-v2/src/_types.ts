import { LiteralUnion } from '@jb-garage/utils-generic'
import * as CSS from 'csstype'

import {
  BootstrapElement,
  BootstrapOpacityValue,
  BootstrapTextColor,
  BootstrapTheme
} from './_bootstrapTypes'
import {
  BsJsAccordionButtonOptions,
  BsJsAccordionOptions
} from './bootstrapEntities/components/accordion'
import { BsJsAlertOptions } from './bootstrapEntities/components/alert'
import {
  BsJsBreadcrumbItemOptions,
  BsJsBreadcrumbsWrapperOptions
} from './bootstrapEntities/components/breadcrumb'
import { BsJsButtonGroupOptions, BsJsButtonOptions } from './bootstrapEntities/components/button'
import { BsJsCardImageOptions } from './bootstrapEntities/components/card'
import {
  BsJsCarouselControlOptions,
  BsJsCarouselIndicatorOptions,
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
import { BsJsColorAndBackgroundOption } from './bootstrapEntities/helpers/colorAndBackground'
import { BsJsFocusRingOptions } from './bootstrapEntities/helpers/focusRing'
import { BsJsIconLinkOptions } from './bootstrapEntities/helpers/iconLink'
import {
  BsJsPositionHelperOptions,
  BsJsResponsivePositionHelperOptions
} from './bootstrapEntities/helpers/position'
import { BsJsRatioOptions } from './bootstrapEntities/helpers/ratio'
import { BsJsStackDirection } from './bootstrapEntities/helpers/stack'
import {
  BsJsColBreakpointDependentOptions,
  BsJsColOptions
} from './bootstrapEntities/layout/columns'
import { BsJsContainerOptions } from './bootstrapEntities/layout/container'
import { BsJsRowBreakpointDependentOptions, BsJsRowOptions } from './bootstrapEntities/layout/row'
import { BsJsBackgroundOptions } from './bootstrapEntities/utilities/background'
import { BsJsBorderOptions } from './bootstrapEntities/utilities/borders'
import { BsJsDisplayOption } from './bootstrapEntities/utilities/display'
import { BsJsFlexOptions } from './bootstrapEntities/utilities/flex'
import { BsJsFloatType } from './bootstrapEntities/utilities/float'
import { BsJsInteractionsOptions } from './bootstrapEntities/utilities/interactions'
import { BsJsLinkOptions } from './bootstrapEntities/utilities/link'
import { BsJsObjectFit } from './bootstrapEntities/utilities/objectFit'
import { BsJsOverflowOptions } from './bootstrapEntities/utilities/overflow'
import { BsJsPositionUtilityOptions } from './bootstrapEntities/utilities/position'
import { BsJsShadowOptions } from './bootstrapEntities/utilities/shadow'
import { BsJsSizeOptions } from './bootstrapEntities/utilities/sizing'
import { BsJsSpacingOptions } from './bootstrapEntities/utilities/spacing'
import { BsJsTextOptions } from './bootstrapEntities/utilities/text'
import { BootstrapVerticalAlign } from './bootstrapEntities/utilities/verticalAlign'
import { BootstrapZIndex } from './bootstrapEntities/utilities/zIndex'

/** Options that can be applied to any element */
export type BsJsBreakpointAgnosticOptions = {
  /** Options to use for background */
  background?: BsJsBackgroundOptions
  /** Options to use for border */
  border?: BsJsBorderOptions
  /** Apply clearfix styling */
  clearfix?: boolean
  /** Text color to apply */
  color?: LiteralUnion<BootstrapTextColor, string>
  /** Apply color to text and background using helper class */
  colorAndBackground?: BsJsColorAndBackgroundOption
  /** Default display type (can be overridden in breakpoint options) */
  display?: BsJsDisplayOption
  /** Flexbox related options */
  flex?: BsJsFlexOptions
  /** Float type */
  float?: BsJsFloatType
  /** Options for focus ring helper classes */
  focusRing?: BsJsFocusRingOptions
  /** Options for icon link */
  iconLink?: BsJsIconLinkOptions
  /** Options for interaction styling */
  interactions?: BsJsInteractionsOptions
  /** Type of object fit to use */
  objectFit?: BsJsObjectFit
  /** Level of opacity to apply to the element */
  opacity?: LiteralUnion<BootstrapOpacityValue, string | number>
  /** How to handle overflow */
  overflow?: BsJsOverflowOptions
  /** Options for positioning the element */
  position?: BsJsPositionUtilityOptions | BsJsPositionHelperOptions
  /** Maintain aspect ratio for element */
  ratio?: BsJsRatioOptions
  /** Shadow styling for element */
  shadow?: BsJsShadowOptions
  /** Flexbox stack helper direction */
  stackDirection?: BsJsStackDirection
  /** Size of the element */
  size?: BsJsSizeOptions
  /** Spacing around the element */
  spacing?: BsJsSpacingOptions
  /** Options for text */
  text?: BsJsTextOptions
  /** Theme to apply */
  theme?: LiteralUnion<BootstrapTheme, string>
  /** Type of vertical alignment to apply */
  verticalAlign?: LiteralUnion<BootstrapVerticalAlign, string>
  /** Make visibile or invisible */
  visibility?: boolean
  /** Make the element visually hidden */
  visuallyHidden?: boolean
  /** Z-index options */
  zIndex?: LiteralUnion<BootstrapZIndex, string | number>
}

/** Options that can be applied to specific breakpoints */
export type BsJsBreakpointDependentOptions<
  Breakpoints extends string,
  Element extends BsJsElement | undefined
> = Record<
  Breakpoints,
  {
    /** Display type for this breakpoint and above */
    display?: BsJsDisplayOption
    /** Flexbox options for this breakpoint and above */
    flex?: BsJsFlexOptions
    /** Float type for this breakpoint and above */
    float?: BsJsFloatType
    /** Type of object fit to use for this breakpoint and above */
    objectFit?: BsJsObjectFit
    /** Position helper to use for this breakpoint and above */
    position?: BsJsResponsivePositionHelperOptions
    /** Spacing around the element for this breakpoint and above */
    spacing?: BsJsSpacingOptions
    /** Text options for this breakpoint and above */
    text?: Pick<BsJsTextOptions, 'align'>
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
  | 'breadcrumbs-wrapper'
  | 'form-validation'
  | 'form-group'
  | 'img'
  | 'link'
  | 'table-entry'
  | 'table-group'
  | 'vr'

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
    breakpoints?: Partial<BsJsBreakpointDependentOptions<Breakpoints, Element>>
  } & (Element extends 'accordion'
    ? BsJsAccordionOptions
    : Element extends 'accordion-button'
    ? BsJsAccordionButtonOptions
    : Element extends 'alert'
    ? BsJsAlertOptions
    : Element extends 'breadcrumbs-wrapper'
    ? BsJsBreadcrumbsWrapperOptions
    : Element extends 'breadcrumb-item'
    ? BsJsBreadcrumbItemOptions
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
    : Element extends 'carousel-indicator'
    ? BsJsCarouselIndicatorOptions
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
  elementAttributes: Record<string, string | number | boolean>
}

/** Convenience type for when you are pre-populating the `elementType` */
export type BsJsOptionsWithoutElementType<
  Breakpoints extends string,
  ElementType extends BsJsElement
> = Omit<BsJsOptions<Breakpoints, ElementType>, 'elementType'>
