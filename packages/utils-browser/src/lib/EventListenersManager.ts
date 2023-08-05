type EventListenersManagerListener = {
  type: string
  listener: EventListenerOrEventListenerObject
  options?: EventListenerOptions
}

/**
 * Provides convenience methods for setting up and tearing down multiple event
 *   listeners on the same `EventTarget`
 */
export class EventListenersManager {
  constructor(private _target: EventTarget, private _listeners: EventListenersManagerListener[]) {}

  setup = () => {
    this._listeners.forEach(({ type, listener, options = { passive: true } }) => {
      this._target.addEventListener(type, listener, options)
    })
  }

  teardown = () => {
    this._listeners.forEach(({ type, listener }) => {
      this._target.removeEventListener(type, listener)
    })
  }
}
