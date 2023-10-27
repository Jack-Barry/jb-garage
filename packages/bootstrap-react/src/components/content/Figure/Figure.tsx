import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import Image, { ImageProps } from '../Image/Image'

export type ImageElementType = 'img' | 'svg'
export type FigureProps<T extends ImageElementType, Breakpoints extends string> = BrElementProps<
  'figure',
  undefined,
  Breakpoints,
  {
    /** Props to pass along to the `Image` component */
    brFigureImage: ImageProps<T, Breakpoints>
    /** Props to pass along to the `figcaption` element */
    brFigureCaption: BrElementProps<'figcaption'>
  }
>

type FigureWithRef = <
  Component extends ImageElementType = 'img',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: FigureProps<Component, Breakpoints>
) => ReactNode

const Figure: FigureWithRef = forwardRef(function Figure<
  T extends ImageElementType = 'img',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FigureProps<T, Breakpoints>, ref?: FigureProps<T, Breakpoints>['ref']) {
  const { brFigureImage: brImage, brFigureCaption: brCaption, ...rest } = props

  return (
    <BrElement as="figure" ref={ref} {...rest}>
      <Image {...brImage} />
      <BrElement as="figcaption" {...brCaption} />
    </BrElement>
  )
})
export default Figure
