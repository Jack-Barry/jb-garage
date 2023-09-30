import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef, useEffect } from 'react'

import Collapse, { CollapseProps } from '../Collapse/Collapse'
import { useCollapse } from '../Collapse/useCollapse'

import { useParentAccordion } from './AccordionContext'

export type AccordionCollapseProps<T extends ElementType> = Partial<CollapseProps<T>> & {
  brAccordionCollapseDefaultOpen?: boolean
}

export type AccordionCollapseWithRef = <Component extends ElementType = 'div'>(
  props: AccordionCollapseProps<Component>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionCollapse: AccordionCollapseWithRef = forwardRef(function AccordionCollapse<
  T extends ElementType = 'div'
>(props: AccordionCollapseProps<T>, ref?: AccordionCollapseProps<T>['ref']) {
  const {
    as = 'div' as ElementType,
    className,
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
      className={classNames('accordion-collapse', className)}
      {...rest}
    />
  )
})
export default AccordionCollapse
