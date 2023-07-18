import classNames from 'classnames'
import TableEntry, { TableEntryProps } from './TableEntry'

type TableGroupElementType = 'thead' | 'tbody' | 'tfoot'
export type TableGroupProps<T extends TableGroupElementType> = TableEntryProps<T> & {
  /** Apply Bootstrap group divider styling to group */
  brGroupDivider?: boolean
}

export default function TableGroup<T extends TableGroupElementType>(props: TableGroupProps<T>) {
  const { className, brGroupDivider, ...rest } = props

  return (
    <TableEntry
      className={classNames({ 'table-group-divider': brGroupDivider }, className)}
      {...rest}
    />
  )
}
