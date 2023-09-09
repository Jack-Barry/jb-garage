import * as CSS from 'csstype'

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
}

/** Options that can be applied per Bootstrap layout breakpoint */
export type IndividualBreakpointOptions = {
  display?: BsJsDisplayOption
  flex?: BsJsFlexOptions
  float?: BsJsFloatType
  objectFit?: BsJsObjectFit
  spacing?: BsJsSpacingOptions
  text?: Pick<BsJsTextOptions, 'align'>
  // zIndex?: {}
}

/** Options that can be applied to all breakpoints */
export type AllBreakpointsOptions = IndividualBreakpointOptions & {
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
}

type BsJsConfigBase = {
  [ALL_BREAKPOINTS_KEY]?: AllBreakpointsOptions
}

type BsJsConfigForBreakpoints<Breakpoint extends string = BootstrapDefaultBreakpoint> = Partial<{
  [Key in LiteralUnion<Breakpoint, string>]: IndividualBreakpointOptions
}>

/** Object that can be used to generate Bootstrap classes and inline styles for an HTML element */
export type BsJsConfig<Breakpoint extends string = BootstrapDefaultBreakpoint> =
  | BsJsConfigBase
  | BsJsConfigForBreakpoints<Breakpoint>
