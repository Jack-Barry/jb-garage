import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

type TableGroupElementType = 'thead' | 'tbody' | 'tfoot'
export type TableGroupProps<T extends TableGroupElementType> = Omit<TableEntryProps<T>, 'bsJs'> & {
  bsJs?: BsJsConfig<'table-group'>
}

type TableGroupWithRef = <Component extends TableGroupElementType = 'tbody'>(
  props: TableGroupProps<Component>
) => ReactNode

const TableGroup: TableGroupWithRef = forwardRef(function TableGroup<
  T extends TableGroupElementType = 'tbody'
>(props: TableGroupProps<T>, ref?: TableGroupProps<T>['ref']) {
  const { as = 'tbody' as TableGroupElementType, ...rest } = props

  return <TableEntry as={as} ref={ref} {...rest} />
})
export default TableGroup
