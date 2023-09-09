import classNames from 'classnames'
import { ElementType, PropsWithChildren } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

import FormCheckInput, { FormCheckInputProps } from './FormCheckInput'
import FormCheckLabel, { FormCheckLabelProps } from './FormCheckLabel'

type FormCheckProps<T extends ElementType> = PropsWithChildren<{
  brFormCheckWrapperProps?: Omit<BrElementProps<T>, 'children'> & {
    /** Apply Bootstrap disabled styling */
    brFormCheckDisabled?: boolean
  }
  brFormCheckInputProps?: FormCheckInputProps
  brFormCheckLabelProps?: FormCheckLabelProps
}>

/**
 * [Form Check](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)
 *
 * - Combines the lower level `FormCheckInput` and `FormCheckLabel` components
 *   into a single component for convenience
 * - If an `inputProps.id` is provided, the `label` will automatically set the
 *   `htmlFor` prop to match. You can override `htmlFor` in the `label` if needed
 *   by explicitly providing `labelProps.htmlFor`
 */
export default function FormCheck<T extends ElementType = 'div'>(props: FormCheckProps<T>) {
  const {
    brFormCheckWrapperProps: wrapperProps = {} as Required<
      FormCheckProps<T>
    >['brFormCheckWrapperProps'],
    brFormCheckInputProps = {},
    brFormCheckLabelProps = {},
    children
  } = props
  const {
    as = 'div' as ElementType,
    className: wrapperClassName,
    brFormCheckDisabled,
    ...wrapperRest
  } = wrapperProps
  const { htmlFor = brFormCheckInputProps.id, ...labelPropsRest } = brFormCheckLabelProps

  return (
    <BrElement
      as={as}
      className={classNames('form-check', { disabled: brFormCheckDisabled }, wrapperClassName)}
      {...wrapperRest}
    >
      <FormCheckInput {...brFormCheckInputProps} />
      <FormCheckLabel htmlFor={htmlFor} {...labelPropsRest} />
      {children}
    </BrElement>
  )
}
