import { ElementType } from 'react'
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

/** [Card Link](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardLink<T extends ElementType = 'a'>(props: CardLinkProps<T>) {
  const { as = 'a' as ElementType, children, className, ...rest } = props

  return (
    <Button as={as} className={classNames('card-link', className)} {...rest}>
      {children}
    </Button>
  )
}
