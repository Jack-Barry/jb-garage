import classNames from 'classnames'
import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import FormCheckInput, { FormCheckInputProps } from './FormCheckInput'
import FormCheckLabel, { FormCheckLabelProps } from './FormCheckLabel'

type FormCheckProps<T extends ElementType> = {
  wrapperProps?: BrElementProps<T>
  inputProps?: FormCheckInputProps
  labelProps?: FormCheckLabelProps
}

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
  const { wrapperProps = {} as BrElementProps<T>, inputProps = {}, labelProps = {} } = props
  const { as, className: wrapperClassName, ...wrapperRest } = wrapperProps
  const { htmlFor = inputProps.id, ...labelPropsRest } = labelProps

  return (
    <BrElement
      as={as as ElementType}
      className={classNames('form-check', wrapperClassName)}
      {...wrapperRest}
    >
      <FormCheckInput {...inputProps} />
      <FormCheckLabel htmlFor={htmlFor} {...labelPropsRest} />
    </BrElement>
  )
}
