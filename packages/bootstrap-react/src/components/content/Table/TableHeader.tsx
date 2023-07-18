import TableEntry, { TableEntryProps } from './TableEntry'

export default function TableHeader(props: Omit<TableEntryProps<'th'>, 'as'>) {
  return <TableEntry as="th" {...props} />
}
