import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardTitleProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  'card-title',
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "h5"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-title'>
  }
>

type CardTitleWithRef = <
  Component extends ElementType = 'h5',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardTitleProps<Component, Breakpoints>
) => ReactNode

/** [Card Title](https://getbootstrap.com/docs/5.3/components/card/) */
const CardTitle: CardTitleWithRef = forwardRef(function CardTitle<
  T extends ElementType = 'h5',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardTitleProps<T, Breakpoints>, ref?: CardTitleProps<T, Breakpoints>['ref']) {
  const { as = 'h5' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'card-title', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardTitle
