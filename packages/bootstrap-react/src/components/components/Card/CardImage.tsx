import classNames from 'classnames'
import Image, { ImageElementType, ImageProps } from '../../content/Image/Image'
import { ReactNode, forwardRef } from 'react'

export type CardImageProps<T extends ImageElementType> = ImageProps<T> & {
  /** Position of the image on the card */
  brCardImagePosition?: 'top' | 'bottom'
}

type CardImageWithRef = <Component extends ImageElementType = 'img'>(
  props: CardImageProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardImage: CardImageWithRef = forwardRef(function CardImage<
  T extends ImageElementType = 'img'
>(props: CardImageProps<T>, ref?: CardImageProps<T>['ref']) {
  const { brCardImagePosition, className, ...rest } = props

  return (
    <Image
      ref={ref}
      className={classNames(
        {
          'card-img': !brCardImagePosition,
          [`card-img-${brCardImagePosition}`]: !!brCardImagePosition
        },
        className
      )}
      {...rest}
    />
  )
})
export default CardImage
