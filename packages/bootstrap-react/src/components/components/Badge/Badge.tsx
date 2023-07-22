import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type BadgeProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "span"
   */
  as?: T
}

/**
 * [Badge](https://getbootstrap.com/docs/5.3/components/badge/)
 *
 * - If no `bg-` class is provided, defaults to `bg-secondary`
 */
export default function Badge<T extends ElementType>(props: BadgeProps<T>) {
  const { as = 'span' as ElementType, children, className, ...rest } = props

  return (
    <BrElement
      as={as}
      className={classNames('badge', className, {
        'bg-secondary': !className?.includes('bg-')
      })}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
