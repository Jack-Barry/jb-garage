import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type InputGroupProps<T extends ElementType> = BrElementProps<T> & {
  /** Present as a small input group */
  brInputGroupSm?: boolean
  /** Present as a large input group */
  brInputGroupLg?: boolean
  /** Apply Bootstrap has validation styling to input group */
  brInputGroupHasValidation?: boolean
}

type InputGroupWithRef = <Component extends ElementType = 'div'>(
  props: InputGroupProps<Component>
) => ReactNode

const InputGroup: InputGroupWithRef = forwardRef(function FormInput<T extends ElementType = 'div'>(
  props: InputGroupProps<T>,
  ref?: InputGroupProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    className,
    children,
    brInputGroupSm,
    brInputGroupLg,
    brInputGroupHasValidation,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        'input-group',
        {
          'input-group-sm': brInputGroupSm,
          'input-group-lg': brInputGroupLg,
          'has-validation': brInputGroupHasValidation
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
