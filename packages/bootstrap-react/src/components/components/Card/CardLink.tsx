import { ElementType, ReactNode, forwardRef } from 'react'
import classNames from 'classnames'
import Button, { ButtonProps } from '../Button/Button'

export type CardLinkProps<T extends ElementType> = ButtonProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
}

type CardLinkWithRef = <Component extends ElementType = 'a'>(
  props: CardLinkProps<Component>
) => ReactNode

/** [Card](https://getbootstrap.com/docs/5.3/components/card/) */
const CardLink: CardLinkWithRef = forwardRef(function CardLink<T extends ElementType = 'a'>(
  props: CardLinkProps<T>,
  ref?: CardLinkProps<T>['ref']
) {
  const { as = 'a' as ElementType, children, className, ...rest } = props

  return (
    <Button as={as} ref={ref} className={classNames('card-link', className)} {...rest}>
      {children}
    </Button>
  )
})
export default CardLink
