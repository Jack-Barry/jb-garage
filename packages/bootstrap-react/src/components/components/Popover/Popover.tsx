import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { usePopover } from './usePopover'

export type PopoverProps<T extends ElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'popover'>
    /** Controlled state can be provided by the return value of `usePopover` */
    brPopover: ReturnType<typeof usePopover>['floating']
  }
>

export type PopoverWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PopoverProps<Component, Breakpoints>
) => ReactNode

/**
 * [Popover]()
 */
const Popover: PopoverWithRef = forwardRef(function Popover<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PopoverProps<T, Breakpoints>, ref?: PopoverProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, brPopover, style, bsJs, children, ...rest } = props
  const {
    arrow,
    getProps,
    isMounted,
    placement,
    ref: popoverRef,
    shouldAnimate,
    styles,
    transitionStatus
  } = brPopover
  const usedRef = useMultiRef(ref, popoverRef)

  return (
    isMounted && (
      <BrElement
        as={as}
        {...getProps()}
        ref={usedRef}
        bsJs={{
          elementType: 'popover',
          fade: shouldAnimate,
          show: transitionStatus === 'open',
          ...bsJs
        }}
        style={{ ...styles, ...style }}
        // don't need this for Popper/Floating UI, but Bootstrap uses it for styling
        data-popper-placement={placement}
        {...rest}
      >
        {bsJs?.arrow && <div className="popover-arrow" {...arrow} />}
        <div className="popover-inner">{children}</div>
      </BrElement>
    )
  )
})
export default Popover
