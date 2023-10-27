import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import TableGroup, { TableGroupProps } from './TableGroup'

export type TableBodyProps<Breakpoints extends string> = Omit<
  TableGroupProps<'tbody', Breakpoints>,
  'as'
>
type TableBodyWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableBodyProps<Breakpoints>
) => ReactNode

const TableBody: TableBodyWithRef = forwardRef(function TableBody<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableBodyProps<Breakpoints>, ref?: TableBodyProps<Breakpoints>['ref']) {
  return <TableGroup as="tbody" ref={ref} {...props} />
})
export default TableBody
