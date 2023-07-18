import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'

export type FormInputElementType = 'input' | 'textarea'
export type FormInputProps<T extends FormInputElementType> = Omit<BrElementProps<T>, 'type'> & {
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
}

type FormInputComponent = <Component extends FormInputElementType = 'input'>(
  props: FormInputProps<Component>
) => ReactNode | null

const FormInput: FormInputComponent = forwardRef(function FormInput<
  T extends FormInputElementType = 'input'
>(props: FormInputProps<T>, ref?: FormInputProps<T>['ref']) {
  const {
    as = 'input' as FormInputElementType,
    type = 'text',
    children,
    className,
    brLg,
    brSm,
    brPlainText,
    brColor,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      type={type}
      ref={ref}
      className={classNames(
        'form-control',
        {
          'form-control-lg': brLg,
          'form-control-sm': brSm,
          'form-control-plaintext': brPlainText,
          'form-control-color': brColor ?? type === 'color'
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormInput
