import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'

import Button, { ButtonElementType, ButtonProps } from '../Button/Button'

export type DropdownToggleProps<T extends ButtonElementType> = ButtonProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "button"
   */
  as?: T
  /** Toggle is part of a split button */
  brSplitToggle?: boolean
}

type DropdownToggleComponent = <Component extends ButtonElementType = 'button'>(
  props: DropdownToggleProps<Component>
) => ReactNode | null

/**
 * [DropdownToggle]()
 */
const DropdownToggle: DropdownToggleComponent = forwardRef(function DropdownToggle<
  T extends ButtonElementType = 'button'
>(props: DropdownToggleProps<T>, ref?: DropdownToggleProps<T>['ref']) {
  const { as = 'button' as ButtonElementType, brSplitToggle, children, className, ...rest } = props

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
