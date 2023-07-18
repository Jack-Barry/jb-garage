import TableEntry, { TableEntryProps } from './TableEntry'

export default function TableRow(props: Omit<TableEntryProps<'tr'>, 'as'>) {
  return <TableEntry as="tr" {...props} />
}
