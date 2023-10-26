import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useCarousel } from './useCarousel'

export type CarouselProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /** Controlled state can be provided by the return value of `useCarousel` */
    brCarousel: ReturnType<typeof useCarousel>
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'carousel'>
  }
>

export type CarouselWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CarouselProps<Component, Breakpoints>
) => ReactNode

/**
 * [Modal]()
 */
const Carousel: CarouselWithRef = forwardRef(function Carousel<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CarouselProps<T, Breakpoints>, ref?: CarouselProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, brCarousel, bsJs, ...rest } = props
  const usedRef = useMultiRef(ref, brCarousel.ref)

  return <BrElement as={as} ref={usedRef} bsJs={{ elementType: 'carousel', ...bsJs }} {...rest} />
})
export default Carousel
