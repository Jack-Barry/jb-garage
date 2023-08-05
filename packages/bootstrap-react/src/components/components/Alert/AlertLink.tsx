import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type AlertLinkProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
}

type AlertLinkWithRef = <Component extends ElementType = 'a'>(
  props: AlertLinkProps<Component>
) => ReactNode

/** [AlertLink]() */
const AlertLink: AlertLinkWithRef = forwardRef(function AlertLink<T extends ElementType = 'a'>(
  props: AlertLinkProps<T>,
  ref?: AlertLinkProps<T>['ref']
) {
  const { as = 'a' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('alert-link', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default AlertLink
