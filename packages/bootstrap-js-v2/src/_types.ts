import { LiteralUnion } from '@jb-garage/utils-generic'
import * as CSS from 'csstype'

import { BootstrapElement, BootstrapTheme } from './_bootstrapTypes'
import { BsJsButtonGroupOptions, BsJsButtonOptions } from './elements/components/button'

/** Options that can be applied to any element */
export type BsJsBreakpointAgnosticOptions = {
  theme?: LiteralUnion<BootstrapTheme, string>
}

/** Options that can be applied to specific breakpoints */
export type BsJsBreakpointDependentOptions = {
  //
}

/** Types of elements with a `show` class */
export type BsJsShowableElement = 'alert'

/** Types of elements with an `active` class */
export type BsJsActivatableElement = 'btn'

/** Types of elements with a `disabled` class */
export type BsJsDisableableElement = 'btn'

/** Options to provide when calculating Bootstrap styles for a given element */
export type BsJsOptions<Element extends BootstrapElement | undefined> =
  BsJsBreakpointAgnosticOptions & {
    /** Type of Bootstrap element */
    elementType?: Element
    /** Breakpoint-dependent style options */
    breakpoints?: BsJsBreakpointDependentOptions
  } & (Element extends BsJsShowableElement ? { show?: boolean } : unknown) &
    (Element extends BsJsActivatableElement ? { active?: boolean } : unknown) &
    (Element extends BsJsDisableableElement ? { disabled?: boolean } : unknown) &
    (Element extends 'btn' ? BsJsButtonOptions : unknown) &
    (Element extends 'btn-group' ? BsJsButtonGroupOptions : unknown)

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
