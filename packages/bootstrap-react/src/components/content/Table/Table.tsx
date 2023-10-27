import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type TableProps<Breakpoints extends string> = Omit<
  BrElementProps<
    'table',
    undefined,
    Breakpoints,
    { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'table'> }
  >,
  'as'
>

export default function Table<Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: TableProps<Breakpoints>
) {
  const { bsJs, ...rest } = props

  return <BrElement as="table" bsJs={{ elementType: 'table', ...bsJs }} {...rest} />
}
