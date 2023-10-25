import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

import { useParentAccordion } from './AccordionContext'

export type AccordionButtonProps<
  T extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  'accordion-button',
  Breakpoints,
  {
    bsJs?: BsJsOptions<Breakpoints, 'accordion-button'>
    /** Button is for accordion section that is currently collapsed */
    brAccordionButtonCollapsed?: boolean
  }
>

type AccordionButtonWithRef = <
  Component extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionButtonProps<Component, Breakpoints>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionButton: AccordionButtonWithRef = forwardRef(function AccordionButton<
  T extends ElementType = 'button',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AccordionButtonProps<T, Breakpoints>, ref?: AccordionButtonProps<T, Breakpoints>['ref']) {
  const { as = 'button' as ElementType, brAccordionButtonCollapsed, bsJs, ...rest } = props
  const { getCollapseById, toggleById } = useParentAccordion()

  const collapseId = props['aria-controls']
  const defaultCollapse = getCollapseById(collapseId)
  const isCollapsed = brAccordionButtonCollapsed ?? !defaultCollapse?.collapse?.isOpen
  const onClick = props['onClick'] || toggleMatchingCollapse

  function toggleMatchingCollapse() {
    toggleById(collapseId)
  }

  return (
    <BrElement
      as={as}
      ref={ref}
      bsJs={{
        elementType: 'accordion-button',
        collapsed: isCollapsed,
        ...bsJs
      }}
      onClick={onClick}
      {...rest}
    />
  )
})
export default AccordionButton
