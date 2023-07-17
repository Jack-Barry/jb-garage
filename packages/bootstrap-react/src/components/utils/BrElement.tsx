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

export type BrPropsWithAs<Component extends ElementType | undefined> = {
  /** Type of HTML element to render */
  as?: Component
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
}

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
  } & Omit<ComponentPropsWithoutRef<Component>, BrPropsToOmit<Component, Props>> // Remove duplicated props, prefer types specified by `Props` type}

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
    ...rest
  } = props
  return (
    <Component
      ref={ref}
      className={classNames(className, {
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
        ...brSpacingClasses({ prefix: 'p', valuePrefix: 'xxl-' }, brPaddingXxl)
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

export function isSpacingConfig(value?: BrSpacingProp): value is BrSpacingConfig {
  return (
    typeof (value as BrSpacingConfig)?.x !== 'undefined' ||
    typeof (value as BrSpacingConfig)?.y !== 'undefined' ||
    typeof (value as BrSpacingConfig)?.top !== 'undefined' ||
    typeof (value as BrSpacingConfig)?.bottom !== 'undefined' ||
    typeof (value as BrSpacingConfig)?.start !== 'undefined' ||
    typeof (value as BrSpacingConfig)?.end !== 'undefined'
  )
}
export function isSpacingValue(value?: BrSpacingProp): value is BrSpacingValue {
  return typeof value === 'string' || typeof value === 'number'
}
