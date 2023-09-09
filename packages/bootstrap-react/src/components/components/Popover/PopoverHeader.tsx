import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PopoverHeaderProps<T extends ElementType> = BrElementProps<T>

type PopoverHeaderWithRef = <Component extends ElementType = 'div'>(
  props: PopoverHeaderProps<Component>
) => ReactNode

/**
 * Header element for a [Popover](https://getbootstrap.com/docs/5.3/components/popovers/)
 */
const PopoverHeader: PopoverHeaderWithRef = forwardRef(function PopoverHeader<
  T extends ElementType
>(props: PopoverHeaderProps<T>, ref?: PopoverHeaderProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props
  return (
    <BrElement as={as} ref={ref} className={classNames('popover-header', className)} {...rest} />
  )
})
export default PopoverHeader
