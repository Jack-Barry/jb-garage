import { BootstrapDefaultBreakpoint, BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useAlert } from './useAlert'

export type AlertProps<T extends ElementType, Breakpoints extends string> = Omit<
  BrElementProps<T, 'alert', Breakpoints>,
  'bsJs'
> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** State to manage closing the alert */
  brAlert?: ReturnType<typeof useAlert>
  bsJs?: Omit<BsJsOptions<Breakpoints, 'alert'>, 'elementType'>
}

export type AlertWithRef = <
  Component extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: AlertProps<Component, Breakpoints>
) => ReactNode | null

/** [Alert]() */
const Alert: AlertWithRef = forwardRef(function Alert<
  T extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: AlertProps<T, Breakpoints>, ref?: AlertProps<T, Breakpoints>['ref']) {
  const { as = 'div' as ElementType, children, brAlert, bsJs, ...rest } = props

  const defaultAlert = useAlert({}, !!brAlert)
  const { isAnimating, isDismissed, alertRef } = brAlert || defaultAlert
  const usedRef = useMultiRef(ref, defaultAlert.alertRef, alertRef)

  return (
    <BrElement
      as={as}
      ref={usedRef}
      bsJs={{ elementType: 'alert', show: !isAnimating && !isDismissed, ...bsJs }}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Alert
