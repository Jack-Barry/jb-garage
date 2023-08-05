import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

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

/**
 * [Placeholder](https://getbootstrap.com/docs/5.3/components/placeholders/)
 *
 * - `as` defaults to `"span"`
 * - `wrapperProps.as` defaults to `"p"`
 */
export default function Placeholder<T extends ElementType = 'span', U extends ElementType = 'p'>(
  props: PlaceholderProps<T, U>
) {
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
      <BrElement as={as} className={classNames('placeholder', className)} {...rest} />
    </BrElement>
  )
}
