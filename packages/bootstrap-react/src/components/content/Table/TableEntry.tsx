import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'

type TableEntryElementType = 'tr' | 'td' | 'th' | 'thead' | 'tbody' | 'tfoot'
export type TableEntryProps<T extends TableEntryElementType> = BrElementProps<
  T,
  {
    /** Type of HTML element to render */
    as?: T
    /** Apply Bootstrap table row active style to row */
    brTableEntryActive?: boolean
  }
>

type TableEntryWithRef = <Component extends TableEntryElementType = 'tr'>(
  props: TableEntryProps<Component>
) => ReactNode

const TableEntry: TableEntryWithRef = forwardRef(function TableEntry<
  T extends TableEntryElementType = 'tr'
>(props: TableEntryProps<T>, ref?: TableEntryProps<T>['ref']) {
  const { as = 'tr' as TableEntryElementType, className, brTableEntryActive, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        {
          'table-active': brTableEntryActive
        },
        className
      )}
      {...rest}
    />
  )
})
export default TableEntry
