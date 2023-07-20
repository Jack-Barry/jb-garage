import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonElementType = 'button' | 'a'
export type ButtonProps<T extends ButtonElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "button"
     */
    as?: T
  }
>

type ButtonComponent = <Component extends ButtonElementType = 'button'>(
  props: ButtonProps<Component>
) => ReactNode | null

/**
 * [Button](https://getbootstrap.com/docs/5.3/components/buttons/)
 *
 * - Accepts all props that can be passed to a `button` element
 */
const Button: ButtonComponent = forwardRef(function Button<T extends ButtonElementType = 'button'>(
  props: ButtonProps<T>,
  ref?: ButtonProps<T>['ref']
) {
  const { as = 'button' as ButtonElementType, type, className, children, ...rest } = props
  /** By default, set type to match button. Avoids `form` gotchas */
  const usedType = type || (as === 'button' ? 'button' : undefined)

  return (
    <BrElement
      as={as}
      type={usedType}
      ref={ref}
      className={classNames({ btn: as === 'button' }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Button
