import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ImageElementType = 'img' | 'svg'
export type ImageProps<T extends ImageElementType> = Omit<BrElementProps<T>, 'bsJs'> & {
  bsJs?: BsJsConfig<'image'>
}

type ImageWithRef = <Component extends ImageElementType = 'img'>(
  props: ImageProps<Component>
) => ReactNode

const Image: ImageWithRef = forwardRef(function Image<T extends ImageElementType = 'img'>(
  props: ImageProps<T>,
  ref?: ImageProps<T>['ref']
) {
  const { as = 'img' as ImageElementType, ...rest } = props

  return <BrElement as={as} ref={ref} {...rest} />
})
export default Image
