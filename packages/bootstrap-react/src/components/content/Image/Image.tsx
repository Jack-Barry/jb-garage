import { BootstrapDefaultBreakpoint, BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ImageElementType = 'img' | 'svg'
export type ImageProps<T extends ImageElementType, Breakpoints extends string> = Omit<
  BrElementProps<T, 'img', Breakpoints>,
  'bsJs'
> & {
  bsJs?: Omit<BsJsOptions<Breakpoints, 'img'>, 'elementType'>
}

type ImageWithRef = <
  Component extends ImageElementType = 'img',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ImageProps<Component, Breakpoints>
) => ReactNode

const Image: ImageWithRef = forwardRef(function Image<
  T extends ImageElementType = 'img',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ImageProps<T, Breakpoints>, ref?: ImageProps<T, Breakpoints>['ref']) {
  const { as = 'img' as ImageElementType, bsJs, ...rest } = props

  return <BrElement as={as} ref={ref} bsJs={{ ...bsJs, elementType: 'img' }} {...rest} />
})
export default Image
