import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalDialogProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     */
    brScrollable?: boolean
    /**
     */
    brCentered?: boolean
    /**
     */
    brSize?: 'sm' | 'lg' | 'xl' | string
    /**
     */
    brFullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string
  }
>

export type ModalDialogComponent = <Component extends ElementType = 'div'>(
  props: ModalDialogProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const ModalDialog: ModalDialogComponent = forwardRef(function ModalDialog<
  T extends ElementType = 'div'
>(props: ModalDialogProps<T>, ref?: ModalDialogProps<T>['ref']) {
  const { as, brScrollable, brCentered, brSize, brFullscreen, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames(
        'modal-dialog',
        {
          'modal-dialog-scrollable': brScrollable,
          'modal-dialog-centered': brCentered,
          [`modal-${brSize}`]: !!brSize,
          'modal-fullscreen': brFullscreen === true,
          [`modal-fullscreen-${brFullscreen}-down`]: !!brFullscreen && brFullscreen !== true
        },
        className
      )}
      {...rest}
    />
  )
})
export default ModalDialog
