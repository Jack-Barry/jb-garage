import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import TableGroup, { TableGroupProps } from './TableGroup'

export type TableFootProps<Breakpoints extends string> = Omit<
  TableGroupProps<'tfoot', Breakpoints>,
  'as'
>

type TableFootWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableFootProps<Breakpoints>
) => ReactNode

const TableFoot: TableFootWithRef = forwardRef(function TableFoot<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableFootProps<Breakpoints>, ref?: TableFootProps<Breakpoints>['ref']) {
  return <TableGroup as="tfoot" ref={ref} {...props} />
})
export default TableFoot
