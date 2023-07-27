import { ElementType, ReactNode, forwardRef, useEffect } from 'react'
import classNames from 'classnames'
import Collapse, { CollapseProps } from '../Collapse/Collapse'
import { useParentAccordion } from './AccordionContext'
import { useCollapse } from '../Collapse/useCollapse'

export type AccordionCollapseProps<T extends ElementType> = Partial<CollapseProps<T>> & {
  brDefaultOpen?: boolean
}

export type AccordionCollapseComponent = <Component extends ElementType = 'div'>(
  props: AccordionCollapseProps<Component>
) => ReactNode | null

/**
 * [Accordion]()
 */
const AccordionCollapse: AccordionCollapseComponent = forwardRef(function AccordionCollapse<
  T extends ElementType = 'div'
>(props: AccordionCollapseProps<T>, ref?: AccordionCollapseProps<T>['ref']) {
  const { as, className, brCollapse, brDefaultOpen, ...rest } = props
  const { updateCollapse, removeCollapse } = useParentAccordion()
  const collapseId = props['id']
  if (!collapseId) {
    console.warn(
      'AccordionCollapse should be invoked with an id to allow for updating/removing it in its parent accordion'
    )
  }
  const defaultCollapse = useCollapse({ defaultIsVisible: brDefaultOpen }, !!brCollapse)
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
      as={as as ElementType}
      ref={ref}
      brCollapse={usedCollapse}
      className={classNames('accordion-collapse', className)}
      {...rest}
    />
  )
})
export default AccordionCollapse
