import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type DropdownDividerProps<T extends ElementType> = BrElementProps<'hr'> & {
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

type DropdownDividierWithRef = <Component extends ElementType = 'li'>(
  props: DropdownDividerProps<Component>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownDivider: DropdownDividierWithRef = forwardRef(function DropdownDivier<
  T extends ElementType = 'li'
>(props: DropdownDividerProps<T>, ref?: DropdownDividerProps<T>['ref']) {
  const {
    className,
    brDropdownItemWrapperAs = 'li' as ElementType,
    brDropdownItemWrapperProps,
    ...rest
  } = props

  const content = <hr ref={ref} className={classNames('dropdown-divider', className)} {...rest} />

  if (brDropdownItemWrapperAs === null) {
    return content
  }

  return (
    <BrElement as={brDropdownItemWrapperAs} {...brDropdownItemWrapperProps}>
      {content}
    </BrElement>
  )
})
export default DropdownDivider
