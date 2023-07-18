import TableEntry, { TableEntryProps } from './TableEntry'

export default function TableData(props: Omit<TableEntryProps<'td'>, 'as'>) {
  return <TableEntry as="td" {...props} />
}
