import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import Image, { ImageProps } from '../Image/Image'

export type ImageElementType = 'img' | 'svg'
export type FigureProps<T extends ImageElementType> = BrElementProps<'figure'> & {
  /** Props to pass along to the `Image` component */
  brFigureImage: ImageProps<T>
  /** Props to pass along to the `figcaption` element */
  brFigureCaption: BrElementProps<'figcaption'>
}

type FigureWithRef = <Component extends ImageElementType = 'img'>(
  props: FigureProps<Component>
) => ReactNode

const Figure: FigureWithRef = forwardRef(function Figure<T extends ImageElementType = 'img'>(
  props: FigureProps<T>,
  ref?: FigureProps<T>['ref']
) {
  const { brFigureImage: brImage, brFigureCaption: brCaption, ...rest } = props

  return (
    <BrElement as="figure" ref={ref} {...rest}>
      <Image {...brImage} />
      <BrElement as="figcaption" {...brCaption} />
    </BrElement>
  )
})
export default Figure
