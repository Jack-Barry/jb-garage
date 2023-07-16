import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { forwardRef } from 'react'

export type FormInputProps = Omit<BrElementProps<'input'>, 'as' | 'type'> & {
  /**
   * Type of `input`
   *
   * @default "text"
   */
  type?: // | 'button'
  // | 'checkbox'
  // | 'color'
  // | 'date'
  // | 'datetime-local'
  | 'email'
    // | 'file'
    | 'hidden'
    // | 'image'
    // | 'month'
    | 'number'
    | 'password'
    // | 'radio'
    // | 'range'
    // | 'reset'
    | 'search'
    // | 'submit'
    | 'tel'
    | 'text'
  // | 'time'
  // | 'url'
  // | 'week'
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(function FormInput(
  props: FormInputProps,
  ref
) {
  const { type = 'text', children, className, ...rest } = props

  return (
    <BrElement
      as="input"
      type={type}
      ref={ref}
      className={classNames('form-control', className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormInput
