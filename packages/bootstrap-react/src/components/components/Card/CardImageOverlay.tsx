import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardImageOverlayProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-img-overlay'>
  }
>

type CardImageOverlayWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardImageOverlayProps<Component, Breakpoints>
) => ReactNode

/** []() */
const CardImageOverlay: CardImageOverlayWithRef = forwardRef(function CardImageOverlay<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardImageOverlayProps<T, Breakpoints>,
  ref?: CardImageOverlayProps<T, Breakpoints>['ref']
) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'card-img-overlay', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardImageOverlay
