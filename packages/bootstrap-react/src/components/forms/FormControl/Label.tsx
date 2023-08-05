import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type LabelProps = Omit<BrElementProps<'label'>, 'as'> & {
  /** Apply Bootstrap column form label styling */
  brLabelCol?: boolean
}

export default function Label(props: LabelProps) {
  const { brLabelCol, children, className, ...rest } = props

  return (
    <BrElement
      as="label"
      className={classNames({ 'form-Label': !brLabelCol, 'col-form-label': brLabelCol }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
