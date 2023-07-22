import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type AlertLinkProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
}

/** [AlertLink]() */
export default function AlertLink<T extends ElementType = 'a'>(props: AlertLinkProps<T>) {
  const { as = 'a' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('alert-link', className)} {...rest}>
      {children}
    </BrElement>
  )
}
