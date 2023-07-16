import { Collapse } from 'bootstrap'
import { useEffect, useMemo, useRef, useState } from 'react'

export interface UseCollapseOptions {
  defaultIsVisible?: boolean
}

// Bootstrap doesn't currently export the event types
enum CollapseEvents {
  hide = 'hide.bs.collapse',
  hidden = 'hidden.bs.collapse',
  show = 'show.bs.collapse',
  shown = 'shown.bs.collapse'
}

/** Hook for using Bootstrap's `Collapse` class for an element */
export function useCollapse(options: UseCollapseOptions = {}) {
  const { defaultIsVisible } = options

  const [isVisible, setIsVisible] = useState(defaultIsVisible ?? false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(isVisible)
  const collapseRef = useRef<HTMLElement>(null)

  const collapse = useMemo(() => {
    if (!collapseRef.current) {
      return
    }

    return new Collapse(collapseRef.current, { toggle: false })
  }, [collapseRef.current])

  useEffect(() => {
    if (!collapseRef.current) {
      return
    }

    // set up event listeners on collapse element
    collapseRef.current.addEventListener(CollapseEvents.hide, beginAnimation)
    collapseRef.current.addEventListener(CollapseEvents.hidden, endAnimation)
    collapseRef.current.addEventListener(CollapseEvents.show, beginAnimation)
    collapseRef.current.addEventListener(CollapseEvents.shown, endShown)

    return function () {
      if (!collapseRef.current) {
        return
      }

      // clean up event listeners on collapse element
      collapseRef.current.removeEventListener(CollapseEvents.hide, beginAnimation)
      collapseRef.current.removeEventListener(CollapseEvents.hidden, endAnimation)
      collapseRef.current.removeEventListener(CollapseEvents.show, beginAnimation)
      collapseRef.current.removeEventListener(CollapseEvents.shown, endShown)
    }
  }, [collapseRef.current])

  useEffect(() => {
    if (!collapse || isAnimating) {
      return
    }

    // sync Collapse state with isVisible
    if (isVisible) {
      collapse.show()
    } else {
      collapse.hide()
    }
  })

  function beginAnimation() {
    setIsAnimating(true)
  }

  function endAnimation() {
    setIsAnimating(false)
  }

  function endShown() {
    setHasBeenShown(true)
    endAnimation()
  }

  function toggle() {
    setIsVisible((prev) => !prev)
  }

  return {
    /** Ref that can be used for the element that is collapsible */
    collapseRef,
    /**
     * Function to toggle the visibility of the collapsible element
     *
     * If you want to explicitly set the visibility, use `setIsVisible` instead
     */
    toggle,
    /** Collapsible element is currently being shown */
    isVisible,
    /**
     * Function to explicitly set the visibility of the collapsible element
     *
     * If you just want to toggle the visibility, use `toggle` instead
     */
    setIsVisible,
    /**
     * Collapsible element has been shown at least once
     *
     * This allows us to set the `"collapse"` class on the element before any events
     *   have been emitted, while avoiding interfering with show/hide animations
     */
    hasBeenShown
  }
}
