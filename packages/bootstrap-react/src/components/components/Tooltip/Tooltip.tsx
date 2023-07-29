import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'
import { useTooltip } from './useTooltip'
import { useMultiRef } from '../../utils/useMultiRef'

export type TooltipProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useTooltip` */
    brTooltip: ReturnType<typeof useTooltip>['floating']
    /**
     * @default true
     */
    brTooltipArrow?: boolean
  }
>

export type TooltipComponent = <Component extends ElementType = 'div'>(
  props: TooltipProps<Component>
) => ReactNode | null

/**
 * [Tooltip]()
 */
const Tooltip: TooltipComponent = forwardRef(function Tooltip<T extends ElementType>(
  props: TooltipProps<T>,
  ref?: TooltipProps<T>['ref']
) {
  const {
    as,
    brTooltip,
    brTooltipArrow = true,
    role = 'tooltip',
    className,
    style,
    children,
    ...rest
  } = props
  const {
    arrow,
    getProps,
    isMounted,
    placement,
    ref: tooltipRef,
    shouldAnimate,
    styles,
    transitionStatus
  } = brTooltip
  const usedRef = useMultiRef(ref, tooltipRef)

  return (
    isMounted && (
      <BrElement
        as={as as ElementType}
        {...getProps()}
        ref={usedRef}
        role={role}
        className={classNames(
          'tooltip',
          {
            fade: shouldAnimate,
            show: transitionStatus === 'open',
            'bs-tooltip-auto': brTooltipArrow
          },
          className
        )}
        style={{ ...styles, ...style }}
        // don't need this for Popper, but Bootstrap uses it for styling
        data-popper-placement={placement}
        {...rest}
      >
        {brTooltipArrow && <div className="tooltip-arrow" {...arrow} />}
        <div className="tooltip-inner">{children}</div>
      </BrElement>
    )
  )
})
export default Tooltip
