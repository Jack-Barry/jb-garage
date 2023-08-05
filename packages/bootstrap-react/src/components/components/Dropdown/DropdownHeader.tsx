import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type DropdownHeaderProps<
  T extends ElementType,
  U extends ElementType
> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h6"
   */
  as?: T
  /**
   * Type of HTML element to wrap the item in
   *
   * To remove the wrapping element entirely, pass in `null`
   *
   * @default "li"
   */
  brDropdownHeaderWrapperAs?: U | null
  /** Props to pass along to the wrapper element */
  brDropdownHeaderWrapperProps?: BrElementProps<U>
}

type DropdownHeaderWithRef = <
  Component extends ElementType = 'h6',
  Wrapper extends ElementType = 'li'
>(
  props: DropdownHeaderProps<Component, Wrapper>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownHeader: DropdownHeaderWithRef = forwardRef(function DropdownHeader<
  T extends ElementType = 'h6',
  U extends ElementType = 'li'
>(props: DropdownHeaderProps<T, U>, ref?: DropdownHeaderProps<T, U>['ref']) {
  const {
    as = 'h6' as ElementType,
    children,
    className,
    brDropdownHeaderWrapperAs = 'li' as ElementType,
    brDropdownHeaderWrapperProps,
    ...rest
  } = props

  const content = (
    <BrElement as={as} ref={ref} className={classNames('dropdown-header', className)} {...rest}>
      {children}
    </BrElement>
  )

  if (brDropdownHeaderWrapperAs === null) {
    return content
  }

  return (
    <BrElement as={brDropdownHeaderWrapperAs} {...brDropdownHeaderWrapperProps}>
      {content}
    </BrElement>
  )
})
export default DropdownHeader
