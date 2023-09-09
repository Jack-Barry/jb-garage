import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

type TableGroupElementType = 'thead' | 'tbody' | 'tfoot'
export type TableGroupProps<T extends TableGroupElementType> = TableEntryProps<T> & {
  /** Apply Bootstrap group divider styling to group */
  brTableGroupDivider?: boolean
}

type TableGroupWithRef = <Component extends TableGroupElementType = 'tbody'>(
  props: TableGroupProps<Component>
) => ReactNode

const TableGroup: TableGroupWithRef = forwardRef(function TableGroup<
  T extends TableGroupElementType = 'tbody'
>(props: TableGroupProps<T>, ref?: TableGroupProps<T>['ref']) {
  const { as = 'tbody' as TableGroupElementType, className, brTableGroupDivider, ...rest } = props

  return (
    <TableEntry
      as={as}
      ref={ref}
      className={classNames({ 'table-group-divider': brTableGroupDivider }, className)}
      {...rest}
    />
  )
})
export default TableGroup
