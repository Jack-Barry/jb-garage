import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type DropdownItemProps<T extends ElementType, U extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
  /** Item is currently active */
  isActive?: boolean
  /** Item is currently disabled */
  isDisabled?: boolean
  /**
   * Item is interactive
   *
   * @default true
   */
  isInteractive?: boolean
  /**
   * Type of HTML element to wrap the item in
   *
   * To remove the wrapping element entirely, pass in `null`
   *
   * @default "li"
   */
  wrapperAs?: U | null
  /** Props to pass along to the wrapper element */
  wrapperProps?: BrElementProps<U>
}

/**
 * [Dropdown]()
 */
export default function DropdownItem<T extends ElementType = 'a', U extends ElementType = 'li'>(
  props: DropdownItemProps<T, U>
) {
  const {
    as = 'a' as ElementType,
    children,
    className,
    isActive,
    isDisabled,
    isInteractive = true,
    wrapperAs = 'li' as ElementType,
    wrapperProps,
    ...rest
  } = props

  const content = (
    <BrElement
      as={as}
      className={classNames(
        {
          'dropdown-item': isInteractive,
          'dropdown-item-text': !isInteractive,
          active: isActive,
          disabled: isDisabled
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )

  if (wrapperAs === null) {
    return content
  }

  return (
    <BrElement as={wrapperAs} {...wrapperProps}>
      {content}
    </BrElement>
  )
}
