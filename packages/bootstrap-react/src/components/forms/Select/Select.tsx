import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'

export type SelectProps = Omit<BrElementProps<'select'>, 'as'> & {
  /** Render select with Bootstrap's small styling */
  brSelectSm?: boolean
  /** Render select with Bootstrap's large styling */
  brSelectLg?: boolean
  /** Form input value is invalid */
  brSelectInvalid?: boolean
  /** Form input value is valid */
  brSelectValid?: boolean
}

type SelectComponent = (props: SelectProps) => ReactNode | null

const Select: SelectComponent = forwardRef(function Select(
  props: SelectProps,
  ref?: SelectProps['ref']
) {
  const { children, className, brSelectSm, brSelectLg, brSelectInvalid, brSelectValid, ...rest } =
    props

  return (
    <BrElement
      as="select"
      ref={ref}
      className={classNames(
        'form-select',
        {
          'form-select-sm': brSelectSm,
          'form-select-lg': brSelectLg,
          'is-invalid': brSelectInvalid,
          'is-valid': brSelectValid
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
