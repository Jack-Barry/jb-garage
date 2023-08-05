import { ElementType, ReactNode, forwardRef } from 'react'
import classNames from 'classnames'
import Button, { ButtonProps } from '../Button/Button'
import { useParentAccordion } from './AccordionContext'

export type AccordionButtonProps<T extends ElementType> = ButtonProps<T> & {
  /**
   * Button should have `btn` class
   *
   * @default false
   */
  brAccordionButtonBtn?: boolean
  /** Button is for accordion section that is currently collapsed */
  brAccordionButtonCollapsed?: boolean
}

type AccordionButtonWithRef = <Component extends ElementType = 'button'>(
  props: AccordionButtonProps<Component>
) => ReactNode

/**
 * [Accordion]()
 */
const AccordionButton: AccordionButtonWithRef = forwardRef(function AccordionButton<
  T extends ElementType = 'button'
>(props: AccordionButtonProps<T>, ref?: AccordionButtonProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    className,
    brAccordionButtonBtn = false,
    brAccordionButtonCollapsed,
    ...rest
  } = props
  const { getCollapseById, toggleById } = useParentAccordion()

  const collapseId = props['aria-controls']
  const defaultCollapse = getCollapseById(collapseId)
  const isCollapsed = brAccordionButtonCollapsed ?? !defaultCollapse?.collapse?.isOpen
  const onClick = props['onClick'] || toggleMatchingCollapse

  function toggleMatchingCollapse() {
    toggleById(collapseId)
  }

  return (
    <Button
      as={as}
      ref={ref}
      className={classNames(
        'accordion-button',
        {
          collapsed: isCollapsed
        },
        className
      )}
      brButtonBtn={brAccordionButtonBtn}
      onClick={onClick}
      aria-expanded={props['aria-expanded'] || !isCollapsed}
      {...rest}
    />
  )
})
export default AccordionButton
