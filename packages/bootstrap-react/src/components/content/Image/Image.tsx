import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ImageElementType = 'img' | 'svg'
export type ImageProps<T extends ImageElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'img'>
  }
>

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

  return <BrElement as={as} ref={ref} bsJs={{ elementType: 'img', ...bsJs }} {...rest} />
})
export default Image
