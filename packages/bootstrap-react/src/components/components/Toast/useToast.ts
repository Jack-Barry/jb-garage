import { EventListenersManager } from '@jb-garage/utils-browser'
import { noOp } from '@jb-garage/utils-generic'
import { Toast } from 'bootstrap'
import { useEffect, useState } from 'react'

enum ToastEvents {
  hide = 'hide.bs.toast',
  hidden = 'hidden.bs.toast',
  show = 'show.bs.toast',
  shown = 'shown.bs.toast'
}

type ToastEventHandler = (event: Event) => void | Promise<void>
type UseToastOptions = {
  bootstrapToast?: Partial<Toast.Options>
  onHide?: ToastEventHandler
  onHidden?: ToastEventHandler
  onShow?: ToastEventHandler
  onShown?: ToastEventHandler
}

export function useToast<T extends HTMLElement = HTMLElement>(options: UseToastOptions = {}) {
  const { bootstrapToast, onHide = noOp, onHidden = noOp, onShow = noOp, onShown = noOp } = options
  const [toast, setToast] = useState<Toast | null>(null)
  const [toastNode, setToastNode] = useState<T | null>(null)
  const [isShowing, setIsShowing] = useState(
    typeof bootstrapToast?.autohide === 'boolean' ? !bootstrapToast.autohide : false
  )
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(function handleMount() {
    return function handleUnmount() {
      // no longer tracking its state, it should be removed
      toast?.dispose()
    }
  }, [])

  useEffect(
    function initBootstrapToast() {
      if (toast && !toastNode) {
        setToast(null)
      }

      if (toastNode) {
        setToast(Toast.getOrCreateInstance(toastNode, bootstrapToast))
      }
    },
    [toast, toastNode]
  )

  useEffect(
    function setUpEventListeners() {
      if (!toastNode) {
        return
      }

      const listeners = new EventListenersManager(toastNode, [
        { type: ToastEvents.hide, listener: handleHide },
        { type: ToastEvents.hidden, listener: handleHidden },
        { type: ToastEvents.show, listener: handleShow },
        { type: ToastEvents.shown, listener: handleShown }
      ])

      return function tearDownEventListeners() {
        listeners.teardown()
      }
    },
    [!!toastNode]
  )

  useEffect(
    function syncBootstrapToastWithReactState() {
      const shouldToggle = !!toast && !isTransitioning
      if (!shouldToggle) {
        return
      }

      isShowing ? toast.show() : toast.hide()
    },
    [toast, isShowing, isTransitioning]
  )

  useEffect(() => {
    return function cleanUpToast() {
      toast?.hide()
    }
  }, [!!toast])

  function handleHide(event: Event) {
    beginTransition()
    onHide(event)
  }

  function handleHidden(event: Event) {
    hide()
    endTransition()
    onHidden(event)
  }

  function handleShow(event: Event) {
    beginTransition()
    onShow(event)
  }

  function handleShown(event: Event) {
    show()
    endTransition()
    onShown(event)
  }

  function beginTransition() {
    setIsTransitioning(true)
  }

  function endTransition() {
    setIsTransitioning(false)
  }

  function hide() {
    setIsShowing(false)
  }

  function show() {
    setIsShowing(true)
  }

  return {
    /** Callback ref that can be used for the `Toast` component */
    ref: setToastNode,
    /** Toast is currently being shown */
    isShowing,
    /** Toast is currently transitioning between shown/hidden states */
    isTransitioning,
    /** Manually hide the toast */
    hide,
    /** Manually show the toast */
    show
  }
}
