import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

export type TableHeaderProps<Breakpoints extends string> = Omit<
  TableEntryProps<'th', Breakpoints>,
  'as'
>

type TableHeaderWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableHeaderProps<Breakpoints>
) => ReactNode

const TableHeader: TableHeaderWithRef = forwardRef(function TableHeader<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableHeaderProps<Breakpoints>, ref?: TableHeaderProps<Breakpoints>['ref']) {
  return <TableEntry as="th" ref={ref} {...props} />
})
export default TableHeader
