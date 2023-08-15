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
import { BrUtilsFlexOptions, brUtilsFlexStyles } from './bootstrapClasses/utilities/flexbox'
import { BrBorderProp, brUtilsBorderStyles } from './bootstrapClasses/utilities/borders'
import { BrUtilsDisplayOptions, brUtilsDisplayStyles } from './bootstrapClasses/utilities/display'
import {
  BrUtilsBackgroundOptions,
  brUtilsBackgroundStyles
} from './bootstrapClasses/utilities/background'
import { buildBrStyles } from './bootstrapClasses/brStyles'
import { BrUtilsColorOptions, brUtilsColorStyles } from './bootstrapClasses/utilities/colors'
import { BrUtilsFloatOptions, brUtilsFloatStyles } from './bootstrapClasses/utilities/float'
import {
  BrUtilsInteractOptions,
  brUtilsInteractStyles
} from './bootstrapClasses/utilities/interact'
import { BrUtilsLinkOptions, brUtilsLinkStyles } from './bootstrapClasses/utilities/link'
import {
  BrUtilsObjectFitOptions,
  brUtilsObjectFitStyles
} from './bootstrapClasses/utilities/objectFit'
import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BootstrapOpacity } from './bootstrapClasses/utilities/types'
import { getOpacityStyles } from './bootstrapClasses/utilities/helpers'
import {
  BrUtilsOverflowOptions,
  brUtilsOverflowStyles
} from './bootstrapClasses/utilities/overflow'
import {
  BrUtilsPositionOptions,
  brUtilsPositionStyles
} from './bootstrapClasses/utilities/position'
import { BrUtilsShadowOptions, brUtilsShadowStyles } from './bootstrapClasses/utilities/shadow'
import { BrUtilsSizeOptions, brUtilsSizeStyles } from './bootstrapClasses/utilities/size'
import { BrUtilsSpacingOptions, brUtilsSpacingStyles } from './bootstrapClasses/utilities/spacingV2'

/** Prop representing a Bootstrap viewport breakpoint */
export type BootstrapBreakpoint = LiteralUnion<'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>

/** Options that can be applied to all or some breakpoints */
export type BrUtilsBreakpointBasedOptions<T> = Partial<Record<BootstrapBreakpoint, T>> & {
  /** Style to apply at all breakpoints unless overridden */
  brAllBreakpoints?: T
}

/** Prop that can be accepted by `BrElement` for Bootstrap position utilities */
export type BrPositionProp = 'relative' | 'absolute' | 'static' | 'fixed'

export type BrElementCommonProps = {
  /** Element should be visually hidden (but present for screen readers) */
  brVisuallyHidden?: boolean
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
  brUtilsDisplay?: BrUtilsDisplayOptions
  /**
   * Flex styles to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
   */
  brUtilsFlex?: BrUtilsFlexOptions
  /**
   * Float style to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Float](https://getbootstrap.com/docs/5.3/utilities/float/)
   */
  brUtilsFloat?: BrUtilsFloatOptions
  /**
   * Interaction styles to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Interactions](https://getbootstrap.com/docs/5.3/utilities/interactions/)
   */
  brUtilsInteract?: BrUtilsInteractOptions
  /**
   * Link styles to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Link](https://getbootstrap.com/docs/5.3/utilities/link/)
   */
  brUtilsLink?: BrUtilsLinkOptions
  /**
   * Object fit style to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Object Fit](https://getbootstrap.com/docs/5.3/utilities/object-fit/)
   */
  brUtilsObjectFit?: BrUtilsObjectFitOptions
  /**
   * Opacity style to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Opacity](https://getbootstrap.com/docs/5.3/utilities/opacity/)
   */
  brUtilsOpacity?: LiteralUnion<'0' | BootstrapOpacity, string>
  /**
   * Overflow style to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Overflow](https://getbootstrap.com/docs/5.3/utilities/overflow/)
   */
  brUtilsOverflow?: BrUtilsOverflowOptions
  /**
   * Position style to apply to the element using Bootstrap class
   *
   * [Bootstrap Utilities: Position](https://getbootstrap.com/docs/5.3/utilities/position/)
   */
  brUtilsPosition?: BrUtilsPositionOptions
  /**
   * Shadow style to apply to the element using Bootstrap class
   *
   * [Bootstrap Utilities: Shadow](https://getbootstrap.com/docs/5.3/utilities/shadow/)
   */
  brUtilsShadow?: BrUtilsShadowOptions
  /**
   * Sizing style to apply to the element using Bootstrap class
   *
   * [Bootstrap Utilities: Sizing](https://getbootstrap.com/docs/5.3/utilities/sizing/)
   */
  brUtilsSize?: BrUtilsSizeOptions
  /**
   * Spacing styles to apply to the element using Bootstrap classes
   *
   * [Bootstrap Utilities: Spacing](https://getbootstrap.com/docs/5.3/utilities/spacing/)
   */
  brUtilsSpacing?: BrUtilsSpacingOptions
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
    brVisuallyHidden,
    brUtilsFlex,
    brTheme,
    brClearfix,
    brUtilsBackground,
    brUtilsBorder,
    brUtilsColor,
    brUtilsDisplay,
    brUtilsFloat,
    brUtilsInteract,
    brUtilsLink,
    brUtilsObjectFit,
    brUtilsOpacity,
    brUtilsOverflow,
    brUtilsPosition,
    brUtilsShadow,
    brUtilsSize,
    brUtilsSpacing,
    ...rest
  } = props

  const brStyles = buildBrStyles([
    brUtilsBackgroundStyles(brUtilsBackground),
    brUtilsBorderStyles(brUtilsBorder),
    brUtilsColorStyles(brUtilsColor),
    brUtilsDisplayStyles(brUtilsDisplay),
    brUtilsFlexStyles(brUtilsFlex),
    brUtilsFloatStyles(brUtilsFloat),
    brUtilsInteractStyles(brUtilsInteract),
    brUtilsLinkStyles(brUtilsLink),
    brUtilsObjectFitStyles(brUtilsObjectFit),
    getOpacityStyles({ classNamePrefix: 'opacity' }, brUtilsOpacity),
    brUtilsOverflowStyles(brUtilsOverflow),
    brUtilsPositionStyles(brUtilsPosition),
    brUtilsShadowStyles(brUtilsShadow),
    brUtilsSizeStyles(brUtilsSize),
    brUtilsSpacingStyles(brUtilsSpacing)
  ])

  return (
    <Component
      ref={ref}
      data-bs-theme={brTheme}
      className={classNames(className, {
        'visually-hidden': brVisuallyHidden,
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
