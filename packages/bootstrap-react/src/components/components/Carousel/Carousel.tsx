import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'
import { useCarousel } from './useCarousel'
import { useMultiRef } from '../../utils/useMultiRef'

export type CarouselProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useCarousel` */
    brCarousel: ReturnType<typeof useCarousel>
    brFade?: boolean
  }
>

export type CarouselComponent = <Component extends ElementType = 'div'>(
  props: CarouselProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const Carousel: CarouselComponent = forwardRef(function Carousel<T extends ElementType = 'div'>(
  props: CarouselProps<T>,
  ref?: CarouselProps<T>['ref']
) {
  const { as, brCarousel, brFade, className, ...rest } = props
  const usedRef = useMultiRef(ref, brCarousel.ref)

  return (
    <BrElement
      as={as as ElementType}
      ref={usedRef}
      className={classNames('carousel slide', { 'carousel-fade': brFade }, className)}
      {...rest}
    />
  )
})
export default Carousel
