import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type FormGroupProps<T extends ElementType> = BrElementProps<T> & {
  /** Form has floating labels */
  brFormGroupFloatingLabels?: boolean
  /** Apply Bootstrap is invalid styling to form group */
  brFormGroupIsInvalid?: boolean
}

type FormGroupComponent = <Component extends ElementType = 'div'>(
  props: FormGroupProps<Component>
) => ReactNode | null

const FormGroup: FormGroupComponent = forwardRef(function FormGroup<T extends ElementType = 'div'>(
  props: FormGroupProps<T>,
  ref?: FormGroupProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    className,
    children,
    brFormGroupFloatingLabels,
    brFormGroupIsInvalid,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        {
          'form-floating': brFormGroupFloatingLabels,
          'is-invalid': brFormGroupIsInvalid
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormGroup
