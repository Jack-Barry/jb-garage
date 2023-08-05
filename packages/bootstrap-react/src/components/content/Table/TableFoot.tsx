import { ReactNode, forwardRef } from 'react'
import TableGroup, { TableGroupProps } from './TableGroup'

export type TableFootProps = Omit<TableGroupProps<'tfoot'>, 'as'>

type TableFootWithRef = (props: TableFootProps) => ReactNode

const TableFoot: TableFootWithRef = forwardRef(function TableFoot(
  props: TableFootProps,
  ref?: TableFootProps['ref']
) {
  return <TableGroup as="tfoot" ref={ref} {...props} />
})
export default TableFoot
