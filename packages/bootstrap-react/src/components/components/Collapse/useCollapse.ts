import { Collapse } from 'bootstrap'
import { useCallback, useEffect, useMemo, useState } from 'react'

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
export function useCollapse(options: UseCollapseOptions = {}, disabled = false) {
  const { defaultIsVisible } = options

  const [isOpen, setIsOpen] = useState(defaultIsVisible ?? false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [collapseNode, setCollapseNode] = useState<HTMLElement | null>(null)
  const collapseRef = useCallback((node: HTMLElement | null) => {
    if (!node) {
      return
    }

    setCollapseNode(node)
  }, [])

  const collapse = useMemo(() => {
    if (disabled || !collapseNode) {
      return
    }

    return new Collapse(collapseNode, { toggle: false })
  }, [collapseNode])

  useEffect(() => {
    if (disabled || !collapseNode) {
      return
    }

    // set up event listeners on collapse element
    collapseNode.addEventListener(CollapseEvents.hide, beginAnimation, { passive: true })
    collapseNode.addEventListener(CollapseEvents.hidden, endAnimation, { passive: true })
    collapseNode.addEventListener(CollapseEvents.show, beginAnimation, { passive: true })
    collapseNode.addEventListener(CollapseEvents.shown, endAnimation, { passive: true })

    return function () {
      if (disabled || !collapseNode) {
        return
      }

      // clean up event listeners on collapse element
      collapseNode.removeEventListener(CollapseEvents.hide, beginAnimation)
      collapseNode.removeEventListener(CollapseEvents.hidden, endAnimation)
      collapseNode.removeEventListener(CollapseEvents.show, beginAnimation)
      collapseNode.removeEventListener(CollapseEvents.shown, endAnimation)
    }
  }, [collapseNode])

  useEffect(() => {
    const shouldToggle = !disabled && !!collapse && !isAnimating
    if (!shouldToggle) {
      return
    }

    // sync Collapse state with isVisible
    if (isOpen) {
      collapse.show()
    } else {
      collapse.hide()
    }
  }, [collapse, isAnimating, isOpen])

  function beginAnimation() {
    setIsAnimating(true)
  }

  function endAnimation() {
    setIsAnimating(false)
  }

  const toggle = useCallback(() => {
    if (disabled) {
      return
    }

    setIsOpen((prev) => !prev)
  }, [disabled])

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
    isOpen,
    /** Collapsible element visibility is currently being animated */
    isAnimating,
    /**
     * Function to explicitly set the visibility of the collapsible element
     *
     * If you just want to toggle the visibility, use `toggle` instead
     */
    setIsOpen
  }
}
