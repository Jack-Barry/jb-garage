import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import Image, { ImageElementType, ImageProps } from '../../content/Image/Image'

export type CardImageProps<T extends ImageElementType, Breakpoints extends string> = Omit<
  ImageProps<T, Breakpoints>,
  'bsJs'
> & {
  bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-img'>
}

type CardImageWithRef = <
  Component extends ImageElementType = 'img',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardImageProps<Component, Breakpoints>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardImage: CardImageWithRef = forwardRef(function CardImage<
  T extends ImageElementType = 'img',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardImageProps<T, Breakpoints>, ref?: CardImageProps<T, Breakpoints>['ref']) {
  const { bsJs, ...rest } = props

  return <Image ref={ref} bsJs={{ elementType: 'card-img', ...bsJs }} {...rest} />
})
export default CardImage
