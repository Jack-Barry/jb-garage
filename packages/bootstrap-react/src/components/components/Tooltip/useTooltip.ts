import {
  Alignment,
  Boundary,
  Placement,
  Side,
  UseFloatingOptions,
  arrow,
  autoUpdate,
  detectOverflow,
  flip,
  offset as fuiOffset,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useTransitionStatus
} from '@floating-ui/react'
import { CSSProperties, useEffect, useState } from 'react'

export type UseTooltipOptions = {
  /**
   * @default true
   */
  animate?: boolean
  /**
   * @default 'clippingAncestors'
   */
  boundary?: Boundary
  /**
   * @default 0
   */
  delay?: number | { show: number; hide: number }
  /**
   * Offset to apply to the tooltip
   *
   * By default, this is automatically calculated based off of the arrow element
   */
  offset?: {
    /** Distance between tooltip and target element */
    distance: number
    /** Skidding between tooltip and target element */
    skidding: number
  }
  /**
   * @default 'top'
   */
  placement?: Placement
  /**
   * @default { hover: true; focus: true; click: false }
   */
  trigger?: { hover?: boolean; focus?: boolean; click?: boolean }
  /**
   * @default ['top', 'right', 'bottom', 'left']
   */
  fallbackPlacements?: Placement[]
  /**
   * Function that accepts the default tooltip config as an input, and returns
   *   a valid `UseFloatingOptions` config as output. The output will be passed
   *   in to `useFloating`
   */
  customFloatingConfig?: (
    defaultConfig: Pick<
      UseFloatingOptions,
      'open' | 'onOpenChange' | 'middleware' | 'placement' | 'whileElementsMounted'
    >
  ) => Partial<UseFloatingOptions>
}

const TRIGGER_DEFAULTS = { hover: true, focus: true, click: false }

/**
 * Provides tooltip-related functionality which closely aligns with Bootstrap's
 *   vanilla JS implementation of the `Tooltip` class.
 *
 * Key differences with the Bootstrap vanilla JS implementation:
 * - `allowList`, `container`, `customClass`, `html`, `sanitize`, `sanitizeFn`,
 *   `selector` `title`, and `template` options are not implemented, since they
 *   are mostly superceded by simply providing the target and content of the tooltip
 *   as React components
 * - `popperConfig` is not used, because the underlying lib supporting floating
 *   elements in this project is [Floating UI](). However, you may augment the
 *   default config used for `useFloating` with the `customFloatingConfig` option
 */
export function useTooltip<Arrow extends HTMLElement>(options: UseTooltipOptions = {}) {
  const {
    animate = true,
    boundary = 'clippingAncestors',
    delay = 0,
    fallbackPlacements = ['top', 'right', 'bottom', 'left'],
    offset,
    placement = 'top',
    trigger, // gets defaults from TRIGGER_DEFAULTS
    customFloatingConfig = (config) => config
  } = options
  const delayConfig =
    typeof delay === 'number'
      ? { open: delay, close: delay }
      : { open: delay.show, close: delay.hide }
  const triggerConfig = { ...TRIGGER_DEFAULTS, ...trigger }

  const [isOpen, setIsOpen] = useState(false)
  const [arrowRef, setArrowRef] = useState<Arrow | null>(null)
  const [currentSide, setCurrentSide] = useState<Side>()

  const offsetKey =
    currentSide === 'left' || currentSide === 'right' ? 'offsetWidth' : 'offsetHeight'
  const calculatedArrowOffset = arrowRef ? arrowRef[offsetKey] : 0
  const defaultFloatingConfig: Partial<UseFloatingOptions> = {
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      fuiOffset({
        mainAxis: offset?.distance || calculatedArrowOffset || 0,
        crossAxis: offset?.skidding || 0
      }),
      flip({ fallbackPlacements }),
      arrow((state) => ({
        element: arrowRef,
        padding: state.rects.reference.width
      })),
      {
        name: 'detectOverflow',
        async fn(state) {
          detectOverflow(state, { boundary })
          return {}
        }
      }
    ],
    placement,
    whileElementsMounted: autoUpdate
  }
  const { refs, context, floatingStyles } = useFloating(customFloatingConfig(defaultFloatingConfig))

  const { isMounted, status } = useTransitionStatus(context)
  const hover = useHover(context, { enabled: triggerConfig.hover, delay: delayConfig })
  const focus = useFocus(context, { enabled: triggerConfig.focus })
  const click = useClick(context, { enabled: triggerConfig.click })
  const dismiss = useDismiss(context)

  const { getFloatingProps, getReferenceProps } = useInteractions([hover, focus, click, dismiss])

  const [side, alignment] = context.placement.split('-') as [Side, Alignment]
  useEffect(() => {
    setCurrentSide(side)
  }, [side])
  const yOffsetProp = alignment === 'end' ? 'bottom' : 'top'
  const xOffsetProp = alignment === 'end' ? 'right' : 'left'

  const arrowCtx = context.middlewareData.arrow
  const arrowX = arrowCtx?.x != null ? arrowCtx.x : ''
  const arrowY = arrowCtx?.y != null ? arrowCtx.y : ''

  const arrowStyles: CSSProperties = {
    position: 'absolute',
    [xOffsetProp]: arrowX,
    [yOffsetProp]: arrowY
  }

  return {
    tooltip: {
      placement: context.placement,
      shouldAnimate: animate,
      ref: refs.setFloating,
      getProps: getFloatingProps,
      styles: floatingStyles,
      isMounted,
      transitionStatus: status,
      arrow: {
        ref: setArrowRef,
        style: arrowStyles
      }
    },
    target: {
      ref: refs.setReference,
      getProps: getReferenceProps
    }
  }
}
