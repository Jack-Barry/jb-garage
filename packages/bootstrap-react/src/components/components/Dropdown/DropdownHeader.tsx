import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

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
  wrapperAs?: U | null
  /** Props to pass along to the wrapper element */
  wrapperProps?: BrElementProps<U>
}

/**
 * [Dropdown]()
 */
export default function DropdownHeader<T extends ElementType = 'h6', U extends ElementType = 'li'>(
  props: DropdownHeaderProps<T, U>
) {
  const {
    as = 'h6' as ElementType,
    children,
    className,
    wrapperAs = 'li' as ElementType,
    wrapperProps,
    ...rest
  } = props

  const content = (
    <BrElement as={as} className={classNames('dropdown-header', className)} {...rest}>
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
