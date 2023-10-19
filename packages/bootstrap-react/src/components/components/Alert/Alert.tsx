import { BsJsConfig } from '@jb-garage/bootstrap-js'
import classNames from 'classnames'
import { AllBreakpointsOptions } from 'packages/bootstrap-js/src/_types'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useMultiRef } from '../../utils/useMultiRef'

import { useAlert } from './useAlert'

export type AlertProps<T extends ElementType> = Omit<BrElementProps<T>, 'bsJs'> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** State to manage closing the alert */
  brAlert?: ReturnType<typeof useAlert>
  bsJs?: BsJsConfig<'alert'>
}

export type AlertWithRef = <Component extends ElementType = 'div'>(
  props: AlertProps<Component>
) => ReactNode | null

/** [Alert]() */
const Alert: AlertWithRef = forwardRef(function Alert<T extends ElementType = 'div'>(
  props: AlertProps<T>,
  ref?: AlertProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    role = 'alert',
    brAlert,
    bsJs,
    ...rest
  } = props

  const defaultAlert = useAlert({}, !!brAlert)
  const { isAnimating, isDismissed, alertRef } = brAlert || defaultAlert
  const usedRef = useMultiRef(ref, defaultAlert.alertRef, alertRef)

  return (
    <BrElement
      as={as}
      ref={usedRef}
      bsJs={bsJs}
      className={classNames(
        'alert',
        {
          show:
            (bsJs?.bsJsAll as AllBreakpointsOptions<'alert'>)?.alert?.show ||
            (!isAnimating && !isDismissed)
        },
        className
      )}
      role={role}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Alert
