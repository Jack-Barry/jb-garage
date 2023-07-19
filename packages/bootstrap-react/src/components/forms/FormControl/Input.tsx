import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'

export type InputElementType = 'input' | 'textarea'
export type InputProps<T extends InputElementType> = Omit<BrElementProps<T>, 'type'> & {
  /**
   * Type of `input`
   *
   * @default "text"
   */
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  /** Present as a large form control */
  brLg?: boolean
  /** Present as a small form control */
  brSm?: boolean
  /** Input is plaintext */
  brPlainText?: boolean
  /**
   * Should render Bootstrap color input styles
   *
   * If `type` is `"color"`, this defaults to `true`, but you may set it to `false`
   *   explicitly if needed
   */
  brColor?: boolean
  /**
   * Should render Bootstrap range input styles
   *
   * If `type` is `"range"`, this defaults to `true`, but you may set it to `false`
   *   explicitly if needed
   */
  brRange?: boolean
  /** Form input value is invalid */
  brIsInvalid?: boolean
}

type InputComponent = <Component extends InputElementType = 'input'>(
  props: InputProps<Component>
) => ReactNode | null

const Input: InputComponent = forwardRef(function FormInput<T extends InputElementType = 'input'>(
  props: InputProps<T>,
  ref?: InputProps<T>['ref']
) {
  const {
    as = 'input' as InputElementType,
    type = 'text',
    children,
    className,
    brLg,
    brSm,
    brPlainText,
    brColor,
    brRange,
    brIsInvalid,
    ...rest
  } = props

  const isRange = brRange ?? type === 'range'

  return (
    <BrElement
      as={as}
      type={type}
      ref={ref}
      className={classNames(
        {
          'form-control': !isRange,
          'form-control-lg': brLg,
          'form-control-sm': brSm,
          'form-control-plaintext': brPlainText,
          'form-control-color': brColor ?? type === 'color',
          'form-range': isRange,
          'is-invalid': brIsInvalid
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Input
