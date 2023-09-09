import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js/lib/bootstrap-utils/_types'
import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ContainerProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Breakpoint size to use */
  brContainerBreakpoint?: BootstrapDefaultBreakpoint
  /** Container is fluid */
  brContainerFluid?: boolean
}

type ContainerWithRef = <Component extends ElementType>(
  props: ContainerProps<Component>
) => ReactNode

/** [Container](https://getbootstrap.com/docs/5.3/layout/containers/) */
const Container: ContainerWithRef = forwardRef(function Container<T extends ElementType = 'div'>(
  props: ContainerProps<T>,
  ref?: ContainerProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    brContainerBreakpoint,
    brContainerFluid,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        {
          container: !brContainerBreakpoint && !brContainerFluid,
          [`container-${brContainerBreakpoint}`]: !!brContainerBreakpoint,
          'container-fluid': brContainerFluid
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Container
