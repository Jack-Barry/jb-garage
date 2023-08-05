import { EventListenersManager } from '@jb-garage/utils-browser'
import { noOp } from '@jb-garage/utils-generic'
import { Offcanvas } from 'bootstrap'
import { useEffect, useState } from 'react'

enum OffcanvasEvents {
  hide = 'hide.bs.offcanvas',
  hidden = 'hidden.bs.offcanvas',
  hidePrevented = 'hidePrevented.bs.offcanvas',
  show = 'show.bs.offcanvas',
  shown = 'shown.bs.offcanvas'
}

type OffcanvasEventHandler = (event: unknown) => void

type UseOffcanvasOptions = {
  /** Options to use for the Bootstrap `Offcanvas` instance */
  bootstrapOffcanvas?: Partial<Offcanvas.Options>
  /** Callback to invoke when the `hide.bs.offcanvas` event fires */
  onHide?: OffcanvasEventHandler
  /** Callback to invoke when the `hidden.bs.offcanvas` event fires */
  onHidden?: OffcanvasEventHandler
  /** Callback to invoke when the `hidePrevented.bs.offcanvas` event fires */
  onHidePrevented?: OffcanvasEventHandler
  /** Callback to invoke when the `show.bs.offcanvas` event fires */
  onShow?: OffcanvasEventHandler
  /** Callback to invoke when the `shown.bs.offcanvas` event fires */
  onShown?: OffcanvasEventHandler
}

/**
 * Provides offcanvas-related functionality using Bootstrap's `Offcanvas` class
 *   under the hood, with offcanvas state tracked inside React
 */
export function useOffcanvas<T extends HTMLElement = HTMLElement>(
  options: UseOffcanvasOptions = {}
) {
  const {
    bootstrapOffcanvas,
    onShow = noOp,
    onShown = noOp,
    onHide = noOp,
    onHidden = noOp,
    onHidePrevented = noOp
  } = options
  const [isOpen, setIsOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [offcanvas, setOffcanvas] = useState<Offcanvas | null>(null)
  const [offcanvasNode, setOffcanvasNode] = useState<T | null>(null)

  useEffect(
    function initBootstrapOffcanvas() {
      if (offcanvas && !offcanvasNode) {
        setOffcanvas(null)
      }

      if (offcanvasNode) {
        setOffcanvas(Offcanvas.getOrCreateInstance(offcanvasNode, bootstrapOffcanvas))
      }
    },
    [offcanvas, offcanvasNode]
  )

  useEffect(
    function setUpEventListeners() {
      if (!offcanvasNode) {
        return
      }

      const listeners = new EventListenersManager(offcanvasNode, [
        { type: OffcanvasEvents.show, listener: handleShow as EventListener },
        { type: OffcanvasEvents.shown, listener: handleShown as EventListener },
        { type: OffcanvasEvents.hide, listener: handleHide as EventListener },
        { type: OffcanvasEvents.hidden, listener: handleHidden as EventListener },
        { type: OffcanvasEvents.hidePrevented, listener: handleHidePrevented as EventListener }
      ])

      listeners.setup()

      return function tearDownEventListeners() {
        listeners.teardown()
      }
    },
    [!!offcanvasNode]
  )

  useEffect(
    function syncBootstrapOffcanvasWithReactState() {
      const shouldToggle = !!offcanvas && !isTransitioning
      if (!shouldToggle) {
        return
      }

      isOpen ? offcanvas.show() : offcanvas.hide()
    },
    [offcanvas, isTransitioning, isOpen]
  )

  useEffect(() => {
    return function cleanUpOffcanvas() {
      offcanvas?.hide()
    }
  }, [!!offcanvas])

  function handleShow(event: unknown) {
    beginTransition()
    onShow(event)
  }

  function handleShown(event: unknown) {
    show()
    endTransition()
    onShown(event)
  }

  function handleHide(event: unknown) {
    beginTransition()
    onHide(event)
  }

  function handleHidden(event: unknown) {
    hide()
    endTransition()
    onHidden(event)
  }

  function handleHidePrevented(event: unknown) {
    endTransition()
    onHidePrevented(event)
  }

  function beginTransition() {
    setIsTransitioning(true)
  }

  function endTransition() {
    setIsTransitioning(false)
  }

  function hide() {
    setIsOpen(false)
  }

  function show() {
    setIsOpen(true)
  }

  function toggle() {
    setIsOpen((prev) => !prev)
  }

  return {
    /** Offcanvas is currently open */
    isOpen,
    /** Offcanvas is currently transitioning between shown/hidden states */
    isTransitioning,
    /** Callback ref that can be used for the `Offcanvas` component */
    ref: setOffcanvasNode,
    /** Manually hide the offcanvas */
    hide,
    /** Manually show the offcanvas */
    show,
    /** Toggle offcanvas visibility */
    toggle
  }
}
