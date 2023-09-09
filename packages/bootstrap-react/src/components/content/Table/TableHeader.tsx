import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

export type TableHeaderProps = Omit<TableEntryProps<'th'>, 'as'>

type TableHeaderWithRef = (props: TableHeaderProps) => ReactNode

const TableHeader: TableHeaderWithRef = forwardRef(function TableHeader(
  props: TableHeaderProps,
  ref?: TableHeaderProps['ref']
) {
  return <TableEntry as="th" ref={ref} {...props} />
})
export default TableHeader
