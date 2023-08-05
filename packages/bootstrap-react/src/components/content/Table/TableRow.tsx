import { ReactNode, forwardRef } from 'react'
import TableEntry, { TableEntryProps } from './TableEntry'

export type TableRowProps = Omit<TableEntryProps<'tr'>, 'as'>

type TableRowWithRef = (props: TableRowProps) => ReactNode

const TableRow: TableRowWithRef = forwardRef(function TableRow(
  props: TableRowProps,
  ref?: TableRowProps['ref']
) {
  return <TableEntry as="tr" ref={ref} {...props} />
})
export default TableRow
