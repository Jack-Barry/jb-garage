import { BsJsAsCssVar, BsJsStyles } from './_types'

/** Scaffolds a `BsJsStyles` object with no styles attached */
export function emptyStyles(): BsJsStyles {
  return { classes: {}, inlineStyles: {}, elementAttributes: {} }
}

/** Determines if provided `value` is a `BsJsAsCssVar` value */
export function isCssVar<T>(value?: unknown): value is BsJsAsCssVar<T> {
  return typeof (value as BsJsAsCssVar<T>)?.asCssVar !== 'undefined'
}
