// Heavily inspired by https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/#supporting-refs-polymorphic-components
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
  forwardRef
} from 'react'

export type BrAsProp<Component extends ElementType | undefined> = {
  /** Type of HTML element to render */
  as?: Component
}

/**
 * Utility type allows us to omit common props that are uniquely handled by a
 *   component, e.g. something like "color", from `React.ComponentPropsWithoutRef`
 *   that we reference in the union
 */
type BrPropsToOmit<Component extends ElementType, Props> = keyof (BrAsProp<Component> & Props)

/** Type of `ref` that can be used based on element type */
type BrRef<Component extends ElementType> = ComponentPropsWithRef<Component>['ref']

/** Props that can be passed to the `BrComponent` */
export type BrElementProps<Component extends ElementType, Props = object> =
  // Allow for `children` to be provided
  PropsWithChildren<Props & BrAsProp<Component>> &
    // Remove duplicated props, prefer types specified by `Props` type
    Omit<ComponentPropsWithoutRef<Component>, BrPropsToOmit<Component, Props>> & {
      // Allow for `ref` to be provided
      ref?: BrRef<Component>
    }

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
 */
export const BrElement: BrComponent = forwardRef(
  <Component extends ElementType = 'div'>(
    props: BrElementProps<Component>,
    ref: BrRef<Component>
  ) => {
    const { as: Component = 'div', children, ...rest } = props
    return (
      <Component {...rest} ref={ref}>
        {children}
      </Component>
    )
  }
)
