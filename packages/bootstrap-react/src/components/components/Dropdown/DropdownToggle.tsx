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
  brDropdownToggleSplit?: boolean
}

type DropdownToggleWithRef = <Component extends ElementType = 'button'>(
  props: DropdownToggleProps<Component>
) => ReactNode

/**
 * [DropdownToggle]()
 */
const DropdownToggle: DropdownToggleWithRef = forwardRef(function DropdownToggle<
  T extends ElementType = 'button'
>(props: DropdownToggleProps<T>, ref?: DropdownToggleProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    brDropdownToggleSplit,
    children,
    className,
    ...rest
  } = props

  return (
    <Button
      as={as}
      ref={ref}
      data-bs-toggle="dropdown"
      className={classNames(
        'dropdown-toggle',
        { 'dropdown-toggle-split': brDropdownToggleSplit },
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  )
})
export default DropdownToggle
