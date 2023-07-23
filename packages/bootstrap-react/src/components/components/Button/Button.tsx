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
    brVariant?:
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
    brSm?: boolean
    /** Present a large button */
    brLg?: boolean
    /** Use this prop for HTML elements that do not support `disabled` */
    brDisabled?: boolean
    /** Button is currently active */
    brActive?: boolean
  }
>

type ButtonComponent = <Component extends ElementType = 'button'>(
  props: ButtonProps<Component>
) => ReactNode | null

/**
 * [Button](https://getbootstrap.com/docs/5.3/components/buttons/)
 *
 * - Accepts all props that can be passed to a `button` element
 */
const Button: ButtonComponent = forwardRef(function Button<T extends ElementType = 'button'>(
  props: ButtonProps<T>,
  ref?: ButtonProps<T>['ref']
) {
  const {
    as = 'button' as ElementType,
    type,
    className,
    children,
    brVariant,
    brSm,
    brLg,
    brDisabled,
    brActive,
    'aria-disabled': ariaDisabled = typeof brDisabled !== 'undefined' ? brDisabled : undefined,
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
        'btn',
        {
          [`btn-${brVariant}`]: !!brVariant,
          'btn-sm': brSm,
          'btn-lg': brLg,
          disabled: brDisabled,
          active: brActive
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
