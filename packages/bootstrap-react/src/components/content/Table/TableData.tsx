import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

export type TableDataProps<Breakpoints extends string> = Omit<
  TableEntryProps<'td', Breakpoints>,
  'as'
>
type TableDataWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableDataProps<Breakpoints>
) => ReactNode

const TableData: TableDataWithRef = forwardRef(function TableData<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableDataProps<Breakpoints>, ref?: TableDataProps<Breakpoints>['ref']) {
  return <TableEntry as="td" ref={ref} {...props} />
})
export default TableData
