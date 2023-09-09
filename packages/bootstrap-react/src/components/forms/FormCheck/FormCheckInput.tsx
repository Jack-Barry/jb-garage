import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormCheckInputProps = Omit<BrElementProps<'input'>, 'as' | 'type'> & {
  type?: 'checkbox' | 'radio'
  /** Form input value is invalid */
  brFormCheckInputInvalid?: boolean
  /** Form input value is valid */
  brFormCheckInputValid?: boolean
}

type FormCheckInputWithRef = (props: FormCheckInputProps) => ReactNode

const FormCheckInput: FormCheckInputWithRef = forwardRef(function FormCheckInput(
  props: FormCheckInputProps,
  ref
) {
  const {
    type = 'checkbox',
    children,
    className,
    brFormCheckInputInvalid,
    brFormCheckInputValid,
    ...rest
  } = props

  return (
    <BrElement
      as="input"
      type={type}
      ref={ref}
      className={classNames(
        'form-check-input',
        { 'is-invalid': brFormCheckInputInvalid, 'is-valid': brFormCheckInputValid },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormCheckInput
