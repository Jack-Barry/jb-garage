import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren, Ref, RefAttributes, forwardRef } from 'react'

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>
>

/**
 * [Button](https://getbootstrap.com/docs/5.3/components/buttons/)
 *
 * - Accepts all props that can be passed to a `button` element
 * - `type` defaults to `"button"`
 */
const Button = forwardRef((props: ButtonProps, ref?: Ref<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      ref={ref}
      type={props.type ?? 'button'}
      className={classNames('btn', props.className)}
    />
  )
})
export default Button
