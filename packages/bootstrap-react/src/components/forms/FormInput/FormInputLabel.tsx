import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormInputLabelProps = Omit<BrElementProps<'label'>, 'as'>

export default function FormInputLabel(props: FormInputLabelProps) {
  const { children, className, ...rest } = props

  return (
    <BrElement as="label" className={classNames('form-Label', className)} {...rest}>
      {children}
    </BrElement>
  )
}
