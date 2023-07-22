import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'
import { useAlert } from './useAlert'
import { useMultiRef } from '../../utils/useMultiRef'

export type AlertProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** State to manage closing the alert */
  brAlert?: ReturnType<typeof useAlert>
  /** Alert is dismissible */
  brDismissible?: boolean
}

export type AlertComponent = <Component extends ElementType = 'div'>(
  props: AlertProps<Component>
) => ReactNode | null

/** [Alert]() */
const Alert: AlertComponent = forwardRef(function Alert<T extends ElementType = 'div'>(
  props: AlertProps<T>,
  ref?: AlertProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    role = 'alert',
    brAlert,
    brDismissible,
    ...rest
  } = props

  const { isAnimating, isDismissed, alertRef } = brAlert || {}
  const usedRef = useMultiRef(ref, alertRef)

  return (
    <BrElement
      as={as}
      ref={usedRef}
      className={classNames(
        'alert',
        { 'alert-dismissible': brDismissible, show: !isAnimating && !isDismissed },
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
