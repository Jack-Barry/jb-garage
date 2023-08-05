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
  brButtonGroupSm?: boolean
  /** Present as a large button group */
  brButtonGroupLg?: boolean
  /** Present as a vertical button group */
  brButtonGroupVertical?: boolean
}

/** [ButtonGroup]() */
export default function ButtonGroup<T extends ElementType = 'div'>(props: ButtonGroupProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    role = 'group',
    brButtonGroupSm,
    brButtonGroupLg,
    brButtonGroupVertical,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          'btn-group': !brButtonGroupVertical,
          'btn-group-vertical': brButtonGroupVertical,
          'btn-group-sm': brButtonGroupSm,
          'btn-group-lg': brButtonGroupLg
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
