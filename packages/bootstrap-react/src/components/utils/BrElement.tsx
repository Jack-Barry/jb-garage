// Heavily inspired by https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/#supporting-refs-polymorphic-components
import { BsJsConfig } from '@jb-garage/bootstrap-js/_types'
import { BootstrapJs } from '@jb-garage/bootstrap-js/index'
import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import classNames from 'classnames'
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
  forwardRef
} from 'react'

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
   * Optionally, you can pass in a `BsJsConfig` object to calculate Bootstrap classes
   *   to apply on the element. Otherwise, you can still just hand-write the classes
   *   yourself as the `className` prop.
   */
  bsJs?: BsJsConfig
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

/** TODO: This needs to be provided via context or a hook somehow so that it is configurable */
const bsJsSingleton = new BootstrapJs()

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
    brTheme,
    brClearfix,
    bsJs,
    ...rest
  } = props

  const styles = bsJsSingleton.bsJs(bsJs)

  return (
    <Component
      ref={ref}
      data-bs-theme={brTheme}
      className={classNames(className, {
        'visually-hidden': brVisuallyHidden,
        clearfix: brClearfix,
        ...styles.classes
      })}
      style={{ ...styles.inlineStyles, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
})
