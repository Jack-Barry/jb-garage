import { EventListenersManager } from '@jb-garage/utils-browser'
import { noOp } from '@jb-garage/utils-generic'
import { ScrollSpy } from 'bootstrap'
import { useEffect, useState } from 'react'

enum ScrollSpyEvents {
  activate = 'activate.bs.scrollspy'
}

export type UseScrollSpyOptions = {
  bootstrapScrollSpy?: Partial<ScrollSpy.Options>
  onActivate?: (event: Event) => void | Promise<void>
}

export function useScrollSpy<T extends HTMLElement = HTMLElement>(
  options: UseScrollSpyOptions = {}
) {
  const { bootstrapScrollSpy, onActivate = noOp } = options

  const [scrollSpy, setScrollSpy] = useState<ScrollSpy | null>(null)
  const [scrollSpyNode, setScrollSpyNode] = useState<T | null>(null)

  useEffect(
    function initBootstrapScrollSpy() {
      if (scrollSpy && !scrollSpyNode) {
        setScrollSpy(null)
      }

      if (scrollSpyNode) {
        setScrollSpy(ScrollSpy.getOrCreateInstance(scrollSpyNode, bootstrapScrollSpy))
      }
    },
    [scrollSpy, scrollSpyNode]
  )

  useEffect(
    function setUpEventListeners() {
      if (!scrollSpyNode) {
        return
      }

      const listeners = new EventListenersManager(scrollSpyNode, [
        { type: ScrollSpyEvents.activate, listener: handleActivate }
      ])

      listeners.setup()

      return function tearDownEventListeners() {
        listeners.teardown()
      }
    },
    [!!scrollSpyNode]
  )

  function handleActivate(event: Event) {
    onActivate(event)
  }

  return {
    /** Callback ref to use for the scrollspy element */
    ref: setScrollSpyNode,
    /**
     * The underlying `ScrollSpy` instance's `refresh` method
     *
     * If no `ScrollSpy` instance is available, this is a `noOp`
     */
    refresh: scrollSpy?.refresh || noOp
  }
}
