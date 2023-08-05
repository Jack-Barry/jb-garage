import { EventListenersManager } from '@jb-garage/utils-browser'
import { noOp } from '@jb-garage/utils-generic'
import { Modal } from 'bootstrap'
import { useEffect, useState } from 'react'

enum ModalEvents {
  hide = 'hide.bs.modal',
  hidden = 'hidden.bs.modal',
  hidePrevented = 'hidePrevented.bs.modal',
  show = 'show.bs.modal',
  shown = 'shown.bs.modal'
}

type ModalEventHandler = (event: Modal.Event) => void

type UseModalOptions = {
  /** Options to use for the Bootstrap `Modal` instance */
  bootstrapModal?: Partial<Modal.Options>
  /** Callback to invoke when the `hide.bs.modal` event fires */
  onHide?: ModalEventHandler
  /** Callback to invoke when the `hidden.bs.modal` event fires */
  onHidden?: ModalEventHandler
  /** Callback to invoke when the `hidePrevented.bs.modal` event fires */
  onHidePrevented?: ModalEventHandler
  /** Callback to invoke when the `show.bs.modal` event fires */
  onShow?: ModalEventHandler
  /** Callback to invoke when the `shown.bs.modal` event fires */
  onShown?: ModalEventHandler
}

/**
 * Provides modal-related functionality using Bootstrap's `Modal` class under the
 *   hood, with modal state tracked inside React
 */
export function useModal<T extends HTMLElement = HTMLElement>(options: UseModalOptions = {}) {
  const {
    bootstrapModal,
    onShow = noOp,
    onShown = noOp,
    onHide = noOp,
    onHidden = noOp,
    onHidePrevented = noOp
  } = options
  const [isOpen, setIsOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [modal, setModal] = useState<Modal | null>(null)
  const [modalNode, setModalNode] = useState<T | null>(null)

  useEffect(
    function initBootstrapModal() {
      if (modal && !modalNode) {
        setModal(null)
      }

      if (modalNode) {
        setModal(Modal.getOrCreateInstance(modalNode, bootstrapModal))
      }
    },
    [modal, modalNode]
  )

  useEffect(
    function setUpEventListeners() {
      if (!modalNode) {
        return
      }

      const listeners = new EventListenersManager(modalNode, [
        { type: ModalEvents.show, listener: handleShow as EventListener },
        { type: ModalEvents.shown, listener: handleShown as EventListener },
        { type: ModalEvents.hide, listener: handleHide as EventListener },
        { type: ModalEvents.hidden, listener: handleHidden as EventListener },
        { type: ModalEvents.hidePrevented, listener: handleHidePrevented as EventListener }
      ])

      listeners.setup()

      return function tearDownEventListeners() {
        listeners.teardown()
      }
    },
    [!!modalNode]
  )

  useEffect(
    function syncBootstrapModalWithReactState() {
      const shouldToggle = !!modal && !isTransitioning
      if (!shouldToggle) {
        return
      }

      isOpen ? modal.show() : modal.hide()
    },
    [modal, isTransitioning, isOpen]
  )

  useEffect(() => {
    return function cleanUpModalBackdrop() {
      modal?.hide()
    }
  }, [!!modal])

  function handleShow(event: Modal.Event) {
    beginTransition()
    onShow(event)
  }

  function handleShown(event: Modal.Event) {
    show()
    endTransition()
    onShown(event)
  }

  function handleHide(event: Modal.Event) {
    beginTransition()
    onHide(event)
  }

  function handleHidden(event: Modal.Event) {
    hide()
    endTransition()
    onHidden(event)
  }

  function handleHidePrevented(event: Modal.Event) {
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
    /** Modal is currently open */
    isOpen,
    /** Modal is currently transitioning between shown/hidden states */
    isTransitioning,
    /** Callback ref that can be used for the `Modal` component */
    ref: setModalNode,
    /** Manually hide the modal */
    hide,
    /** Manually show the modal */
    show,
    /** Toggle modal visibility */
    toggle
  }
}
