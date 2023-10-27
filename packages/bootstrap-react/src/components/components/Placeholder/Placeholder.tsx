import {
  BootstrapDefaultBreakpoint,
  BsJsOptionsWithoutElementType
} from '@jb-garage/bootstrap-js-v2'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PlaceholderProps<
  T extends ElementType,
  U extends ElementType,
  Breakpoints extends string
> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'placeholder'>
    /**
     * Type of HTML element to render
     *
     * @default "span"
     */
    as?: T
    /** Type of animation to use */
    brPlaceholderAnimation?: 'glow' | 'wave'
    /** Props to pass to the wrapping element */
    brPlaceholderWrapperProps?: BrElementProps<
      U,
      undefined,
      Breakpoints,
      { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'placeholder-animation'> }
    >
  }
>

type PlaceholderWithRef = <
  Component extends ElementType = 'span',
  Wrapper extends ElementType = 'p',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: PlaceholderProps<Component, Wrapper, Breakpoints>
) => ReactNode

/**
 * [Placeholder](https://getbootstrap.com/docs/5.3/components/placeholders/)
 *
 * - `as` defaults to `"span"`
 * - `wrapperProps.as` defaults to `"p"`
 */
const Placeholder: PlaceholderWithRef = forwardRef(function Placeholder<
  T extends ElementType = 'span',
  U extends ElementType = 'p',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: PlaceholderProps<T, U, Breakpoints>, ref?: PlaceholderProps<T, U, Breakpoints>['ref']) {
  const { as = 'span' as ElementType, brPlaceholderWrapperProps, bsJs, ...rest } = props
  const { as: wrapperAs = 'p' as ElementType, ...wrapperRest } =
    brPlaceholderWrapperProps ||
    ({} as BrElementProps<
      U,
      undefined,
      Breakpoints,
      { bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'placeholder-animation'> }
    >)

  return (
    <BrElement as={wrapperAs} {...wrapperRest}>
      <BrElement as={as} ref={ref} bsJs={{ elementType: 'placeholder', ...bsJs }} {...rest} />
    </BrElement>
  )
})
export default Placeholder
