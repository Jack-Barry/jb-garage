/**
 * Value that can be used as suffix for a Bootstrap spacing class
 *
 * Type suggested values are based off of Bootstrap defaults. However, if you extend
 *   available spacers by adding to the [Sass map](https://getbootstrap.com/docs/5.3/utilities/spacing/#sass-maps)
 *   in your Bootstrap customizations, you can use your custom values here as well.
 *
 * For more info on how spacing works in Bootstrap, refer to [their docs](https://getbootstrap.com/docs/5.3/utilities/spacing/)
 */
type BrSpacingValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | 'auto'
  | number
  | string

/** Specific targets for spacing for a Bootstrap class */
export type BrSpacingConfig = {
  /** Spacing to apply for x axis */
  x?: BrSpacingValue
  /** Spacing to apply for y axis */
  y?: BrSpacingValue
  /** Spacing to apply at top of element */
  top?: BrSpacingValue
  /** Spacing to apply at bottom of element */
  bottom?: BrSpacingValue
  /** Spacing to apply at start of element */
  start?: BrSpacingValue
  /** Spacing to apply at end of element */
  end?: BrSpacingValue
}

/** Prop that can be accepted by `BrElement` for a Bootstrap spacing utility */
export type BrSpacingProp = BrSpacingValue | BrSpacingConfig

export function brSpacingClasses(
  options: {
    /** Prefix at the beginning of the class */
    prefix: string
    /** Prefix just before the value specifier for the class*/
    valuePrefix?: string
  },
  value?: BrSpacingProp
) {
  const { prefix, valuePrefix = '' } = options

  return {
    [`${prefix}-${valuePrefix}${value}`]: isSpacingValue(value),
    [`${prefix}x-${valuePrefix}${(value as BrSpacingConfig)?.x}`]: isSpacingValue(
      (value as BrSpacingConfig)?.x
    ),
    [`${prefix}y-${valuePrefix}${(value as BrSpacingConfig)?.y}`]: isSpacingValue(
      (value as BrSpacingConfig)?.y
    ),
    [`${prefix}t-${valuePrefix}${(value as BrSpacingConfig)?.top}`]: isSpacingValue(
      (value as BrSpacingConfig)?.top
    ),
    [`${prefix}b-${valuePrefix}${(value as BrSpacingConfig)?.bottom}`]: isSpacingValue(
      (value as BrSpacingConfig)?.bottom
    ),
    [`${prefix}s-${valuePrefix}${(value as BrSpacingConfig)?.start}`]: isSpacingValue(
      (value as BrSpacingConfig)?.start
    ),
    [`${prefix}e-${valuePrefix}${(value as BrSpacingConfig)?.end}`]: isSpacingValue(
      (value as BrSpacingConfig)?.end
    )
  }
}

function isSpacingValue(value?: BrSpacingProp): value is BrSpacingValue {
  return typeof value === 'string' || typeof value === 'number'
}
