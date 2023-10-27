import { BootstrapDefaultBreakpoint, BsJsOptionsWithoutElementType } from '@jb-garage/bootstrap-js'
import { ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type InputElementType = 'input' | 'textarea'
export type InputProps<T extends InputElementType, Breakpoints extends string> = BrElementProps<
  T,
  undefined,
  Breakpoints,
  {
    bsJs?: BsJsOptionsWithoutElementType<Breakpoints, 'form-control'>
    /**
     * Type of `input`
     *
     * @default "text"
     */
    type?:
      | 'button'
      | 'checkbox'
      | 'color'
      | 'date'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week'
  }
>
// & {
//   /** Present as a large form control */
//   brInputLg?: boolean
//   /** Present as a small form control */
//   brInputSm?: boolean
//   /** Input is plaintext */
//   brInputPlainText?: boolean
//   /**
//    * Should render Bootstrap color input styles
//    *
//    * If `type` is `"color"`, this defaults to `true`, but you may set it to `false`
//    *   explicitly if needed
//    */
//   brInputColorStyles?: boolean
//   /**
//    * Should render Bootstrap range input styles
//    *
//    * If `type` is `"range"`, this defaults to `true`, but you may set it to `false`
//    *   explicitly if needed
//    */
//   brInputRangeStyles?: boolean
//   /** Form input value is invalid */
//   brInputInvalid?: boolean
//   /** Form input value is valid */
//   brInputValid?: boolean
// }

type InputWithRef = <
  Component extends InputElementType = 'input',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(
  props: InputProps<Component, Breakpoints>
) => ReactNode

const Input: InputWithRef = forwardRef(function FormInput<
  T extends InputElementType = 'input',
  Breakpoints extends string = BootstrapDefaultBreakpoint
>(props: InputProps<T, Breakpoints>, ref?: InputProps<T, Breakpoints>['ref']) {
  const { as = 'input' as InputElementType, type = 'text', children, bsJs, ...rest } = props

  return (
    <BrElement
      as={as}
      type={type}
      ref={ref}
      bsJs={{ elementType: 'form-control', ...bsJs }}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Input
