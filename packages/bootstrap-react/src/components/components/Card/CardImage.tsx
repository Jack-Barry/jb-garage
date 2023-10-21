import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import Image, { ImageElementType, ImageProps } from '../../content/Image/Image'

export type CardImageProps<T extends ImageElementType> = ImageProps<T> & {
  bsJs?: BsJsConfig<'card-image'>
}

type CardImageWithRef = <Component extends ImageElementType = 'img'>(
  props: CardImageProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardImage: CardImageWithRef = forwardRef(function CardImage<
  T extends ImageElementType = 'img'
>(props: CardImageProps<T>, ref?: CardImageProps<T>['ref']) {
  const { ...rest } = props

  return <Image ref={ref} {...rest} />
})
export default CardImage
