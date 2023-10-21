/**
 * Utility type for allowing literal unions while still providing intellisense
 *   suggestions
 */
export type LiteralUnion<T, U> = T | (U & Record<never, never>)
