import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PopoverBodyProps<T extends ElementType> = BrElementProps<T>

type PopoverBodyWithRef = <Component extends ElementType = 'div'>(
  props: PopoverBodyProps<Component>
) => ReactNode

/**
 * Body element for a [Popover](https://getbootstrap.com/docs/5.3/components/popovers/)
 */
const PopoverBody: PopoverBodyWithRef = forwardRef(function PopoverBody<
  T extends ElementType = 'div'
>(props: PopoverBodyProps<T>, ref?: PopoverBodyProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props
  return <BrElement as={as} ref={ref} className={classNames('popover-body', className)} {...rest} />
})
export default PopoverBody
