import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import Input, { InputElementType, InputProps } from './Input'
import Label, { LabelProps } from './Label'

type FormControlProps<Wrapper extends ElementType, Input extends InputElementType> = {
  wrapperProps?: BrElementProps<Wrapper>
  inputProps?: InputProps<Input>
  labelProps?: LabelProps
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
  Input extends InputElementType = 'input'
>(props: FormControlProps<Wrapper, Input>) {
  const {
    wrapperProps = {} as BrElementProps<Wrapper>,
    inputProps = {} as InputProps<Input>,
    labelProps = {}
  } = props
  const { as, className: wrapperClassName, ...wrapperRest } = wrapperProps
  const { htmlFor = inputProps.id, ...labelPropsRest } = labelProps

  return (
    <BrElement as={as as ElementType} className={wrapperClassName} {...wrapperRest}>
      <Label htmlFor={htmlFor} {...labelPropsRest} />
      <Input {...inputProps} />
    </BrElement>
  )
}
