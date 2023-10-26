import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type CardTextProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  'card-text',
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "p"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-text'>
  }
>

type CardTextWithRef = <
  Component extends ElementType = 'p',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardTextProps<Component, Breakpoints>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardText: CardTextWithRef = forwardRef(function CardText<
  T extends ElementType = 'p',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardTextProps<T, Breakpoints>, ref?: CardTextProps<T, Breakpoints>['ref']) {
  const { as = 'p' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'card-text', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default CardText
