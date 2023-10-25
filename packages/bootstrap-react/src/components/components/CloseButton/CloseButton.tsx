import { BootstrapDefaultBreakpoint, BsJsOptions } from '@jb-garage/bootstrap-js-v2'
import { ReactNode, forwardRef } from 'react'

import { BrElementProps } from '../../utils/BrElement'
import Button from '../Button/Button'

export type CloseButtonProps<Breakpoints extends string> = BrElementProps<
  'button',
  undefined,
  Breakpoints,
  {
    /** @default "Close" */
    'aria-label'?: string
    bsJs?: Omit<BsJsOptions<Breakpoints, 'btn'>, 'variant' | 'elementType'>
  }
>

export type CloseButtonWithRef<Breakpoints extends string = BootstrapDefaultBreakpoint> = (
  props: CloseButtonProps<Breakpoints>
) => ReactNode

/** [CloseButton]() */
const CloseButton: CloseButtonWithRef = forwardRef(function CloseButton<
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: CloseButtonProps<Breakpoints>, ref?: CloseButtonProps<Breakpoints>['ref']) {
  const { children, 'aria-label': ariaLabel = 'Close', bsJs, ...rest } = props

  return (
    <Button ref={ref} bsJs={{ variant: 'close', ...bsJs }} aria-label={ariaLabel} {...rest}>
      {children}
    </Button>
  )
})
export default CloseButton
