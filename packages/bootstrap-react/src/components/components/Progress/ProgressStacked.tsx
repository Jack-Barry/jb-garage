import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ProgressStackedProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type ProgressStackedWithRef = <Component extends ElementType = 'div'>(
  props: ProgressStackedProps<Component>
) => ReactNode
/**
 * [Progress]()
 */
const ProgressStacked: ProgressStackedWithRef = forwardRef(function ProgressStacked<
  T extends ElementType = 'div'
>(props: ProgressStackedProps<T>, ref?: ProgressStackedProps<T>['ref']) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('progress-stacked', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default ProgressStacked
