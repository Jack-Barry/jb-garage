import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type InputGroupProps<T extends ElementType> = BrElementProps<T> & {
  /** Present as a small input group */
  brSm?: boolean
  /** Present as a large input group */
  brLg?: boolean
  /** Apply Bootstrap has validation styling to input group */
  brHasValidation?: boolean
}

type InputGroupComponent = <Component extends ElementType = 'div'>(
  props: InputGroupProps<Component>
) => ReactNode | null

const InputGroup: InputGroupComponent = forwardRef(function FormInput<
  T extends ElementType = 'div'
>(props: InputGroupProps<T>, ref?: InputGroupProps<T>['ref']) {
  const {
    as = 'div' as ElementType,
    className,
    children,
    brSm,
    brLg,
    brHasValidation,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        'input-group',
        {
          'input-group-sm': brSm,
          'input-group-lg': brLg,
          'has-validation': brHasValidation
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default InputGroup
