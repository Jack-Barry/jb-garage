import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import Button, { ButtonProps } from '../Button/Button'

export type DropdownToggleProps<T extends ElementType> = ButtonProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "button"
   */
  as?: T
  /** Toggle is part of a split button */
  brSplitToggle?: boolean
}

type DropdownToggleComponent = <Component extends ElementType = 'button'>(
  props: DropdownToggleProps<Component>
) => ReactNode | null

/**
 * [DropdownToggle]()
 */
const DropdownToggle: DropdownToggleComponent = forwardRef(function DropdownToggle<
  T extends ElementType = 'button'
>(props: DropdownToggleProps<T>, ref?: DropdownToggleProps<T>['ref']) {
  const { as = 'button' as ElementType, brSplitToggle, children, className, ...rest } = props

  return (
    <Button
      as={as}
      ref={ref}
      data-bs-toggle="dropdown"
      className={classNames(
        'dropdown-toggle',
        { 'dropdown-toggle-split': brSplitToggle },
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  )
})
export default DropdownToggle
