import classNames from 'classnames'
import { ElementProps } from '../types'

export type BadgeProps = ElementProps<HTMLSpanElement>

/**
 * [Badge](https://getbootstrap.com/docs/5.3/components/badge/)
 *
 * - Accepts all props that can be passed to a `span` element
 * - If no `bg-` class is provided, defaults to `bg-secondary`
 */
export default function Badge(props: BadgeProps) {
  const { children, className } = props

  return (
    <span
      {...props}
      className={classNames('badge', className, { 'bg-secondary': !className?.includes('bg-') })}
    >
      {children}
    </span>
  )
}
