import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useTooltip } from './useTooltip'

export type TooltipProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'tooltip'>
    /** Controlled state can be provided by the return value of `useTooltip` */
    brTooltip: ReturnType<typeof useTooltip>['floating']
  }
>

export type TooltipWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: TooltipProps<Component, Breakpoints>
) => ReactNode

/**
 * [Tooltip]()
 */
const Tooltip: TooltipWithRef = forwardRef(function Tooltip<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: TooltipProps<T, Breakpoints>, ref?: TooltipProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, brTooltip, bsJs, style, children, ...rest } = props
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
        as={as}
        {...getProps()}
        ref={usedRef}
        bsJs={{
          elementType: 'tooltip',
          fade: shouldAnimate,
          show: transitionStatus === 'open',
          ...bsJs
        }}
        style={{ ...styles, ...style }}
        // don't need this for Popper, but Bootstrap uses it for styling
        data-popper-placement={placement}
        {...rest}
      >
        {bsJs?.arrow && <div className="tooltip-arrow" {...arrow} />}
        <div className="tooltip-inner">{children}</div>
      </BrElement>
    )
  )
})
export default Tooltip
