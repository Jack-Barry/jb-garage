import TableGroup, { TableGroupProps } from './TableGroup'

export default function TableBody(props: Omit<TableGroupProps<'tbody'>, 'as'>) {
  return <TableGroup as="tbody" {...props} />
}
