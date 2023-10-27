import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type LabelProps<Breakpoints extends string> = Omit<
  BrElementProps<
    'label',
    undefined,
    Breakpoints,
    {
      bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-label'>
    }
  >,
  'as'
>

type LabelWithRef = <Breakpoints extends string = BootstrapDefaultBreakpoint>(
  props: LabelProps<Breakpoints>
) => ReactNode

const Label: LabelWithRef = forwardRef(function Label<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: LabelProps<Breakpoints>, ref?: LabelProps<Breakpoints>['ref']) {
  const { children, bsJs, ...rest } = props

  return (
    <BrElement as="label" ref={ref} bsJs={{ elementType: 'form-label', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Label
