import { BsJsElement, BsJsOptions } from '@jb-garage/bootstrap-js-v2'

/**
 * Utility type for allowing literal unions while still providing intellisense
 *   suggestions
 */
export type LiteralUnion<T, U> = T | (U & Record<never, never>)

export type WithNoElementType<
  T extends BsJsOptions<U, V>,
  U extends string,
  V extends BsJsElement | undefined
> = Omit<T, 'elementType'>
