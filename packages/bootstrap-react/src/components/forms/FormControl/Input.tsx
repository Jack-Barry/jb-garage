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
  brInputLg?: boolean
  /** Present as a small form control */
  brInputSm?: boolean
  /** Input is plaintext */
  brInputPlainText?: boolean
  /**
   * Should render Bootstrap color input styles
   *
   * If `type` is `"color"`, this defaults to `true`, but you may set it to `false`
   *   explicitly if needed
   */
  brInputColorStyles?: boolean
  /**
   * Should render Bootstrap range input styles
   *
   * If `type` is `"range"`, this defaults to `true`, but you may set it to `false`
   *   explicitly if needed
   */
  brInputRangeStyles?: boolean
  /** Form input value is invalid */
  brInputInvalid?: boolean
  /** Form input value is valid */
  brInputValid?: boolean
}

type InputWithRef = <Component extends InputElementType = 'input'>(
  props: InputProps<Component>
) => ReactNode

const Input: InputWithRef = forwardRef(function FormInput<T extends InputElementType = 'input'>(
  props: InputProps<T>,
  ref?: InputProps<T>['ref']
) {
  const {
    as = 'input' as InputElementType,
    type = 'text',
    children,
    className,
    brInputLg,
    brInputSm,
    brInputPlainText,
    brInputColorStyles,
    brInputRangeStyles,
    brInputInvalid,
    brInputValid,
    ...rest
  } = props

  const isRange = brInputRangeStyles ?? type === 'range'

  return (
    <BrElement
      as={as}
      type={type}
      ref={ref}
      className={classNames(
        {
          'form-control': !isRange,
          'form-control-lg': brInputLg,
          'form-control-sm': brInputSm,
          'form-control-plaintext': brInputPlainText,
          'form-control-color': brInputColorStyles ?? type === 'color',
          'form-range': isRange,
          'is-invalid': brInputInvalid,
          'is-valid': brInputValid
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
