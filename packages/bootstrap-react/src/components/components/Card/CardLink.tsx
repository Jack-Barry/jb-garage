import classNames from 'classnames'
import Button, { ButtonElementType, ButtonProps } from '../Button/Button'

export type CardLinkProps<T extends ButtonElementType> = ButtonProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
}

/** [Card Link](https://getbootstrap.com/docs/5.3/components/card/) */
export default function CardLink<T extends ButtonElementType = 'a'>(props: CardLinkProps<T>) {
  const { as = 'a' as ButtonElementType, children, className, ...rest } = props

  return (
    <Button as={as} className={classNames('card-link', className)} {...rest}>
      {children}
    </Button>
  )
}
