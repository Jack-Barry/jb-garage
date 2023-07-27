import { ElementType } from 'react'
import classNames from 'classnames'
import Button, { ButtonProps } from '../Button/Button'
import { useParentAccordion } from './AccordionContext'

export type AccordionButton<T extends ElementType> = ButtonProps<T> & {
  /**
   * Button should have `btn` class
   *
   * @default false
   */
  brBtn?: boolean
  /** Button is for accordion section that is currently collapsed */
  brCollapsed?: boolean
}

/**
 * [Accordion]()
 */
export default function AccordionButton<T extends ElementType = 'button'>(
  props: AccordionButton<T>
) {
  const { as = 'button' as ElementType, className, brBtn = false, brCollapsed, ...rest } = props
  const { getCollapseById, toggleById } = useParentAccordion()

  const collapseId = props['aria-controls']
  const defaultCollapse = getCollapseById(collapseId)
  const isCollapsed = brCollapsed ?? !defaultCollapse?.collapse?.isOpen
  const onClick = props['onClick'] || toggleMatchingCollapse

  function toggleMatchingCollapse() {
    toggleById(collapseId)
  }

  return (
    <Button
      as={as}
      className={classNames(
        'accordion-button',
        {
          collapsed: isCollapsed
        },
        className
      )}
      brBtn={brBtn}
      onClick={onClick}
      aria-expanded={props['aria-expanded'] || !isCollapsed}
      {...rest}
    />
  )
}
