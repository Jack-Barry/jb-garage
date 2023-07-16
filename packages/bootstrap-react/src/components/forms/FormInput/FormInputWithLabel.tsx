import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import FormInput, { FormInputProps } from './FormInput'
import FormInputLabel, { FormInputLabelProps } from './FormInputLabel'

type FormInputWithLabelProps<T extends ElementType> = {
  wrapperProps?: BrElementProps<T>
  inputProps?: FormInputProps
  labelProps?: FormInputLabelProps
}

/**
 * []()
 *
 * - Combines the lower level `FormInput` and `FormInputLabel` components
 *   into a single component for convenience
 * - If an `inputProps.id` is provided, the `label` will automatically set the
 *   `htmlFor` prop to match. You can override `htmlFor` in the `label` if needed
 *   by explicitly providing `labelProps.htmlFor`
 */
export default function FormInputWithLabel<T extends ElementType = 'div'>(
  props: FormInputWithLabelProps<T>
) {
  const { wrapperProps = {} as BrElementProps<T>, inputProps = {}, labelProps = {} } = props
  const { as, className: wrapperClassName, ...wrapperRest } = wrapperProps
  const { htmlFor = inputProps.id, ...labelPropsRest } = labelProps

  return (
    <BrElement as={as as ElementType} className={wrapperClassName} {...wrapperRest}>
      <FormInputLabel htmlFor={htmlFor} {...labelPropsRest} />
      <FormInput {...inputProps} />
    </BrElement>
  )
}
