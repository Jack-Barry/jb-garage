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

export type ModalDialogComponent = <Component extends ElementType = 'div'>(
  props: ModalDialogProps<Component>
) => ReactNode | null

/**
 * [Modal]()
 */
const ModalDialog: ModalDialogComponent = forwardRef(function ModalDialog<
  T extends ElementType = 'div'
>(props: ModalDialogProps<T>, ref?: ModalDialogProps<T>['ref']) {
  const {
    as,
    brModalDialogScrollable,
    brModalDialogCentered,
    brModalDialogSize,
    brModalDialogFullscreen,
    className,
    ...rest
  } = props

  return (
    <BrElement
      as={as as ElementType}
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
