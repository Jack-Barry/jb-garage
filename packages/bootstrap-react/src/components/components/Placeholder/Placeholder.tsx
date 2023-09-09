import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type PlaceholderProps<T extends ElementType, U extends ElementType> = BrElementProps<
  T,
  {
    /**
     * Type of HTML element to render
     *
     * @default "span"
     */
    as?: T
    /** Type of animation to use */
    brPlaceholderAnimation?: 'glow' | 'wave'
    /** Props to pass to the wrapping element */
    brPlaceholderWrapperProps?: BrElementProps<U>
  }
>

type PlaceholderWithRef = <
  Component extends ElementType = 'span',
  Wrapper extends ElementType = 'p'
>(
  props: PlaceholderProps<Component, Wrapper>
) => ReactNode

/**
 * [Placeholder](https://getbootstrap.com/docs/5.3/components/placeholders/)
 *
 * - `as` defaults to `"span"`
 * - `wrapperProps.as` defaults to `"p"`
 */
const Placeholder: PlaceholderWithRef = forwardRef(function Placeholder<
  T extends ElementType = 'span',
  U extends ElementType = 'p'
>(props: PlaceholderProps<T, U>, ref?: PlaceholderProps<T, U>['ref']) {
  const {
    as = 'span' as ElementType,
    brPlaceholderWrapperProps,
    brPlaceholderAnimation,
    className,
    ...rest
  } = props
  const {
    as: wrapperAs = 'p' as ElementType,
    className: wrapperClassName,
    ...wrapperRest
  } = brPlaceholderWrapperProps || ({} as BrElementProps<U>)

  return (
    <BrElement
      as={wrapperAs}
      className={classNames(
        { [`placeholder-${brPlaceholderAnimation}`]: !!brPlaceholderAnimation },
        wrapperClassName
      )}
      {...wrapperRest}
    >
      <BrElement as={as} ref={ref} className={classNames('placeholder', className)} {...rest} />
    </BrElement>
  )
})
export default Placeholder
