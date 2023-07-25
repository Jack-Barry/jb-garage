import { BrElementProps } from '../../utils/BrElement'
import { ReactNode, forwardRef } from 'react'
import Button from '../Button/Button'

export type CloseButtonProps = BrElementProps<'button'> & {
  /** @default "Close" */
  'aria-label'?: string
  /** Value to use for `data-bs-dismiss` */
  brDismiss?: string
}

export type CloseButtonComponent = (props: CloseButtonProps) => ReactNode

/** [CloseButton]() */
const CloseButton: CloseButtonComponent = forwardRef(function CloseButton(
  props: CloseButtonProps,
  ref?: CloseButtonProps['ref']
) {
  const { children, 'aria-label': ariaLabel = 'Close', brDismiss, ...rest } = props

  return (
    <Button
      ref={ref}
      brVariant="close"
      aria-label={ariaLabel}
      data-bs-dismiss={brDismiss}
      {...rest}
    >
      {children}
    </Button>
  )
})
export default CloseButton
