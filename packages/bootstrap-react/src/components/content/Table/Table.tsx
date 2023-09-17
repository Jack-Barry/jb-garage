import { BsJsConfig } from '@jb-garage/bootstrap-js/_types'
import classNames from 'classnames'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type TableProps = Omit<BrElementProps<'table'>, 'as' | 'bsJs'> & {
  bsJs?: BsJsConfig<'table'>
}

export default function Table(props: TableProps) {
  const { className, ...rest } = props

  return <BrElement as="table" className={classNames('table', className)} {...rest} />
}
