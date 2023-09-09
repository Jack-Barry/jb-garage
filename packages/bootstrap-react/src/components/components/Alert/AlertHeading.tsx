import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type AlertHeadingProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h4"
   */
  as?: T
}

type AlertHeadingWithRef = <Component extends ElementType = 'h4'>(
  props: AlertHeadingProps<Component>
) => ReactNode

/** [AlertHeading]() */
const AlertHeading: AlertHeadingWithRef = forwardRef(function AlertHeading<
  T extends ElementType = 'h4'
>(props: AlertHeadingProps<T>, ref?: AlertHeadingProps<T>['ref']) {
  const { as = 'h4' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('alert-heading', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default AlertHeading
