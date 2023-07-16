import { ElementType } from 'react'

import { usePopover } from './usePopover'
import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PopoverProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
    /** Controlled state, can be return value from `usePopover` */
    popover: ReturnType<typeof usePopover>
    /**
     * Enable fade transition when opening/closing
     *
     * @default true
     */
    doesFade?: boolean
    /**
     * Include an arrow element for the popover
     *
     * @default true
     */
    hasArrow?: boolean
  }
>

/**
 * Provides an element that can be used as a [Popover](https://getbootstrap.com/docs/5.3/components/popovers/)
 *
 * - Defaults to a `div`
 * - Accepts all props that can be passed to the `as` element
 * - Note that if `style` is provided, it will be combined with the values from
 *    `popover.floatingProps.style`
 */
export default function Popover<T extends ElementType>(props: PopoverProps<T>) {
  const {
    as,
    popover,
    doesFade = true,
    hasArrow = true,
    className,
    style,
    children,
    ...rest
  } = props
  const { isMounted, status, floatingProps, placement, arrowRef, arrowStyle } = popover

  return isMounted ? (
    <BrElement
      as={as as ElementType}
      {...floatingProps}
      className={classNames(
        'popover',
        {
          fade: doesFade,
          show: doesFade && status === 'open',
          'bs-popover-auto': hasArrow
        },
        className
      )}
      style={{ ...floatingProps.style, ...style }}
      data-popper-placement={placement}
      {...rest}
    >
      {hasArrow && (
        <div ref={arrowRef} className="popover-arrow position-absolute" style={arrowStyle} />
      )}
      {children}
    </BrElement>
  ) : null
}
