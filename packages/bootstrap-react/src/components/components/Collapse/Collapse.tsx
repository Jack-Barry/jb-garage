import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useCollapse } from './useCollapse'

export type CollapseProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  'collapse' | 'accordion-collapse',
  Breakpoints,
  {
    brCollapse: ReturnType<typeof useCollapse>
  }
>

export type CollapseWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: CollapseProps<Component, Breakpoints>
) => ReactNode

/**
 * [Collapse](https://getbootstrap.com/docs/5.3/components/collapse)
 */
const Collapse: CollapseWithRef = forwardRef(function Collapse<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CollapseProps<T, Breakpoints>, ref?: CollapseProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, brCollapse, bsJs, ...rest } = props
  const { collapseRef } = brCollapse
  const usedRef = useMultiRef(ref, collapseRef)

  return <BrElement as={as} ref={usedRef} bsJs={{ elementType: 'collapse', ...bsJs }} {...rest} />
})
export default Collapse
