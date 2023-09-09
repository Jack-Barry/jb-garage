import { ReactNode, forwardRef } from 'react'

import TableGroup, { TableGroupProps } from './TableGroup'

export type TableHeadProps = Omit<TableGroupProps<'thead'>, 'as'>

type TableHeadWithRef = (props: TableHeadProps) => ReactNode

const TableHead: TableHeadWithRef = forwardRef(function TableHead(
  props: TableHeadProps,
  ref?: TableHeadProps['ref']
) {
  return <TableGroup as="thead" ref={ref} {...props} />
})
export default TableHead
