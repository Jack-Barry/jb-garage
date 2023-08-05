import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type BrFeedbackType = 'valid' | 'invalid' | string
export type FeedbackProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of feedback being presented
   *
   * @default "invalid"
   */
  brFeedbackType?: BrFeedbackType
  /** Present feedback as a tooltip */
  brFeedbackTooltip?: boolean
}

type FeedbackComponent = <Component extends ElementType = 'div'>(
  props: FeedbackProps<Component>
) => ReactNode | null

const Feedback: FeedbackComponent = forwardRef(function Feedback<T extends ElementType = 'div'>(
  props: FeedbackProps<T>,
  ref?: FeedbackProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    className,
    children,
    brFeedbackType = 'invalid',
    brFeedbackTooltip,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        {
          [`${brFeedbackType}-feedback`]: !brFeedbackTooltip,
          [`${brFeedbackType}-tooltip`]: brFeedbackTooltip
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Feedback
