import TableGroup, { TableGroupProps } from './TableGroup'

export default function TableHead(props: Omit<TableGroupProps<'thead'>, 'as'>) {
  return <TableGroup as="thead" {...props} />
}
