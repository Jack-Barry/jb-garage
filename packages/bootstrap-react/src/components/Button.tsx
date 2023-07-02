import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

/**
 * [Button](https://getbootstrap.com/docs/5.3/components/buttons/)
 *
 * - Accepts all props that can be passed to a `button` element
 * - `type` defaults to `"button"`
 */
export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      type={props.type ?? 'button'}
      className={classNames('btn', props.className)}
    />
  )
}
