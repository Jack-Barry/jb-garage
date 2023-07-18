import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import FormInput, { FormInputElementType, FormInputProps } from './FormInput'
import FormLabel, { FormLabelProps } from './FormLabel'

type FormControlProps<Wrapper extends ElementType, Input extends FormInputElementType> = {
  wrapperProps?: BrElementProps<Wrapper>
  inputProps?: FormInputProps<Input>
  labelProps?: FormLabelProps
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
export default function FormControl<
  Wrapper extends ElementType = 'div',
  Input extends FormInputElementType = 'input'
>(props: FormControlProps<Wrapper, Input>) {
  const {
    wrapperProps = {} as BrElementProps<Wrapper>,
    inputProps = {} as FormInputProps<Input>,
    labelProps = {}
  } = props
  const { as, className: wrapperClassName, ...wrapperRest } = wrapperProps
  const { htmlFor = inputProps.id, ...labelPropsRest } = labelProps

  return (
    <BrElement as={as as ElementType} className={wrapperClassName} {...wrapperRest}>
      <FormLabel htmlFor={htmlFor} {...labelPropsRest} />
      <FormInput {...inputProps} />
    </BrElement>
  )
}
