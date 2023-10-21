import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useCarousel } from './useCarousel'

export type CarouselProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useCarousel` */
    brCarousel: ReturnType<typeof useCarousel>
    bsJs?: BsJsConfig<'carousel'>
  }
>

export type CarouselWithRef = <Component extends ElementType = 'div'>(
  props: CarouselProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const Carousel: CarouselWithRef = forwardRef(function Carousel<T extends ElementType = 'div'>(
  props: CarouselProps<T>,
  ref?: CarouselProps<T>['ref']
) {
  const { as = 'div' as ElementType, brCarousel, className, ...rest } = props
  const usedRef = useMultiRef(ref, brCarousel.ref)

  return (
    <BrElement
      as={as}
      ref={usedRef}
      className={classNames('carousel slide', className)}
      {...rest}
    />
  )
})
export default Carousel
