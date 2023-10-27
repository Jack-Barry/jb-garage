import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type FormTextProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-text'>
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
  }
>

type FormTextWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: FormTextProps<Component, Breakpoints>
) => ReactNode

/** []() */
const FormText: FormTextWithRef = forwardRef(function FormText<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FormTextProps<T, Breakpoints>, ref?: FormTextProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, bsJs, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'form-text', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default FormText
