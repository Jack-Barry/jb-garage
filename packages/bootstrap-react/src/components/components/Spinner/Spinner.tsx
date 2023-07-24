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
  brVariant?: string
  /** Present as growing spinner */
  brGrowingSpinner?: boolean
  /** Present smaller spinner that can easily be used inside other components */
  brSm?: boolean
  /** Apply size as height and width properties to spinner */
  brSize?: string
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
    brVariant,
    brGrowingSpinner,
    brSm,
    brSize,
    style,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          'spinner-border': !brGrowingSpinner,
          'spinner-border-sm': !brGrowingSpinner && brSm,
          'spinner-grow': brGrowingSpinner,
          'spinner-grow-sm': brGrowingSpinner && brSm,
          [`text-${brVariant}`]: !!brVariant
        },
        className
      )}
      role={role}
      style={{ width: brSize, height: brSize, ...style }}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
