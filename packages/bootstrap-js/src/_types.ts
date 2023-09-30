import * as CSS from 'csstype'

import {
  BsJsImageOptions,
  BsJsTableEntryOptions,
  BsJsTableGroupOptions,
  BsJsTableOptions
} from './_componentTypes'
import { BootstrapDefaultBreakpoint } from './bootstrap-utils/_types'
import { BsJsBackgroundOptions } from './bootstrap-utils/background'
import { BsJsBorderOptions } from './bootstrap-utils/borders'
import { BsJsColorOptions } from './bootstrap-utils/colors'
import { BsJsDisplayOption } from './bootstrap-utils/display'
import { BsJsFlexOptions } from './bootstrap-utils/flexbox'
import { BsJsFloatType } from './bootstrap-utils/float'
import { BsJsInteractOptions } from './bootstrap-utils/interact'
import { BsJsLinkOptions } from './bootstrap-utils/link'
import { BsJsObjectFit } from './bootstrap-utils/objectFit'
import { BsJsOverflowOptions } from './bootstrap-utils/overflow'
import { BsJsPositionOptions } from './bootstrap-utils/position'
import { BsJsShadowOptions } from './bootstrap-utils/shadow'
import { BsJsSizeOptions } from './bootstrap-utils/sizing'
import { BsJsSpacingOptions } from './bootstrap-utils/spacing'
import { BsJsTextOptions } from './bootstrap-utils/text'
import { BootstrapVerticalAlign } from './bootstrap-utils/verticalAlign'
import { BootstrapZIndex } from './bootstrap-utils/zIndex'
import { ALL_BREAKPOINTS_KEY } from './constants'

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
  display?: BsJsDisplayOption
  flex?: BsJsFlexOptions
  float?: BsJsFloatType
  objectFit?: BsJsObjectFit
  spacing?: BsJsSpacingOptions
  text?: Pick<BsJsTextOptions, 'align'>
}

export type BootstrapComponentType = 'none' | 'image' | 'table' | 'table-entry' | 'table-group'

/** Options that can be applied to all breakpoints */
export type AllBreakpointsOptions<Component extends BootstrapComponentType = 'none'> =
  IndividualBreakpointOptions & {
    theme?: LiteralUnion<'dark' | 'light', string>
    // Helpers
    clearfix?: boolean
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
  } & (Component extends 'image'
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
