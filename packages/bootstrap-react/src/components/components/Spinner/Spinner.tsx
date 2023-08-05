import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type SpinnerProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Color variant to use for the spinner */
  brSpinnerColor?: string
  /** Present as growing spinner */
  brSpinnerGrowing?: boolean
  /** Present smaller spinner that can easily be used inside other components */
  brSpinnerSm?: boolean
  /** Apply size as height and width properties to spinner */
  brSpinnerSize?: string
}

/**
 * [Spinner]()
 */
export default function Spinner<T extends ElementType = 'div'>(props: SpinnerProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    role = 'status',
    brSpinnerColor,
    brSpinnerGrowing,
    brSpinnerSm,
    brSpinnerSize,
    style,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          'spinner-border': !brSpinnerGrowing,
          'spinner-border-sm': !brSpinnerGrowing && brSpinnerSm,
          'spinner-grow': brSpinnerGrowing,
          'spinner-grow-sm': brSpinnerGrowing && brSpinnerSm,
          [`text-${brSpinnerColor}`]: !!brSpinnerColor
        },
        className
      )}
      role={role}
      style={{ width: brSpinnerSize, height: brSpinnerSize, ...style }}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
