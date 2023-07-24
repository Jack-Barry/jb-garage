import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ProgressProps<T extends ElementType, W extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Props to use for the progress bar element */
  brBarProps?: BrElementProps<W>
  /** Value for the progress bar */
  brProgressValue?: number
  /** Minimum value for the progress bar */
  brProgressMin?: number
  /** Maximum value for the progress bar */
  brProgressMax?: number
  /** Present progress bar as stacked */
  brProgressStacked?: boolean
  /** Apply striped style to progress bar */
  brStriped?: boolean
  /** Apply animation to progress bar */
  brAnimated?: boolean
}

/**
 * [Progress]()
 */
export default function Progress<T extends ElementType = 'div', W extends ElementType = 'div'>(
  props: ProgressProps<T, W>
) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    role = 'progressbar',
    style,
    brBarProps = {} as BrElementProps<W>,
    brProgressValue,
    brProgressMin = 0,
    brProgressMax = 100,
    brProgressStacked,
    brStriped,
    brAnimated,
    ...rest
  } = props
  const {
    as: barAs = 'div' as ElementType,
    className: barClassName,
    style: barStyle,
    ...barRest
  } = brBarProps

  const percentage = ((brProgressValue ?? 0) / (brProgressMax - brProgressMin)) * 100
  const percentageString = `${percentage}%`

  return (
    <BrElement
      as={as}
      className={classNames('progress', className)}
      role={role}
      style={{ width: brProgressStacked ? percentageString : undefined, ...style }}
      aria-valuenow={brProgressValue}
      aria-valuemin={brProgressMin}
      aria-valuemax={brProgressMax}
      {...rest}
    >
      <BrElement
        as={barAs}
        className={classNames(
          'progress-bar',
          { 'progress-bar-striped': brStriped, 'progress-bar-animated': brAnimated },
          barClassName
        )}
        style={{ width: brProgressStacked ? undefined : percentageString, ...barStyle }}
        {...barRest}
      >
        {children}
      </BrElement>
    </BrElement>
  )
}
