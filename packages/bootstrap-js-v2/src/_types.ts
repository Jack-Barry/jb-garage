import { LiteralUnion } from '@jb-garage/utils-generic'
import * as CSS from 'csstype'

import { BootstrapElement, BootstrapTheme } from './_bootstrapTypes'
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
import { BsJsImageOptions } from './bootstrapEntities/content/image'
import { BsJsLinkOptions } from './bootstrapEntities/utilities/link'

/** Options that can be applied to any element */
export type BsJsBreakpointAgnosticOptions = {
  theme?: LiteralUnion<BootstrapTheme, string>
}

/** Options that can be applied to specific breakpoints */
export type BsJsBreakpointDependentOptions = {
  //
}

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

export type BsJsElement = BootstrapElement | 'img' | 'link'

/** Options to provide when calculating Bootstrap styles for a given element */
export type BsJsOptions<Element extends BsJsElement | undefined> = BsJsBreakpointAgnosticOptions &
  (Element extends BsJsElement
    ? {
        /** Type of Bootstrap element */
        elementType: Element
      }
    : { elementType?: undefined }) & {
    /** Breakpoint-dependent style options */
    breakpoints?: BsJsBreakpointDependentOptions
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
    : Element extends 'dropdown-item'
    ? BsJsDropdownItemOptions
    : Element extends 'dropdown-toggle'
    ? BsJsDropdownToggleOptions
    : Element extends 'img'
    ? BsJsImageOptions
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
    : unknown)

/** Object representing styles that can be applied to an HTML element */
export type ElementStyle = CSS.Properties<string | number> &
  // Use Record utility type to allow handing in CSS variable values
  Record<string, string | number>

/** Bootstrap styles to apply to an HTML element */
export type BsJsStyles = {
  /** Object wherein each key represents a class name to apply to the element */
  classes: Record<string, boolean>
  /** Object representing inline styles to apply to the element */
  inlineStyles: ElementStyle
  /** Attributes other than `class` or `style` (e.g. `data-` prefixed attributes) */
  elementAttributes: Record<string, string>
}
