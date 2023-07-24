import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ProgressStackedProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/**
 * [Progress]()
 */
export default function ProgressStacked<T extends ElementType = 'div'>(
  props: ProgressStackedProps<T>
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('progress-stacked', className)} {...rest}>
      {children}
    </BrElement>
  )
}
