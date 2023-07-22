// Heavily inspired by https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/#supporting-refs-polymorphic-components
import classNames from 'classnames'
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
  forwardRef
} from 'react'

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
/** Prop that can be accepted by `BrElement` for Bootstrap position utilities */
export type BrPositionProp = 'relative' | 'absolute'
/** Prop that can be accepted by `BrElement` for Bootstrap display utilities */
export type BrDisplayProp =
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'inline-grid'
  | 'table'
  | 'table-cell'
  | 'table-row'
  | 'flex'
  | 'inline-flex'
  | string
/** Value that can be used to configure a border width */
type BrBorderConfigValue =
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
  | string
  | number
/** Value that can be used to configure an individual border */
type BrBorderConfig = {
  width?: BrBorderConfigValue
  rounded?: 'circle' | 'pill' | boolean | BrBorderConfigValue
}
/** Prop that can be accepted by `BrElement` for Bootstrap border utilities */
type BrBorderProp =
  | boolean
  | (BrBorderConfig & {
      color?: string
      opacity?: 10 | 25 | 50 | 75 | number
      top?: boolean | BrBorderConfig
      end?: boolean | BrBorderConfig
      bottom?: boolean | BrBorderConfig
      start?: boolean | BrBorderConfig
    })

export type BrElementCommonProps = {
  /** Position to apply to the element using Bootstrap class */
  brPosition?: BrPositionProp
  /** Display type to apply to the element using Bootstrap class */
  brDisplay?: BrDisplayProp
  /** Display type to apply to the element above the sm breakpoint using Bootstrap class */
  brDisplaySm?: BrDisplayProp
  /** Display type to apply to the element above the md breakpoint using Bootstrap class */
  brDisplayMd?: BrDisplayProp
  /** Display type to apply to the element above the lg breakpoint using Bootstrap class */
  brDisplayLg?: BrDisplayProp
  /** Display type to apply to the element above the xl breakpoint using Bootstrap class */
  brDisplayXl?: BrDisplayProp
  /** Display type to apply to the element above the xxl breakpoint using Bootstrap class */
  brDisplayXxl?: BrDisplayProp
  /** Display type to apply to the element for print using Bootstrap class */
  brDisplayPrint?: BrDisplayProp
  /** Element should be visually hidden (but present for screen readers) */
  brVisuallyHidden?: boolean
  /** Margin to apply to the element using Bootstrap classes */
  brMargin?: BrSpacingProp
  /** Margin to apply to the element above the sm breakpoint using Bootstrap classes */
  brMarginSm?: BrSpacingProp
  /** Margin to apply to the element above the md breakpoint using Bootstrap classes */
  brMarginMd?: BrSpacingProp
  /** Margin to apply to the element above the lg breakpoint using Bootstrap classes */
  brMarginLg?: BrSpacingProp
  /** Margin to apply to the element above the xl breakpoint using Bootstrap classes */
  brMarginXl?: BrSpacingProp
  /** Margin to apply to the element above the xxl breakpoint using Bootstrap classes */
  brMarginXxl?: BrSpacingProp
  /** Negative margin to apply to the element using Bootstrap classes */
  brNegativeMargin?: BrSpacingProp
  /** Negative margin to apply to the element above the sm breakpoint using Bootstrap classes */
  brNegativeMarginSm?: BrSpacingProp
  /** Negative margin to apply to the element above the md breakpoint using Bootstrap classes */
  brNegativeMarginMd?: BrSpacingProp
  /** Negative margin to apply to the element above the lg breakpoint using Bootstrap classes */
  brNegativeMarginLg?: BrSpacingProp
  /** Negative margin to apply to the element above the xl breakpoint using Bootstrap classes */
  brNegativeMarginXl?: BrSpacingProp
  /** Negative margin to apply to the element above the xxl breakpoint using Bootstrap classes */
  brNegativeMarginXxl?: BrSpacingProp
  /** Padding to apply to the element using Bootstrap classes */
  brPadding?: BrSpacingProp
  /** Padding to apply to the element above the sm breakpoint using Bootstrap classes */
  brPaddingSm?: BrSpacingProp
  /** Padding to apply to the element above the md breakpoint using Bootstrap classes */
  brPaddingMd?: BrSpacingProp
  /** Padding to apply to the element above the lg breakpoint using Bootstrap classes */
  brPaddingLg?: BrSpacingProp
  /** Padding to apply to the element above the xl breakpoint using Bootstrap classes */
  brPaddingXl?: BrSpacingProp
  /** Padding to apply to the element above the xxl breakpoint using Bootstrap classes */
  brPaddingXxl?: BrSpacingProp
  /** Border to apply to the element using Bootstrap classes */
  brBorder?: BrBorderProp
}

export type BrPropsWithAs<Component extends ElementType | undefined> = {
  /** Type of HTML element to render */
  as?: Component
} & BrElementCommonProps

/**
 * Utility type allows us to omit common props that are uniquely handled by a
 *   component, e.g. something like "color", from `React.ComponentPropsWithoutRef`
 *   that we reference in the union
 */
type BrPropsToOmit<Component extends ElementType, Props> = keyof (BrPropsWithAs<Component> & Props)

/** Type of `ref` that can be used based on element type */
export type BrRef<Component extends ElementType | undefined> = Component extends ElementType
  ? ComponentPropsWithRef<Component>['ref']
  : never

/** Props that can be passed to the `BrComponent` */
export type BrElementProps<Component extends ElementType, Props = object> =
  // Allow for `children` to be provided
  PropsWithChildren<Props & BrPropsWithAs<Component>> & {
    // Allow for `ref` to be provided
    ref?: BrRef<Component>
    // Remove duplicated props, prefer types specified by `Props` type
  } & Omit<ComponentPropsWithoutRef<Component>, BrPropsToOmit<Component, Props>>

/** Type for component function that will accept `BrElementProps` */
type BrComponent = <Component extends ElementType = 'div'>(
  props: BrElementProps<Component>
) => ReactNode | null

/**
 * Bootstrap React lib utility component
 *
 * - Returns the element specified by `as` prop (defaults to `"div"`)
 * - Passes all provided props into it
 * - Allows for passing in `ref`
 * - Translates `br` prefixed props into appropriate Bootstrap classes
 */
export const BrElement: BrComponent = forwardRef(function BrElement<
  Component extends ElementType = 'div'
>(props: BrElementProps<Component>, ref?: BrElementProps<Component>['ref']) {
  const {
    as: Component = 'div',
    className,
    children,
    brPosition,
    brDisplay,
    brDisplaySm,
    brDisplayMd,
    brDisplayLg,
    brDisplayXl,
    brDisplayXxl,
    brDisplayPrint,
    brVisuallyHidden,
    brMargin,
    brMarginSm,
    brMarginMd,
    brMarginLg,
    brMarginXl,
    brMarginXxl,
    brNegativeMargin,
    brNegativeMarginSm,
    brNegativeMarginMd,
    brNegativeMarginLg,
    brNegativeMarginXl,
    brNegativeMarginXxl,
    brPadding,
    brPaddingSm,
    brPaddingMd,
    brPaddingLg,
    brPaddingXl,
    brPaddingXxl,
    brBorder,
    ...rest
  } = props
  return (
    <Component
      ref={ref}
      className={classNames(className, {
        [`position-${brPosition}`]: !!brPosition,
        ...brDisplayClasses({
          brDisplay,
          brDisplaySm,
          brDisplayMd,
          brDisplayLg,
          brDisplayXl,
          brDisplayXxl,
          brDisplayPrint
        }),
        'visually-hidden': brVisuallyHidden,
        ...brSpacingClasses({ prefix: 'm' }, brMargin),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'sm-' }, brMarginSm),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'md-' }, brMarginMd),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'lg-' }, brMarginLg),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'xl-' }, brMarginXl),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'xxl-' }, brMarginXxl),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'n' }, brNegativeMargin),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'sm-n' }, brNegativeMarginSm),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'md-n' }, brNegativeMarginMd),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'lg-n' }, brNegativeMarginLg),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'xl-n' }, brNegativeMarginXl),
        ...brSpacingClasses({ prefix: 'm', valuePrefix: 'xxl-n' }, brNegativeMarginXxl),
        ...brSpacingClasses({ prefix: 'p' }, brPadding),
        ...brSpacingClasses({ prefix: 'p', valuePrefix: 'sm-' }, brPaddingSm),
        ...brSpacingClasses({ prefix: 'p', valuePrefix: 'md-' }, brPaddingMd),
        ...brSpacingClasses({ prefix: 'p', valuePrefix: 'lg-' }, brPaddingLg),
        ...brSpacingClasses({ prefix: 'p', valuePrefix: 'xl-' }, brPaddingXl),
        ...brSpacingClasses({ prefix: 'p', valuePrefix: 'xxl-' }, brPaddingXxl),
        ...brBorderClasses(brBorder)
      })}
      {...rest}
    >
      {children}
    </Component>
  )
})

function brSpacingClasses(
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

function brDisplayClasses(
  props: Pick<
    BrElementCommonProps,
    | 'brDisplay'
    | 'brDisplaySm'
    | 'brDisplayMd'
    | 'brDisplayLg'
    | 'brDisplayXl'
    | 'brDisplayXxl'
    | 'brDisplayPrint'
  >
) {
  const {
    brDisplay,
    brDisplaySm,
    brDisplayMd,
    brDisplayLg,
    brDisplayXl,
    brDisplayXxl,
    brDisplayPrint
  } = props

  return {
    [`d-${brDisplay}`]: !!brDisplay,
    [`d-sm-${brDisplaySm}`]: !!brDisplaySm,
    [`d-md-${brDisplayMd}`]: !!brDisplayMd,
    [`d-lg-${brDisplayLg}`]: !!brDisplayLg,
    [`d-xl-${brDisplayXl}`]: !!brDisplayXl,
    [`d-xxl-${brDisplayXxl}`]: !!brDisplayXxl,
    [`d-print-${brDisplayPrint}`]: !!brDisplayPrint
  }
}

function brBorderClasses(prop: BrBorderProp = {}) {
  if (typeof prop === 'boolean') {
    return { border: true, 'border-0': !prop }
  }

  const { width, rounded, opacity, color, ...rest } = prop
  const hasWidth = typeof width !== 'undefined'
  const hasRounded = typeof rounded !== 'undefined'
  const hasOpacity = typeof opacity !== 'undefined'
  const hasColor = typeof color !== 'undefined'
  const hasDirectional = !!Object.keys(rest).length
  if (!hasWidth && !hasRounded && !hasOpacity && !hasColor && !hasDirectional) {
    return {}
  }

  const classes: Record<string, boolean> = {}

  if (hasWidth) {
    classes['border'] = true
    classes[`border-${width}`] = true
  }

  if (hasRounded) {
    classes[`rounded-${rounded}`] = typeof rounded !== 'boolean'
    classes['rounded'] = typeof rounded === 'boolean'
  }

  if (hasOpacity) {
    classes[`border-opacity-${opacity}`] = true
  }

  if (hasColor) {
    classes['border'] = true
    classes[`border-${color}`] = true
  }

  for (const [key, directionalProp] of Object.entries(rest)) {
    if (typeof directionalProp === 'boolean') {
      classes[`border-${key}`] = directionalProp
      classes[`border-${key}-0`] = !directionalProp
      classes['border'] = !directionalProp
      continue
    }

    const { width: directionalWidth, rounded: directionalRounded } = directionalProp
    if (typeof directionalWidth !== 'undefined') {
      classes[`border-${key}-${directionalWidth}`] = true
    }

    if (typeof directionalRounded !== 'undefined') {
      classes[`rounded-${key}-${directionalRounded}`] = typeof directionalRounded !== 'boolean'
      classes[`rounded-${key}`] = typeof directionalRounded === 'boolean'
    }
  }

  return classes
}
