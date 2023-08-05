import classNames from 'classnames'
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
    /** Variant of button style to apply */
    brButtonColor?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info'
      | 'light'
      | 'dark'
      | 'link'
      | string
    /** Present a small button */
    brButtonSm?: boolean
    /** Present a large button */
    brButtonLg?: boolean
    /** Use this prop for HTML elements that do not support `disabled` */
    brButtonDisabled?: boolean
    /** Button is currently active */
    brButtonActive?: boolean
    /**
     * Button should have `btn` class
     *
     * @default true
     */
    brButtonBtn?: boolean
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
  const {
    as = 'button' as ElementType,
    type,
    className,
    children,
    brButtonColor,
    brButtonSm,
    brButtonLg,
    brButtonDisabled,
    brButtonActive,
    brButtonBtn = true,
    'aria-disabled': ariaDisabled = typeof brButtonDisabled !== 'undefined'
      ? brButtonDisabled
      : undefined,
    ...rest
  } = props
  /** By default, set type to match button. Avoids `form` gotchas */
  const usedType = type || (as === 'button' ? 'button' : undefined)

  return (
    <BrElement
      as={as}
      type={usedType}
      ref={ref}
      className={classNames(
        {
          btn: brButtonBtn,
          [`btn-${brButtonColor}`]: !!brButtonColor,
          'btn-sm': brButtonSm,
          'btn-lg': brButtonLg,
          disabled: brButtonDisabled,
          active: brButtonActive
        },
        className
      )}
      aria-disabled={ariaDisabled}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Button
