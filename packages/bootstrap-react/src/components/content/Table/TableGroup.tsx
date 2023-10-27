import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import TableEntry, { TableEntryProps } from './TableEntry'

type TableGroupElementType = 'thead' | 'tbody' | 'tfoot'
export type TableGroupProps<T extends TableGroupElementType, Breakpoints extends string> = Omit<
  TableEntryProps<T, Breakpoints>,
  'bsJs'
> & {
  bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'table-group'>
}

type TableGroupWithRef = <
  Component extends TableGroupElementType = 'tbody',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: TableGroupProps<Component, Breakpoints>
) => ReactNode

const TableGroup: TableGroupWithRef = forwardRef(function TableGroup<
  T extends TableGroupElementType = 'tbody',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableGroupProps<T, Breakpoints>, ref?: TableGroupProps<T, Breakpoints>['ref']) {
  const { as = 'tbody' as TableGroupElementType, ...rest } = props

  return <TableEntry as={as} ref={ref} {...rest} />
})
export default TableGroup
