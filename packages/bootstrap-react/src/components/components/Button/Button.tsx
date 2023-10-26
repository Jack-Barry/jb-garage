import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /**
     * Type of HTML element to render
     *
     * @default "button"
     */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'btn'>
  }
>

type ButtonWithRef = <
  Component extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ButtonProps<Component, Breakpoints>
) => ReactNode

/**
 * [Button](https://getbootstrap.com/docs/5.3/components/buttons/)
 *
 * - Accepts all props that can be passed to a `button` element
 */
const Button: ButtonWithRef = forwardRef(function Button<
  T extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ButtonProps<T, Breakpoints>, ref?: ButtonProps<T, Breakpoints>['ref']) {
  const isVisuallyDisabled = props.bsJs?.disabled ?? props['disabled']
  const {
    as = 'button' as ElementType,
    type,
    children,
    bsJs,
    'aria-disabled': ariaDisabled = props['aria-disabled'] ?? isVisuallyDisabled,
    ...rest
  } = props
  /** By default, set type to match button. Avoids `form` gotchas */
  const usedType = type || (as === 'button' ? 'button' : undefined)

  return (
    <BrElement
      as={as}
      type={usedType}
      ref={ref}
      aria-disabled={ariaDisabled}
      bsJs={{ elementType: 'btn', ...bsJs }}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Button
