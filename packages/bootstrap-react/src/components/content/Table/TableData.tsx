import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

export type TableDataProps = Omit<TableEntryProps<'td'>, 'as'>
type TableDataWithRef = (props: TableDataProps) => ReactNode

const TableData: TableDataWithRef = forwardRef(function TableData(
  props: TableDataProps,
  ref?: TableDataProps['ref']
) {
  return <TableEntry as="td" ref={ref} {...props} />
})
export default TableData
