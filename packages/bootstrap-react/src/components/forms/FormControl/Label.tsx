import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type LabelProps = Omit<BrElementProps<'label'>, 'as'> & {
  /** Apply Bootstrap column form label styling */
  brLabelCol?: boolean
}

type LabelWithRef = (props: LabelProps) => ReactNode

const Label: LabelWithRef = forwardRef(function Label(props: LabelProps, ref?: LabelProps['ref']) {
  const { brLabelCol, children, className, ...rest } = props

  return (
    <BrElement
      as="label"
      ref={ref}
      className={classNames({ 'form-Label': !brLabelCol, 'col-form-label': brLabelCol }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Label
