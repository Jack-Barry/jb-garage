import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormLabelProps = Omit<BrElementProps<'label'>, 'as'> & {
  /** Apply Bootstrap column form label styling */
  brColFormLabel?: boolean
}

export default function FormLabel(props: FormLabelProps) {
  const { brColFormLabel, children, className, ...rest } = props

  return (
    <BrElement
      as="label"
      className={classNames(
        { 'form-Label': !brColFormLabel, 'col-form-label': brColFormLabel },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
