import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type DropdownItemProps<T extends ElementType> = BrElementProps<'hr'> & {
  /**
   * Type of HTML element to wrap the item in
   *
   * To remove the wrapping element entirely, pass in `null`
   *
   * @default "li"
   */
  brDropdownItemWrapperAs?: T | null
  /** Props to pass along to the wrapper element */
  brDropdownItemWrapperProps?: BrElementProps<T>
}

/**
 * [Dropdown]()
 */
export default function DropdownDivider<T extends ElementType = 'li'>(props: DropdownItemProps<T>) {
  const {
    className,
    brDropdownItemWrapperAs = 'li' as ElementType,
    brDropdownItemWrapperProps,
    ...rest
  } = props

  const content = <hr className={classNames('dropdown-divider', className)} {...rest} />

  if (brDropdownItemWrapperAs === null) {
    return content
  }

  return (
    <BrElement as={brDropdownItemWrapperAs} {...brDropdownItemWrapperProps}>
      {content}
    </BrElement>
  )
}
