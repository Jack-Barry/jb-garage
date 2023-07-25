import { Alert } from 'bootstrap'
import { useCallback, useEffect, useMemo, useState } from 'react'

type UseAlertOptions = {
  /**
   * Callback to invoke once the alert has been fully removed
   *
   * This can be used to set focus on a specific element once the alert is no
   *   longer on the page
   */
  onDismissed?: () => void | Promise<void>
}

// Bootstrap doesn't currently export the event types
enum AlertEvents {
  close = 'close.bs.alert',
  closed = 'closed.bs.alert'
}

/** Hook for using Bootstrap's `Alert` class for an element */
export function useAlert(
  options: UseAlertOptions = {},
  /** Set to `true` to skip any actual state management by this hook */
  hasControlledState = false
) {
  const { onDismissed } = options
  const [isClosed, setIsClosed] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [alertNode, setAlertNode] = useState<HTMLElement | null>(null)
  const alertRef = useCallback(
    (node: HTMLElement | null) => {
      if (hasControlledState || !node) {
        return
      }

      setAlertNode(node)
    },
    [options]
  )

  const alert = useMemo(() => {
    if (hasControlledState || !alertNode) {
      return
    }

    return new Alert(alertNode)
  }, [alertNode])

  useEffect(() => {
    if (hasControlledState || !alertNode) {
      return
    }

    // set up event listeners on alert element
    alertNode.addEventListener(AlertEvents.close, beginAnimation, { passive: true })
    alertNode.addEventListener(AlertEvents.closed, endAnimation, { passive: true })

    return function () {
      if (hasControlledState || !alertNode) {
        return
      }

      // clean up event listeners on alert element
      alertNode.removeEventListener(AlertEvents.close, beginAnimation)
      alertNode.removeEventListener(AlertEvents.closed, endAnimation)
    }
  }, [alertNode])

  useEffect(() => {
    const shouldClose = !hasControlledState && !!alert && !isAnimating && !isDismissed && isClosed
    if (!shouldClose) {
      return
    }

    alert.close()
  })

  function beginAnimation() {
    setIsAnimating(true)
  }

  function endAnimation() {
    setIsAnimating(false)
    setIsDismissed(true)
    if (onDismissed) {
      onDismissed()
    }
    alert?.dispose()
  }

  function close() {
    if (hasControlledState) {
      return
    }

    setIsClosed(true)
  }

  return {
    /** Ref that can be used for the element that is an alert */
    alertRef,
    /** Alert being closed is currently animating */
    isAnimating,
    /** Function to invoke to close the alert */
    close,
    /** Alert has been dismissed */
    isDismissed
  }
}
