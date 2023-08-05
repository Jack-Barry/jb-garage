import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'

export type FormCheckLabelProps = Omit<BrElementProps<'label'>, 'as'>

type FormCheckLabelWithRef = (props: FormCheckLabelProps) => ReactNode

const FormCheckLabel: FormCheckLabelWithRef = forwardRef(function FormCheckLabel(
  props: FormCheckLabelProps,
  ref?: FormCheckLabelProps['ref']
) {
  const { children, className, ...rest } = props

  return (
    <BrElement as="label" ref={ref} className={classNames('form-check-Label', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default FormCheckLabel
