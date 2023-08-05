import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ModalDialogProps<T extends ElementType> = BrElementProps<
  T,
  {
    /**
     */
    brModalDialogScrollable?: boolean
    /**
     */
    brModalDialogCentered?: boolean
    /**
     */
    brModalDialogSize?: 'sm' | 'lg' | 'xl' | string
    /**
     */
    brModalDialogFullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string
  }
>

export type ModalDialogWithRef = <Component extends ElementType = 'div'>(
  props: ModalDialogProps<Component>
) => ReactNode

/**
 * [Modal]()
 */
const ModalDialog: ModalDialogWithRef = forwardRef(function ModalDialog<
  T extends ElementType = 'div'
>(props: ModalDialogProps<T>, ref?: ModalDialogProps<T>['ref']) {
  const {
    as = 'div' as ElementType,
    brModalDialogScrollable,
    brModalDialogCentered,
    brModalDialogSize,
    brModalDialogFullscreen,
    className,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        'modal-dialog',
        {
          'modal-dialog-scrollable': brModalDialogScrollable,
          'modal-dialog-centered': brModalDialogCentered,
          [`modal-${brModalDialogSize}`]: !!brModalDialogSize,
          'modal-fullscreen': brModalDialogFullscreen === true,
          [`modal-fullscreen-${brModalDialogFullscreen}-down`]:
            !!brModalDialogFullscreen && brModalDialogFullscreen !== true
        },
        className
      )}
      {...rest}
    />
  )
})
export default ModalDialog
