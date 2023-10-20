import * as CSS from 'csstype'

import { BsJsColorAndBackgroundOption } from './lib/bootstrap-helpers/colorAndBackground'
import { BsJsFocusRingOptions } from './lib/bootstrap-helpers/focusRing'
import { BsJsIconLinkOptions } from './lib/bootstrap-helpers/iconLink'
import {
  BsJsPositionHelperOptions,
  BsJsResponsivePositionHelperOptions
} from './lib/bootstrap-helpers/position'
import { BsJsRatioOptions } from './lib/bootstrap-helpers/ratio'
import { BsJsStackDirection } from './lib/bootstrap-helpers/stack'
import { BootstrapDefaultBreakpoint } from './lib/bootstrap-utils/_types'
import { BsJsBackgroundOptions } from './lib/bootstrap-utils/background'
import { BsJsBorderOptions } from './lib/bootstrap-utils/borders'
import { BsJsColorOptions } from './lib/bootstrap-utils/colors'
import { BsJsDisplayOption } from './lib/bootstrap-utils/display'
import { BsJsFlexOptions } from './lib/bootstrap-utils/flexbox'
import { BsJsFloatType } from './lib/bootstrap-utils/float'
import { BsJsInteractOptions } from './lib/bootstrap-utils/interact'
import { BsJsLinkOptions } from './lib/bootstrap-utils/link'
import { BsJsObjectFit } from './lib/bootstrap-utils/objectFit'
import { BsJsOverflowOptions } from './lib/bootstrap-utils/overflow'
import { BsJsPositionOptions } from './lib/bootstrap-utils/position'
import { BsJsShadowOptions } from './lib/bootstrap-utils/shadow'
import { BsJsSizeOptions } from './lib/bootstrap-utils/sizing'
import { BsJsSpacingOptions } from './lib/bootstrap-utils/spacing'
import { BsJsTextOptions } from './lib/bootstrap-utils/text'
import { BootstrapVerticalAlign } from './lib/bootstrap-utils/verticalAlign'
import { BootstrapZIndex } from './lib/bootstrap-utils/zIndex'
import { BsJsAccordionButtonOptions, BsJsAccordionOptions } from './lib/component-utils/accordion'
import { BsJsAlertOptions } from './lib/component-utils/alert'
import { BsJsBreadcrumbItemOptions, BsJsBreadcrumbsOptions } from './lib/component-utils/breadcrumb'
import { BsJsButtonOptions } from './lib/component-utils/button'
import { BsJsImageOptions } from './lib/component-utils/image'
import {
  BsJsTableEntryOptions,
  BsJsTableGroupOptions,
  BsJsTableOptions
} from './lib/component-utils/table'
import { ALL_BREAKPOINTS_KEY } from './lib/constants'

/** Utility type for allowing literal unions while still providing intellisense suggestions */
export type LiteralUnion<T, U> = T | (U & Record<never, never>)

/** Object representing styles that can be applied to an HTML element */
export type ElementStyle = CSS.Properties<string | number> &
  // Use Record utility type to allow handing in CSS variable values
  Record<string, string | number>

/** Object that includes class names and inline styles for an HTML element */
export type BsJsStyles = {
  /** Object of key/value pairs representing class names that should be applied to the element */
  classes: Record<string, boolean>
  /** Object representing inline styles that should be applied to the element */
  inlineStyles: ElementStyle
  /** Object of `data-` prefixed attributes to apply to the element */
  dataAttributes: Record<string, string>
}

/** Options that can be applied per Bootstrap layout breakpoint */
export type IndividualBreakpointOptions = {
  // helpers
  positionHelper?: BsJsResponsivePositionHelperOptions
  // utils
  display?: BsJsDisplayOption
  flex?: BsJsFlexOptions
  float?: BsJsFloatType
  objectFit?: BsJsObjectFit
  spacing?: BsJsSpacingOptions
  text?: Pick<BsJsTextOptions, 'align'>
}

export type BootstrapComponentType =
  | 'none'
  | 'accordion'
  | 'accordion-button'
  | 'alert'
  | 'breadcrumb'
  | 'breadcrumb-item'
  | 'button'
  | 'image'
  | 'table'
  | 'table-entry'
  | 'table-group'

/** Options that can be applied to all breakpoints */
export type AllBreakpointsOptions<Component extends BootstrapComponentType = 'none'> =
  IndividualBreakpointOptions & {
    theme?: LiteralUnion<'dark' | 'light', string>
    // Helpers
    clearfix?: boolean
    colorAndBackground?: BsJsColorAndBackgroundOption
    focusRing?: BsJsFocusRingOptions
    iconLink?: BsJsIconLinkOptions
    positionHelper?: BsJsPositionHelperOptions
    ratio?: BsJsRatioOptions
    stack?: BsJsStackDirection
    stretchLink?: boolean
    truncateText?: boolean
    verticalRule?: boolean
    visuallyHidden?: boolean
    // Utilities
    background?: BsJsBackgroundOptions
    border?: BsJsBorderOptions
    color?: BsJsColorOptions
    interactions?: BsJsInteractOptions
    link?: BsJsLinkOptions
    overflow?: BsJsOverflowOptions
    position?: BsJsPositionOptions
    shadow?: BsJsShadowOptions
    sizing?: BsJsSizeOptions
    text?: BsJsTextOptions
    verticalAlign?: BootstrapVerticalAlign
    visibility?: boolean
    zIndex?: BootstrapZIndex
  } & (Component extends 'accordion'
      ? { accordion?: BsJsAccordionOptions }
      : Component extends 'accordion-button'
      ? { accordionButton?: BsJsAccordionButtonOptions }
      : Component extends 'alert'
      ? { alert?: BsJsAlertOptions }
      : Component extends 'breadcrumb'
      ? { breadcrumbs?: BsJsBreadcrumbsOptions }
      : Component extends 'button'
      ? { button?: BsJsButtonOptions }
      : Component extends 'breadcrumb-item'
      ? { breadcrumbItem?: BsJsBreadcrumbItemOptions }
      : Component extends 'image'
      ? { image?: BsJsImageOptions }
      : Component extends 'table'
      ? { table?: BsJsTableOptions }
      : Component extends 'table-entry'
      ? { tableEntry?: BsJsTableEntryOptions }
      : Component extends 'table-group'
      ? {
          tableEntry?: BsJsTableEntryOptions
          tableGroup?: BsJsTableGroupOptions
        }
      : Record<string, unknown>)

type BsJsConfigBase<Component extends BootstrapComponentType> = {
  [ALL_BREAKPOINTS_KEY]?: AllBreakpointsOptions<Component>
}

type BsJsConfigForBreakpoints<Breakpoint extends string = BootstrapDefaultBreakpoint> = Partial<{
  [Key in LiteralUnion<Breakpoint, string>]: IndividualBreakpointOptions
}>

/** Object that can be used to generate Bootstrap classes and inline styles for an HTML element */
export type BsJsConfig<
  Component extends BootstrapComponentType = 'none',
  Breakpoint extends string = BootstrapDefaultBreakpoint
> = BsJsConfigBase<Component> | BsJsConfigForBreakpoints<Breakpoint>
