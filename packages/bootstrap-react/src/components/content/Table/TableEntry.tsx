import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

type TableEntryElementType = 'tr' | 'td' | 'th' | 'thead' | 'tbody' | 'tfoot'
export type TableEntryProps<
  T extends TableEntryElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    /** Type of HTML element to render */
    as?: T
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'table-entry' | 'table-group'>
  }
>

type TableEntryWithRef = <
  Component extends TableEntryElementType = 'tr',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: TableEntryProps<Component, Breakpoints>
) => ReactNode

const TableEntry: TableEntryWithRef = forwardRef(function TableEntry<
  T extends TableEntryElementType = 'tr',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TableEntryProps<T, Breakpoints>, ref?: TableEntryProps<T, Breakpoints>['ref']) {
  const { as = 'tr' as TableEntryElementType, ...rest } = props

  return <BrElement as={as} ref={ref} {...rest} />
})
export default TableEntry
