import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ContainerProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'container'>
  }
>

type ContainerWithRef = <
  Component extends ElementType,
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ContainerProps<Component, Breakpoints>
) => ReactNode

/** [Container](https://getbootstrap.com/docs/5.3/layout/containers/) */
const Container: ContainerWithRef = forwardRef(function Container<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ContainerProps<T, Breakpoints>, ref?: ContainerProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'container', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Container
