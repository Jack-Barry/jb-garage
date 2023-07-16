import { Tab } from 'bootstrap'
import { useEffect, useRef, useState } from 'react'

type UseTabsOptions = {
  defaultActiveTab?: string
  onShow?: (event: Event) => void
  onShown?: (event: Event) => void
  onHide?: (event: Event) => void
  onHidden?: (event: Event) => void
}

type TabRef<T extends HTMLElement> = {
  el: T
  tab: Tab
}

export function useTabs<Trigger extends HTMLElement>(options: UseTabsOptions = {}) {
  const { defaultActiveTab, onShow, onShown, onHide, onHidden } = options
  const tabRefs = useRef<Record<string, TabRef<Trigger>>>({})
  const defaultTab = useRef<string | undefined>(defaultActiveTab)
  const [activeTab, setActiveTab] = useState<string | undefined>(defaultActiveTab)

  function registerTab(node: Trigger | null) {
    if (!node) {
      return
    }

    const tab = new Tab(node)
    tabRefs.current[node.id] = { el: node, tab }
    if (!activeTab && !defaultTab.current) {
      defaultTab.current = node.id
      setActiveTab(node.id)
    }
  }

  function removeTab(id: string) {
    const tabRef = tabRefs.current[id]
    if (!tabRef) {
      return
    }

    const tab = tabRef.tab
    if (!tab) {
      return
    }

    tab.dispose()
    delete tabRefs.current[id]
  }

  function handleShow(event: Event) {
    if (!onShow) {
      return
    }
    onShow(event)
  }

  function handleShown(event: Event) {
    setActiveTab((event.target as HTMLElement)?.id)
    if (!onShown) {
      return
    }

    onShown(event)
  }

  function handleHide(event: Event) {
    if (!onHide) {
      return
    }
    onHide(event)
  }

  function handleHidden(event: Event) {
    if (!onHidden) {
      return
    }
    onHidden(event)
  }

  useEffect(() => {
    Object.values(tabRefs.current).forEach((ref) => {
      if (!ref.el) {
        return
      }

      ref.el.addEventListener('show.bs.tab', handleShow)
      ref.el.addEventListener('shown.bs.tab', handleShown)
      ref.el.addEventListener('hide.bs.tab', handleHide)
      ref.el.addEventListener('hidden.bs.tab', handleHidden)
    })

    return function () {
      Object.values(tabRefs.current).forEach((ref) => {
        if (!ref.el) {
          return
        }

        ref.el.removeEventListener('show.bs.tab', handleShow)
        ref.el.removeEventListener('shown.bs.tab', handleShown)
        ref.el.removeEventListener('hide.bs.tab', handleHide)
        ref.el.removeEventListener('hidden.bs.tab', handleHidden)
      })
    }
  })

  useEffect(() => {
    if (!activeTab) {
      return
    }

    const tabRef = tabRefs.current[activeTab]
    if (!tabRef) {
      return
    }

    tabRef.tab.show()
  }, [activeTab])

  return { registerTab, removeTab, activeTab, setActiveTab }
}
