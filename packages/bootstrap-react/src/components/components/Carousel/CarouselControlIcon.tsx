import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CarouselControlIconProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs: BsJsOptionsWithoutElementType<Breakpoints, 'carousel-control-icon'>
  }
>

export type CarouselControlIconWithRef = <
  Component extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselControlIconProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const CarouselControlIcon: CarouselControlIconWithRef = forwardRef(function CarouselControlIcon<
  T extends ElementType = 'span',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselControlIconProps<T, Breakpoints>,
  ref?: CarouselControlIconProps<T, Breakpoints>['ref']
) {
  const { as = 'span' as ElementType, bsJs, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      bsJs={{ elementType: 'carousel-control-icon', ...bsJs }}
      {...rest}
    />
  )
})
export default CarouselControlIcon
