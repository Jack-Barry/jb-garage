import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type DropdownItemProps<T extends ElementType, U extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
  /** Item is currently active */
  brDropdownItemActive?: boolean
  /** Item is currently disabled */
  brDropdownItemDisabled?: boolean
  /**
   * Item is interactive
   *
   * @default true
   */
  brDropdownItemInteractive?: boolean
  /**
   * Type of HTML element to wrap the item in
   *
   * To remove the wrapping element entirely, pass in `null`
   *
   * @default "li"
   */
  brDropdownItemWrapperAs?: U | null
  /** Props to pass along to the wrapper element */
  brDropdownItemWrapperProps?: BrElementProps<U>
}

type DropdownItemWithRef = <
  Component extends ElementType = 'a',
  Wrapper extends ElementType = 'li'
>(
  props: DropdownItemProps<Component, Wrapper>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownItem: DropdownItemWithRef = forwardRef(function DropdownItem<
  T extends ElementType = 'a',
  U extends ElementType = 'li'
>(props: DropdownItemProps<T, U>, ref?: DropdownItemProps<T, U>['ref']) {
  const {
    as = 'a' as ElementType,
    children,
    className,
    brDropdownItemActive,
    brDropdownItemDisabled,
    brDropdownItemInteractive = true,
    brDropdownItemWrapperAs = 'li' as ElementType,
    brDropdownItemWrapperProps,
    ...rest
  } = props

  const content = (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        {
          'dropdown-item': brDropdownItemInteractive,
          'dropdown-item-text': !brDropdownItemInteractive,
          active: brDropdownItemActive,
          disabled: brDropdownItemDisabled
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )

  if (brDropdownItemWrapperAs === null) {
    return content
  }

  return (
    <BrElement as={brDropdownItemWrapperAs} {...brDropdownItemWrapperProps}>
      {content}
    </BrElement>
  )
})
export default DropdownItem
