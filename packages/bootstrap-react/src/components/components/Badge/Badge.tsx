import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type BadgeProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "span"
   */
  as?: T
}

type BadgeWithRef = <Component extends ElementType = 'span'>(
  props: BadgeProps<Component>
) => ReactNode

/**
 * [Badge](https://getbootstrap.com/docs/5.3/components/badge/)
 *
 * - If no `bg-` class is provided, defaults to `bg-secondary`
 */
const Badge: BadgeWithRef = forwardRef(function Badge<T extends ElementType>(
  props: BadgeProps<T>,
  ref?: BadgeProps<T>['ref']
) {
  const { as = 'span' as ElementType, children, className, brUtilsBackground, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      brUtilsBackground={brUtilsBackground || className.includes('bg-') ? undefined : 'secondary'}
      className={classNames('badge', className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Badge
