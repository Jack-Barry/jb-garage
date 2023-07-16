import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormCheckLabelProps = Omit<BrElementProps<'label'>, 'as'>

export default function FormCheckLabel(props: FormCheckLabelProps) {
  const { children, className, ...rest } = props

  return (
    <BrElement as="label" className={classNames('form-check-Label', className)} {...rest}>
      {children}
    </BrElement>
  )
}
