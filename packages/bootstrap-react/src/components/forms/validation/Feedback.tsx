import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type BrFeedbackType = 'valid' | 'invalid' | string
export type FeedbackProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-validation'>
  }
>

type FeedbackWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: FeedbackProps<Component, Breakpoints>
) => ReactNode

const Feedback: FeedbackWithRef = forwardRef(function Feedback<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: FeedbackProps<T, Breakpoints>, ref?: FeedbackProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, bsJs, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'form-validation', ...bsJs }} {...rest}>
      {children}
    </BrElement>
  )
})
export default Feedback
