import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

type ContainerBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string

export type ContainerProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Breakpoint size to use */
  breakpoint?: ContainerBreakpoint
  /** Container is fluid */
  fluid?: boolean
}

/** [Container](https://getbootstrap.com/docs/5.3/layout/containers/) */
export default function Container<T extends ElementType = 'div'>(props: ContainerProps<T>) {
  const { as = 'div' as ElementType, children, className, breakpoint, fluid, ...rest } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          container: !breakpoint && !fluid,
          [`container-${breakpoint}`]: !!breakpoint,
          'container-fluid': fluid
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
