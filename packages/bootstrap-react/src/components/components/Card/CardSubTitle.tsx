import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardSubTitleProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "h6"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-subtitle'>
  }
>

type CardSubTitleWithRef = <
  Component extends ElementType = 'h6',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardSubTitleProps<Component, Breakpoints>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardSubTitle: CardSubTitleWithRef = forwardRef(function CardSubTitle<
  T extends ElementType = 'h6',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardSubTitleProps<T, Breakpoints>, ref?: CardSubTitleProps<T, Breakpoints>['ref']) {
  const { as = 'h6' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'card-subtitle', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardSubTitle
