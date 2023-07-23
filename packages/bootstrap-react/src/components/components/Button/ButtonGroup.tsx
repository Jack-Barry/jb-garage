import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ButtonGroupProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Present as a small button group */
  brSm?: boolean
  /** Present as a large button group */
  brLg?: boolean
  /** Present as a vertical button group */
  brVertical?: boolean
}

/** [ButtonGroup]() */
export default function ButtonGroup<T extends ElementType = 'div'>(props: ButtonGroupProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    role = 'group',
    brSm,
    brLg,
    brVertical,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          'btn-group': !brVertical,
          'btn-group-vertical': brVertical,
          'btn-group-sm': brSm,
          'btn-group-lg': brLg
        },
        className
      )}
      role={role}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
