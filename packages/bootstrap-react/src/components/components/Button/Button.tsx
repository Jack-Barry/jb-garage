import { AllBreakpointsOptions, BsJsConfig } from 'packages/bootstrap-js/src/_types'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "button"
     */
    as?: T
    bsJs?: BsJsConfig<'button'>
  }
>

type ButtonWithRef = <Component extends ElementType = 'button'>(
  props: ButtonProps<Component>
) => ReactNode

/**
 * [Button](https://getbootstrap.com/docs/5.3/components/buttons/)
 *
 * - Accepts all props that can be passed to a `button` element
 */
const Button: ButtonWithRef = forwardRef(function Button<T extends ElementType = 'button'>(
  props: ButtonProps<T>,
  ref?: ButtonProps<T>['ref']
) {
  const isVisuallyDisabled =
    (props.bsJs?.bsJsAll as AllBreakpointsOptions<'button'>).button?.disabled ?? props['disabled']
  const {
    as = 'button' as ElementType,
    type,
    children,
    'aria-disabled': ariaDisabled = props['aria-disabled'] ?? isVisuallyDisabled,
    ...rest
  } = props
  /** By default, set type to match button. Avoids `form` gotchas */
  const usedType = type || (as === 'button' ? 'button' : undefined)

  return (
    <BrElement as={as} type={usedType} ref={ref} aria-disabled={ariaDisabled} {...rest}>
      {children}
    </BrElement>
  )
})
export default Button
