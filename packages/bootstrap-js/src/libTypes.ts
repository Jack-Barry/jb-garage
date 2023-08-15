import * as CSS from 'csstype'
import { BootstrapDefaultBreakpoint } from './bootstrapTypes'
import { BsJsBackgroundOptions } from './lib/background'

/**
 * Utility type for allowing literal unions while still providing intellisense
 *   suggestions
 */
export type LiteralUnion<T, U> = T | (U & Record<never, never>)

/** Object that includes class names and inline styles for an HTML element */
export type BsJsStyles = {
  /** Object of key/value pairs representing class names that should be applied to the element */
  classes?: Record<string, boolean>
  /** Object representing inline styles that should be applied to the element */
  inlineStyles?: CSS.Properties
}

/** Options that can be applied per Bootstrap layout breakpoint */
type IndividualBreakpointOptions = {
  // borders?: {}
  // colors?: {}
  // display?: {}
  // flex?: {}
  // float?: {}
  // interactions?: {}
  // link?: {}
  // objectFit?: {}
  // opacity?: {}
  // overflow?: {}
  // position?: {}
  // shadows?: {}
  // sizing?: {}
  // spacing?: {}
  // text?: {}
  // verticalAlign?: {}
  // visibility?: {}
  // zIndex?: {}
}

/** Options that can be applied to all breakpoints */
type AllBreakpointsOptions = IndividualBreakpointOptions & {
  background?: BsJsBackgroundOptions
}

/** Object that can be used to generate Bootstrap classes and inline styles for an HTML element */
export type BsJsConfig<Breakpoint extends string = BootstrapDefaultBreakpoint> = {
  bsJsAll?: AllBreakpointsOptions
} & Partial<Record<LiteralUnion<Breakpoint, string>, IndividualBreakpointOptions>>
