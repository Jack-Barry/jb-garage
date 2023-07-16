import {
  UseFloatingOptions,
  arrow,
  autoPlacement,
  autoUpdate,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStatus
} from '@floating-ui/react'
import { CSSProperties, useState } from 'react'

import { POPOVER_ARROW_OFFSET } from './constants'

export interface UsePopoverOptions {
  /**
   * Options to pass along to floating UI
   *
   * If you need access to `isOpen` state outside of the component, you can provide
   *   `open` and `onOpenChange` values here
   */
  floatingOptions?: Partial<Omit<UseFloatingOptions, 'middleware'>> & {
    /**
     * Callback accepts a `ref` for the arrow element and returns an array of
     *   middlewares
     */
    middleware?: (arrow: HTMLDivElement | null) => UseFloatingOptions['middleware']
  }
  /** Clicking away from the reference element should dismiss the popover */
  isDismissible?: boolean
}

/**
 * Provides a thin wrapper around `useFloating` to make it more convenient for
 *   popover elements that are toggled by click events
 *
 * Any values passed as part of `floatingOptions` will override the hook's defaults,
 *   so that it gives you full control if needed anywhere
 */
export function usePopover(options: UsePopoverOptions = {}) {
  const { floatingOptions = {}, isDismissible = false } = options
  const { middleware, ...floatingOptionsRest } = floatingOptions

  const [isOpen, setIsOpen] = useState(false)
  const [reference, setReference] = useState<HTMLElement | null>(null)
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  // middleware
  const defaultMiddleware: UseFloatingOptions['middleware'] = [offset(POPOVER_ARROW_OFFSET)]
  if (!floatingOptions?.placement) {
    defaultMiddleware.push(autoPlacement())
  }
  defaultMiddleware.push(arrow({ element: arrowRef }))

  const { refs, floatingStyles, context, placement } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: middleware ? middleware(arrowRef) : defaultMiddleware,
    whileElementsMounted: autoUpdate,
    ...floatingOptionsRest,
    elements: {
      reference,
      ...floatingOptions?.elements
    }
  })

  // interactions
  const focus = useDismiss(context, { enabled: isDismissible })
  const click = useClick(context, { toggle: !isDismissible })
  const { getReferenceProps, getFloatingProps } = useInteractions([click, focus])

  // arrow styling
  const { x: arrowX, y: arrowY } = context.middlewareData.arrow || {}
  const arrowStyle: CSSProperties = {
    top: arrowY ? `${arrowY}px` : undefined,
    left: arrowX ? `${arrowX}px` : undefined
  }

  // transitions
  const { isMounted, status } = useTransitionStatus(context)

  // utility functions
  function closePopover() {
    setIsOpen(false)
  }

  return {
    reference,
    floatingProps: {
      ref: refs.setFloating,
      style: floatingStyles,
      ...getFloatingProps({ onClick: isDismissible ? closePopover : undefined })
    },
    referenceProps: {
      ref: setReference,
      ...getReferenceProps()
    },
    isMounted,
    status,
    placement,
    arrowRef: setArrowRef,
    arrowStyle
  }
}
