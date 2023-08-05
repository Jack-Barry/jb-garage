import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ImageElementType = 'img' | 'svg'
export type ImageProps<T extends ImageElementType> = BrElementProps<
  T,
  {
    as?: T
    brImageFluid?: boolean
    brImageThumbnail?: boolean
  }
>

export default function Image<T extends ImageElementType = 'img'>(props: ImageProps<T>) {
  const {
    as = 'img' as ImageElementType,
    brImageFluid,
    brImageThumbnail,
    className,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        { 'img-fluid': brImageFluid, 'img-thumbnail': brImageThumbnail },
        className
      )}
      {...rest}
    />
  )
}
