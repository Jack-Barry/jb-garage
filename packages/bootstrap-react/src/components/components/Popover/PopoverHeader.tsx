import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type PopoverHeaderProps<T extends ElementType> = BrElementProps<T>

/**
 * Header element for a [Popover](https://getbootstrap.com/docs/5.3/components/popovers/)
 */
export default function PopoverHeader<T extends ElementType>(props: PopoverHeaderProps<T>) {
  const { as, className, ...rest } = props
  return (
    <BrElement
      as={as as ElementType}
      className={classNames('popover-header', className)}
      {...rest}
    />
  )
}
