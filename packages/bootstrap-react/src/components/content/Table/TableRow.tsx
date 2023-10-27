import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

export type TableRowProps<Breakpoints extends string> = Omit<
  TableEntryProps<'tr', Breakpoints>,
  'as'
>

type TableRowWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableRowProps<Breakpoints>
) => ReactNode

const TableRow: TableRowWithRef = forwardRef(function TableRow<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableRowProps<Breakpoints>, ref?: TableRowProps<Breakpoints>['ref']) {
  return <TableEntry as="tr" ref={ref} {...props} />
})
export default TableRow
