// Heavily inspired by https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/#supporting-refs-polymorphic-components
import {
  BootstrapDefaultBreakpoint,
  BootstrapJs,
  BsJsElement,
  BsJsOptions
} from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
  forwardRef
} from 'react'

export type BrElementCommonProps<
  Element extends BsJsElement | undefined,
  Breakpoints extends string
> = {
  /**
   * Optionally, you can pass in a `BsJsConfig` object to calculate Bootstrap classes
   *   to apply on the element. Otherwise, you can still just hand-write the classes
   *   yourself as the `className` prop.
   */
  bsJs?: BsJsOptions<Breakpoints, Element>
}

export type BrPropsWithAs<
  Component extends ElementType,
  BootstrapElement extends BsJsElement | undefined,
  Breakpoints extends string
> = {
  /** Type of HTML element to render */
  as?: Component
} & BrElementCommonProps<BootstrapElement, Breakpoints>

/**
 * Utility type allows us to omit common props that are uniquely handled by a
 *   component, e.g. something like "color", from `React.ComponentPropsWithoutRef`
 *   that we reference in the union
 */
type BrPropsToOmit<
  Component extends ElementType,
  BootstrapElement extends BsJsElement | undefined,
  Breakpoints extends string,
  Props
> = keyof (BrPropsWithAs<Component, BootstrapElement, Breakpoints> & Props)

/** Type of `ref` that can be used based on element type */
export type BrRef<Component extends ElementType> = Component extends ElementType
  ? ComponentPropsWithRef<Component>['ref']
  : never

/** Props that can be passed to the `BrComponent` */
export type BrElementProps<
  Component extends ElementType,
  BootstrapElement extends BsJsElement | undefined = undefined,
  Breakpoints extends string = BootstrapDefaultBreakpoint,
  Props = object
> =
  // Allow for `children` to be provided
  PropsWithChildren<Props & BrPropsWithAs<Component, BootstrapElement, Breakpoints>> & {
    // Allow for `ref` to be provided
    ref?: BrRef<Component>
    // Remove duplicated props, prefer types specified by `Props` type
  } & Omit<
      ComponentPropsWithoutRef<Component>,
      BrPropsToOmit<Component, BootstrapElement, Breakpoints, Props>
    >

/** Type for component function that will accept `BrElementProps` */
type BrComponent = <
  Component extends ElementType = 'div',
  BootstrapElement extends BsJsElement | undefined = undefined,
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: BrElementProps<Component, BootstrapElement, Breakpoints>
) => ReactNode | null

/** TODO: This needs to be provided via context or a hook somehow so that it is configurable */
export const bsJsSingleton = new BootstrapJs()

/**
 * Bootstrap React lib utility component
 *
 * - Returns the element specified by `as` prop (defaults to `"div"`)
 * - Passes all provided props into it
 * - Allows for passing in `ref`
 * - Translates `br` prefixed props into appropriate Bootstrap classes
 */
export const BrElement: BrComponent = forwardRef(function BrElement<
  Component extends ElementType = 'div',
  BootstrapElement extends BsJsElement | undefined = undefined,
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: BrElementProps<Component, BootstrapElement, Breakpoints>,
  ref?: BrElementProps<Component, BootstrapElement, Breakpoints>['ref']
) {
  const { as: Component = 'div', className, style, children, bsJs, ...rest } = props

  const styles = bsJsSingleton.bsJs<Breakpoints, BootstrapElement>(bsJs)

  return (
    <Component
      ref={ref}
      {...styles.elementAttributes}
      className={classNames(className, styles.classes)}
      style={{ ...styles.inlineStyles, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
})
