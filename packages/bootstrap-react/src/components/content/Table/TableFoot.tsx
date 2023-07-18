import TableGroup, { TableGroupProps } from './TableGroup'

export default function TableFoot(props: Omit<TableGroupProps<'tfoot'>, 'as'>) {
  return <TableGroup as="tfoot" {...props} />
}
