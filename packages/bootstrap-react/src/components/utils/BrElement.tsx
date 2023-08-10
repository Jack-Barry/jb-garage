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
import { BrFlexProp, brUtilsFlexStyles } from './bootstrapClasses/utilities/flexbox'
import { BrBorderProp, brUtilsBorderStyles } from './bootstrapClasses/utilities/borders'
import { BrDisplayProp, brUtilsDisplayStyles } from './bootstrapClasses/utilities/display'
import { BrSpacingProp, brSpacingClasses } from './bootstrapClasses/spacing'
import {
  BrUtilsBackgroundOptions,
  brUtilsBackgroundStyles
} from './bootstrapClasses/utilities/background'
import { buildBrStyles } from './bootstrapClasses/brStyles'
import { BrUtilsColorOptions, brUtilsColorStyles } from './bootstrapClasses/utilities/colors'

/** Prop representing a Bootstrap viewport breakpoint */
export type BrBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string

/** Prop that can be accepted by `BrElement` for Bootstrap position utilities */
export type BrPositionProp = 'relative' | 'absolute' | 'static' | 'fixed'

export type BrElementCommonProps = {
  /** Position to apply to the element using Bootstrap class */
  brPosition?: BrPositionProp
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
  /**
   * Theme to apply to the element using `bs-data-theme` attribute
   */
  brTheme?: 'light' | 'dark' | string
  /**
   * Apply float clearfix to element
   */
  brClearfix?: boolean
  /**
   * Apply background styles to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Background](https://getbootstrap.com/docs/5.3/utilities/background/)
   */
  brUtilsBackground?: BrUtilsBackgroundOptions
  /**
   * Border to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Borders](https://getbootstrap.com/docs/5.3/utilities/borders/)
   */
  brUtilsBorder?: BrBorderProp
  /**
   * Color to apply to the element text using Bootstrap classes
   *
   * [Bootstrap Utilities: Colors](https://getbootstrap.com/docs/5.3/utilities/colors/)
   */
  brUtilsColor?: BrUtilsColorOptions
  /**
   * Display type to apply to the element using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplay?: BrDisplayProp
  /**
   * Display type to apply to the element above the sm breakpoint using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplaySm?: BrDisplayProp
  /**
   * Display type to apply to the element above the md breakpoint using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplayMd?: BrDisplayProp
  /**
   * Display type to apply to the element above the lg breakpoint using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplayLg?: BrDisplayProp
  /**
   * Display type to apply to the element above the xl breakpoint using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplayXl?: BrDisplayProp
  /**
   * Display type to apply to the element above the xxl breakpoint using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplayXxl?: BrDisplayProp
  /**
   * Display type to apply to the element for print using Bootstrap class
   *
   * [Bootstrap Utilities: Display](https://getbootstrap.com/docs/5.3/utilities/display/)
   */
  brUtilsDisplayPrint?: BrDisplayProp
  /**
   * Flex styles to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlex?: BrFlexProp
  /**
   * Flex styles to apply to the element above the sm breakpoint using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlexSm?: BrFlexProp
  /**
   * Flex styles to apply to the element above the md breakpoint using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlexMd?: BrFlexProp
  /**
   * Flex styles to apply to the element above the lg breakpoint using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlexLg?: BrFlexProp
  /**
   * Flex styles to apply to the element above the xl breakpoint using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlexXl?: BrFlexProp
  /**
   * Flex styles to apply to the element above the xxl breakpoint using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlexXxl?: BrFlexProp
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
    style,
    children,
    brPosition,
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
    brUtilsFlex,
    brUtilsFlexSm,
    brUtilsFlexMd,
    brUtilsFlexLg,
    brUtilsFlexXl,
    brUtilsFlexXxl,
    brTheme,
    brClearfix,
    brUtilsBackground,
    brUtilsBorder,
    brUtilsColor,
    brUtilsDisplay,
    brUtilsDisplaySm,
    brUtilsDisplayMd,
    brUtilsDisplayLg,
    brUtilsDisplayXl,
    brUtilsDisplayXxl,
    brUtilsDisplayPrint,
    ...rest
  } = props

  const brStyles = buildBrStyles([
    brUtilsBackgroundStyles(brUtilsBackground),
    brUtilsBorderStyles(brUtilsBorder),
    brUtilsColorStyles(brUtilsColor),
    brUtilsDisplayStyles({
      brUtilsDisplay,
      brUtilsDisplaySm,
      brUtilsDisplayMd,
      brUtilsDisplayLg,
      brUtilsDisplayXl,
      brUtilsDisplayXxl,
      brUtilsDisplayPrint
    }),
    brUtilsFlexStyles({
      brUtilsFlex,
      brUtilsFlexSm,
      brUtilsFlexMd,
      brUtilsFlexLg,
      brUtilsFlexXl,
      brUtilsFlexXxl
    })
  ])

  return (
    <Component
      ref={ref}
      data-bs-theme={brTheme}
      className={classNames(className, {
        [`position-${brPosition}`]: !!brPosition,
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
        clearfix: brClearfix,
        ...brStyles.classes
      })}
      style={{ ...brStyles.inlineStyles, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
})
