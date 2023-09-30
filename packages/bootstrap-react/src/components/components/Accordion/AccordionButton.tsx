import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { AllBreakpointsOptions } from 'packages/bootstrap-js/src/_types'
import { ElementType, ReactNode, forwardRef } from 'react'

import Button, { ButtonProps } from '../Button/Button'

import { useParentAccordion } from './AccordionContext'

export type AccordionButtonProps<T extends ElementType> = Omit<ButtonProps<T>, 'bsJs'> & {
  bsJs?: BsJsConfig<'accordion-button'>
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
    brAccordionButtonCollapsed,
    bsJs,
    ...rest
  } = props
  const { getCollapseById, toggleById } = useParentAccordion()

  const collapseId = (props as ButtonProps<T>)['aria-controls']
  const defaultCollapse = getCollapseById(collapseId)
  const isCollapsed = brAccordionButtonCollapsed ?? !defaultCollapse?.collapse?.isOpen
  const onClick = (props as ButtonProps<T>)['onClick'] || toggleMatchingCollapse

  function toggleMatchingCollapse() {
    toggleById(collapseId)
  }

  const usedBsJs: BsJsConfig<'accordion-button'> = {
    ...bsJs,
    bsJsAll: {
      ...bsJs?.bsJsAll,
      accordionButton: {
        ...(bsJs?.bsJsAll as AllBreakpointsOptions<'accordion-button'>)?.accordionButton,
        collapsed: isCollapsed
      }
    }
  }

  return (
    <Button
      as={as}
      ref={ref}
      className={classNames('accordion-button', className)}
      onClick={onClick}
      aria-expanded={(props as ButtonProps<T>)['aria-expanded'] || !isCollapsed}
      bsJs={usedBsJs}
      {...rest}
    />
  )
})
export default AccordionButton
