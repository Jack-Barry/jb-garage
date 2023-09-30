import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

type TableEntryElementType = 'tr' | 'td' | 'th' | 'thead' | 'tbody' | 'tfoot'
export type TableEntryProps<T extends TableEntryElementType> = Omit<
  BrElementProps<T>,
  'as' | 'bsJs'
> & {
  /** Type of HTML element to render */
  as?: T
  bsJs?: BsJsConfig<'table-entry'>
}

type TableEntryWithRef = <Component extends TableEntryElementType = 'tr'>(
  props: TableEntryProps<Component>
) => ReactNode

const TableEntry: TableEntryWithRef = forwardRef(function TableEntry<
  T extends TableEntryElementType = 'tr'
>(props: TableEntryProps<T>, ref?: TableEntryProps<T>['ref']) {
  const { as = 'tr' as TableEntryElementType, ...rest } = props

  return <BrElement as={as} ref={ref} {...rest} />
})
export default TableEntry
