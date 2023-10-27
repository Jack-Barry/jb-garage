import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef, useEffect } from 'react'

import Collapse, { CollapseProps } from '../Collapse/Collapse'
import { useCollapse } from '../Collapse/useCollapse'

import { useParentAccordion } from './AccordionContext'

export type AccordionCollapseProps<T extends ElementType, Breakpoints extends string> = Partial<
  CollapseProps<T, Breakpoints>
> & {
  brAccordionCollapseDefaultOpen?: boolean
}

export type AccordionCollapseWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionCollapseProps<Component, Breakpoints>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionCollapse: AccordionCollapseWithRef = forwardRef(function AccordionCollapse<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AccordionCollapseProps<T, Breakpoints>,
  ref?: AccordionCollapseProps<T, Breakpoints>['ref']
) {
  const {
    as = 'div' as ElementType,
    bsJs,
    brCollapse,
    brAccordionCollapseDefaultOpen,
    ...rest
  } = props
  const { updateCollapse, removeCollapse } = useParentAccordion()
  const collapseId = props['id']
  if (!collapseId) {
    console.warn(
      'AccordionCollapse should be invoked with an id to allow for updating/removing it in its parent accordion'
    )
  }
  const defaultCollapse = useCollapse(
    { defaultIsVisible: brAccordionCollapseDefaultOpen },
    !!brCollapse
  )
  const usedCollapse = brCollapse || defaultCollapse

  useEffect(() => {
    if (!collapseId) {
      return
    }

    updateCollapse(collapseId, usedCollapse)

    return function () {
      if (!collapseId) {
        return
      }

      removeCollapse(collapseId)
    }
  }, [usedCollapse])

  return (
    <Collapse
      as={as}
      ref={ref}
      brCollapse={usedCollapse}
      bsJs={{ elementType: 'accordion-collapse', ...bsJs }}
      {...rest}
    />
  )
})
export default AccordionCollapse
