import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselInnerProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'carousel-inner'>
  }
>

export type CarouselInnerWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselInnerProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselInner: CarouselInnerWithRef = forwardRef(function CarouselInner<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CarouselInnerProps<T, Breakpoints>, ref?: CarouselInnerProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'carousel-inner', ...bsJs }} {...rest} />
})
export default CarouselInner
