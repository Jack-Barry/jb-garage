import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'

export type SelectProps = Omit<BrElementProps<'select'>, 'as'> & {
  /** Render select with Bootstrap's small styling */
  brSm?: boolean
  /** Render select with Bootstrap's large styling */
  brLg?: boolean
}

type SelectComponent = (props: SelectProps) => ReactNode | null

const Select: SelectComponent = forwardRef(function Select(
  props: SelectProps,
  ref?: SelectProps['ref']
) {
  const { children, className, brSm, brLg, ...rest } = props

  return (
    <BrElement
      as="select"
      ref={ref}
      className={classNames(
        'form-select',
        {
          'form-select-sm': brSm,
          'form-select-lg': brLg
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Select
