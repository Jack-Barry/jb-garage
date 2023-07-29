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
import { CSSProperties, HTMLProps, useEffect, useState } from 'react'

export type UseFloatingElementOptions = {
  /**
   * CSS transition classes should be applied to the floating element
   *
   * @default true
   */
  animate?: boolean
  /**
   * Overflow constraint boundary of the floating element. Learn more in the
   *   [Floating UI Docs](https://floating-ui.com/docs/detectoverflow)
   *
   * @default 'clippingAncestors'
   */
  boundary?: Boundary
  /**
   * Delay in milliseconds to show/hide the floating element
   *
   * - If a number is provided it will apply for both show and hide
   *
   * @default 0
   */
  delay?: number | { show: number; hide: number }
  /**
   * Offset to apply to the floating element
   *
   * By default, this is automatically calculated based off of the arrow element
   */
  offset?: {
    /** Distance between floating element and target element */
    distance: number
    /** Skidding between floating element and target element */
    skidding: number
  }
  /**
   * Where to place the floating element in relation to its target
   *
   * @default 'top'
   */
  placement?: Placement
  /**
   * Types of interactions that will toggle the visibility of the floating element
   *
   * @default { hover: true; focus: true; click: false }
   */
  trigger?: { hover?: boolean; focus?: boolean; click?: boolean }
  /**
   * Where to place floating element if it doesn't fit where intended. Learn more
   *   in [Floating UI Docs](https://floating-ui.com/docs/flip#fallbackplacements)
   *
   * @default ['top', 'right', 'bottom', 'left']
   */
  fallbackPlacements?: Placement[]
  /**
   * Function that accepts the default floating element config as an input, and
   *   returns a valid `UseFloatingOptions` config as output. The output will be
   *   passed in to `useFloating`
   */
  customFloatingConfig?: (
    defaultConfig: Pick<
      UseFloatingOptions,
      'open' | 'onOpenChange' | 'middleware' | 'placement' | 'whileElementsMounted'
    >
  ) => Partial<UseFloatingOptions>
  /**
   * The floating element is dismissed when clicking outside of the floating element
   *
   * This only applies when `trigger.click` is `true`
   *
   * @default true
   */
  dismissible?: boolean
}

export const FLOATING_TRIGGER_DEFAULTS = { hover: true, focus: true, click: false }

/**
 * Provides floating element related functionality which closely aligns with Bootstrap's
 *   vanilla JS implementation of the classes for floating elements, such as `Tooltip`
 *   and `Popover`.
 *
 * Key differences with the Bootstrap vanilla JS implementations:
 * - `allowList`, `container`, `customClass`, `html`, `sanitize`, `sanitizeFn`,
 *   `selector` `title`, and `template` options are not implemented, since they
 *   are mostly superceded by simply providing the target and content of the floating
 *   element as React components
 * - `popperConfig` is not used, because the underlying lib supporting floating
 *   elements in this project is [Floating UI](https://floating-ui.com/). However,
 *   you may augment the default config used for `useFloating` with the `customFloatingConfig`
 *   option
 */
export function useFloatingElement<Arrow extends HTMLElement>(
  options: UseFloatingElementOptions = {}
) {
  const {
    animate = true,
    boundary = 'clippingAncestors',
    delay = 0,
    fallbackPlacements = ['top', 'right', 'bottom', 'left'],
    offset,
    placement = 'top',
    trigger, // gets defaults from TRIGGER_DEFAULTS
    customFloatingConfig = (config) => config,
    dismissible
  } = options
  const delayConfig =
    typeof delay === 'number'
      ? { open: delay, close: delay }
      : { open: delay.show, close: delay.hide }
  const triggerConfig = { ...FLOATING_TRIGGER_DEFAULTS, ...trigger }

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
  const click = useClick(context, { enabled: triggerConfig.click, toggle: !dismissible })
  const dismiss = useDismiss(context, { enabled: !triggerConfig.click || dismissible })

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
    floating: {
      placement: context.placement,
      shouldAnimate: animate,
      ref: refs.setFloating,
      getProps: (custom: HTMLProps<HTMLElement> = {}) => ({
        ...getFloatingProps({
          onClick: (event) => {
            if (dismissible) {
              setIsOpen(false)
            }
            custom.onClick && custom.onClick(event)
          },
          ...custom
        })
      }),
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
