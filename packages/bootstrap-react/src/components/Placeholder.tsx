import classNames from 'classnames'
import { ElementProps } from '../types'

export type PlaceholderProps = ElementProps<HTMLSpanElement> & { animation?: 'glow' | 'wave' }

/**
 * [Placeholder](https://getbootstrap.com/docs/5.3/components/placeholders/)
 *
 * - Accepts all props that can be passed to a `span` element
 */

export default function Placeholder(props: PlaceholderProps) {
  return (
    <p className={classNames({ [`placeholder-${props.animation}`]: !!props.animation })}>
      <span {...props} className={classNames('placeholder', props.className)} />
    </p>
  )
}
