import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ProgressProps<
  T extends ElementType,
  W extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs: BsJsOptionsWithoutElementType<Breakpoints, 'progress'>
    /**
     * Type of HTML element to render
     *
     * @default "div"
     */
    as?: T
    /** Props to use for the progress bar element */
    brProgressBarProps?: BrElementProps<
      W,
      undefined,
      Breakpoints,
      {
        bsJs?: Omit<
          BsJsOptionsWithoutElementType<Breakpoints, 'progress-bar'>,
          'progressValue' | 'progressMin' | 'progressMax' | 'isStacked'
        >
      }
    >
  }
>

type ProgressWithRef = <
  Component extends ElementType = 'div',
  Wrapper extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: ProgressProps<Component, Wrapper, Breakpoints>
) => ReactNode

/**
 * [Progress]()
 */
const Progress: ProgressWithRef = forwardRef(function Progress<
  T extends ElementType = 'div',
  W extends ElementType = 'div',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: ProgressProps<T, W, Breakpoints>, ref?: ProgressProps<T, W, Breakpoints>['ref']) {
  const {
    as = 'div' as ElementType,
    children,
    bsJs,
    brProgressBarProps: brBarProps = {} as BrElementProps<W>,
    ...rest
  } = props
  const { as: barAs = 'div' as ElementType, bsJs: barBsJs, ...barRest } = brBarProps

  // const percentage = ((brProgressValue ?? 0) / (brProgressMax - brProgressMin)) * 100
  // const percentageString = `${percentage}%`

  return (
    <BrElement as={as} ref={ref} bsJs={{ elementType: 'progress', ...bsJs }} {...rest}>
      <BrElement
        as={barAs}
        bsJs={{
          elementType: 'progress-bar',
          ...(barBsJs as BsJsOptionsWithoutElementType<Breakpoints, 'progress-bar'>),
          progressValue: bsJs.progressValue,
          progressMin: bsJs.progressMin,
          progressMax: bsJs.progressMax,
          isStacked: bsJs.isStacked
        }}
        {...barRest}
      >
        {children}
      </BrElement>
    </BrElement>
  )
})
export default Progress
