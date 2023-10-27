import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardBodyProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
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
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-body'>
  }
>

type CardBodyWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardBodyProps<Component, Breakpoints>
) => ReactNode

/** [Card Body](https://getbootstrap.com/docs/5.3/components/card/) */
const CardBody: CardBodyWithRef = forwardRef(function CardBody<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardBodyProps<T, Breakpoints>, ref?: CardBodyProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'card-body', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardBody
