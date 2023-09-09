import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'

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

type ImageWithRef = <Component extends ImageElementType = 'img'>(
  props: ImageProps<Component>
) => ReactNode

const Image: ImageWithRef = forwardRef(function Image<T extends ImageElementType = 'img'>(
  props: ImageProps<T>,
  ref?: ImageProps<T>['ref']
) {
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
      ref={ref}
      className={classNames(
        { 'img-fluid': brImageFluid, 'img-thumbnail': brImageThumbnail },
        className
      )}
      {...rest}
    />
  )
})
export default Image
