import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import Button, { ButtonProps } from '../Button/Button'

export type CardLinkProps<T extends ElementType, Breakpoints extends string> = ButtonProps<
  T,
  Breakpoints
> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
  bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'card-link'>
}

type CardLinkWithRef = <
  Component extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CardLinkProps<Component, Breakpoints>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardLink: CardLinkWithRef = forwardRef(function CardLink<
  T extends ElementType = 'a',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CardLinkProps<T, Breakpoints>, ref?: CardLinkProps<T, Breakpoints>['ref']) {
  const { as = 'a' as ElementType, children, bsJs, ...rest } = props

  return (
    <Button
      as={as}
      ref={ref}
      bsJs={{ elementType: 'card-link', ...(bsJs as ButtonProps<T, Breakpoints>['bsJs']) }}
      {...rest}
    >
      {children}
    </Button>
  )
})
export default CardLink
