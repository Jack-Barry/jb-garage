import { ReactNode, forwardRef } from 'react'

import TableGroup, { TableGroupProps } from './TableGroup'

export type TableBodyProps = Omit<TableGroupProps<'tbody'>, 'as'>
type TableBodyWithRef = (props: TableBodyProps) => ReactNode

const TableBody: TableBodyWithRef = forwardRef(function TableBody(
  props: TableBodyProps,
  ref?: TableBodyProps['ref']
) {
  return <TableGroup as="tbody" ref={ref} {...props} />
})
export default TableBody
