import { noOp } from '@jb-garage/utils-generic'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

import { useCollapse } from '../Collapse/useCollapse'

export type UseCollapseValue = ReturnType<typeof useCollapse>
export type AccordionContextItem = { collapse?: UseCollapseValue }

const AccordionContext = createContext<{
  /**
   * `AccordionCollapse` components currently registered with the parent `Accordion`
   *   component
   */
  collapses: Record<string, AccordionContextItem>
  /**
   * Function that can be used by an `AccordionCollapse` to register it and keep
   *   it updated in its parent accordion context
   */
  updateCollapse: (id: string, collapse?: UseCollapseValue) => void
  /**
   * Function that can be used by an `AccordionCollapse` to remove itself from
   *   its parent accordion context
   */
  removeCollapse: (id: string) => void
  /**
   * Function that can toggle a given `AccordionCollapse` by its ID
   */
  toggleById: (id: string) => void
  /**
   * Retrieves collapse data by the ID of its respective `AccordionCollapse`
   */
  getCollapseById: (id: string) => AccordionContextItem
}>({
  collapses: {},
  updateCollapse: noOp,
  removeCollapse: noOp,
  toggleById: noOp,
  getCollapseById: () => ({})
})

export function AccordionContextProvider(
  props: PropsWithChildren<{
    /** Accordion should have _at most_ one collapsible element open */
    maxOneOpen: boolean
  }>
) {
  const [collapses, setCollapses] = useState<Record<string, AccordionContextItem>>({})

  function updateCollapse(id: string, collapse?: UseCollapseValue) {
    if (!id) {
      console.warn(
        'Attempting to update an accordion collapse with no id attribute. id is required to update it.'
      )
      return
    }

    setCollapses((prev) => ({ ...prev, [id]: { collapse } }))
  }

  function toggleById(id: string, options: { shouldCloseOthers?: boolean } = {}) {
    const { collapse } = collapses[id] || {}
    if (!collapse) {
      return
    }

    const { shouldCloseOthers = props.maxOneOpen } = options
    const willOpen = !collapse.isOpen
    collapse.toggle()
    if (shouldCloseOthers && willOpen) {
      closeOthers(id)
    }
  }

  function removeCollapse(id: string) {
    if (!collapses[id]) {
      console.warn(`Unable to unregister accordion collapse with provided id: ${id}`)
      return
    }

    setCollapses((prev) => {
      const { ...clone } = prev
      delete clone[id]
      return clone
    })
  }

  function closeOthers(id: string) {
    Object.entries(collapses).forEach(([itemId, item]) => {
      if (itemId === id) {
        return
      }

      item.collapse?.setIsOpen(false)
    })
  }

  function getCollapseById(id: string) {
    return collapses[id] || {}
  }

  return (
    <AccordionContext.Provider
      value={{
        collapses,
        updateCollapse,
        removeCollapse,
        toggleById,
        getCollapseById
      }}
    >
      {props.children}
    </AccordionContext.Provider>
  )
}

/**
 * Provides access to data in a context provided by the parent `Accordion`
 *   component
 */
export function useParentAccordion() {
  return useContext(AccordionContext)
}
