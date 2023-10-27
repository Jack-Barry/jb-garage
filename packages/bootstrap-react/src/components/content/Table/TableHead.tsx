import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import TableGroup, { TableGroupProps } from './TableGroup'

export type TableHeadProps<Breakpoints extends string> = Omit<
  TableGroupProps<'thead', Breakpoints>,
  'as'
>

type TableHeadWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableHeadProps<Breakpoints>
) => ReactNode

const TableHead: TableHeadWithRef = forwardRef(function TableHead<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableHeadProps<Breakpoints>, ref?: TableHeadProps<Breakpoints>['ref']) {
  return <TableGroup as="thead" ref={ref} {...props} />
})
export default TableHead
