import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type AlertHeadingProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "h4"
   */
  as?: T
}

/** [AlertHeading]() */
export default function AlertHeading<T extends ElementType = 'h4'>(props: AlertHeadingProps<T>) {
  const { as = 'h4' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('alert-heading', className)} {...rest}>
      {children}
    </BrElement>
  )
}
