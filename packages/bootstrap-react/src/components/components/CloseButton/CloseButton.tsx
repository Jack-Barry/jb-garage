import { AllBreakpointsOptions } from 'packages/bootstrap-js/src/_types'
import { ReactNode, forwardRef } from 'react'

import { BrElementProps } from '../../utils/BrElement'
import Button from '../Button/Button'

export type CloseButtonProps = BrElementProps<'button'> & {
  /** @default "Close" */
  'aria-label'?: string
}

export type CloseButtonWithRef = (props: CloseButtonProps) => ReactNode

/** [CloseButton]() */
const CloseButton: CloseButtonWithRef = forwardRef(function CloseButton(
  props: CloseButtonProps,
  ref?: CloseButtonProps['ref']
) {
  const { children, 'aria-label': ariaLabel = 'Close', bsJs, ...rest } = props

  return (
    <Button
      ref={ref}
      bsJs={{
        ...bsJs,
        bsJsAll: {
          ...bsJs?.bsJsAll,
          button: { color: 'close', ...(bsJs?.bsJsAll as AllBreakpointsOptions<'button'>)?.button }
        }
      }}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </Button>
  )
})
export default CloseButton
