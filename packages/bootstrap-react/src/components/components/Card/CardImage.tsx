import classNames from 'classnames'
import Image, { ImageElementType, ImageProps } from '../../content/Image/Image'

export type CardImageProps<T extends ImageElementType> = ImageProps<T> & {
  /** Position of the image on the card */
  position?: 'top' | 'bottom'
}

/** [Card Image](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardImage<T extends ImageElementType = 'img'>(props: CardImageProps<T>) {
  const { position, className, ...rest } = props

  return (
    <Image
      className={classNames(
        { 'card-img': !position, [`card-img-${position}`]: !!position },
        className
      )}
      {...rest}
    />
  )
}
