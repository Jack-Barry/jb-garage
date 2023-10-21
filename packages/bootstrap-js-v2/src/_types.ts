import { LiteralUnion } from '@jb-garage/utils-generic'
import * as CSS from 'csstype'

/** TODO: lock this down to supported Bootstrap components */
export type BsJsComponent = string

/** Options that can be applied to any element */
export type BsJsBreakpointAgnosticOptions = {
  theme?: LiteralUnion<'light' | 'dark', string>
  //
}

/** Options that can be applied to specific breakpoints */
export type BsJsBreakpointDependentOptions = {
  //
}

/** Options to provide when calculating Bootstrap styles for a given element */
export type BsJsOptions<Component extends BsJsComponent | undefined> =
  BsJsBreakpointAgnosticOptions & {
    /** Type of Bootstrap component */
    componentType?: Component
    /** Breakpoint-dependent style options */
    breakpoints?: BsJsBreakpointDependentOptions
  }

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
