import classNames from 'classnames'
import { BrBreakpoint, BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ContainerProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Breakpoint size to use */
  brContainerBreakpoint?: BrBreakpoint
  /** Container is fluid */
  brContainerFluid?: boolean
}

/** [Container](https://getbootstrap.com/docs/5.3/layout/containers/) */
export default function Container<T extends ElementType = 'div'>(props: ContainerProps<T>) {
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
}
