import { BsJsImageOptions } from '@jb-garage/bootstrap-js/_types'
import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps, bsJsSingleton } from '../../utils/BrElement'

export type ImageElementType = 'img' | 'svg'
export type ImageProps<T extends ImageElementType> = BrElementProps<
  T,
  {
    bsJsImage?: BsJsImageOptions
  }
>

type ImageWithRef = <Component extends ImageElementType = 'img'>(
  props: ImageProps<Component>
) => ReactNode

const Image: ImageWithRef = forwardRef(function Image<T extends ImageElementType = 'img'>(
  props: ImageProps<T>,
  ref?: ImageProps<T>['ref']
) {
  const { as = 'img' as ImageElementType, bsJsImage, className, ...rest } = props

  const styles = bsJsSingleton.bsJsImage(bsJsImage)

  return <BrElement as={as} ref={ref} className={classNames(styles.classes, className)} {...rest} />
})
export default Image
