import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardHeaderProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
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
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-header'>
  }
>

type CardHeaderWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardHeaderProps<Component, Breakpoints>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardHeader: CardHeaderWithRef = forwardRef(function CardHeader<
  T extends ElementType,
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardHeaderProps<T, Breakpoints>, ref?: CardHeaderProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'card-header', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardHeader
