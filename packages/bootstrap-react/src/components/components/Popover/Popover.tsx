import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { usePopover } from './usePopover'

export type PopoverProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `usePopover` */
    brPopover: ReturnType<typeof usePopover>['floating']
    /**
     * @default true
     */
    brPopoverArrow?: boolean
  }
>

export type PopoverWithRef = <Component extends ElementType = 'div'>(
  props: PopoverProps<Component>
) => ReactNode

/**
 * [Popover]()
 */
const Popover: PopoverWithRef = forwardRef(function Popover<T extends ElementType = 'div'>(
  props: PopoverProps<T>,
  ref?: PopoverProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    brPopover,
    brPopoverArrow = true,
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
        role={role}
        className={classNames(
          'popover',
          {
            fade: shouldAnimate,
            show: transitionStatus === 'open',
            'bs-popover-auto': brPopoverArrow
          },
          className
        )}
        style={{ ...styles, ...style }}
        // don't need this for Popper/Floating UI, but Bootstrap uses it for styling
        data-popper-placement={placement}
        {...rest}
      >
        {brPopoverArrow && <div className="popover-arrow" {...arrow} />}
        <div className="popover-inner">{children}</div>
      </BrElement>
    )
  )
})
export default Popover
