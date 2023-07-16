import { Dropdown } from 'bootstrap'
import { useEffect, useMemo, useRef, useState } from 'react'

// Bootstrap doesn't currently export the event types
enum DropdownEvents {
  hide = 'hide.bs.dropdown',
  hidden = 'hidden.bs.dropdown',
  show = 'show.bs.dropdown',
  shown = 'shown.bs.dropdown'
}

type UseDropdownOptions = {
  defaultIsOpen?: boolean
  constructorOptions?: Partial<Dropdown.Options>
}

export function useDropdown<T extends HTMLElement = HTMLButtonElement>(
  options: UseDropdownOptions = {}
) {
  const { defaultIsOpen, constructorOptions: dropdownOptions } = options

  const [isOpen, setIsOpen] = useState(defaultIsOpen ?? false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(isOpen)
  const dropdownRef = useRef<T>(null)

  const dropdown = useMemo(() => {
    if (!dropdownRef.current) {
      return
    }

    return new Dropdown(dropdownRef.current, dropdownOptions)
  }, [dropdownRef.current])

  useEffect(() => {
    if (!dropdownRef.current) {
      return
    }

    // set up event listeners on collapse element
    dropdownRef.current.addEventListener(DropdownEvents.hide, beginAnimation)
    dropdownRef.current.addEventListener(DropdownEvents.hidden, endHide)
    dropdownRef.current.addEventListener(DropdownEvents.show, beginAnimation)
    dropdownRef.current.addEventListener(DropdownEvents.shown, endShown)

    return function () {
      if (!dropdownRef.current) {
        return
      }

      // clean up event listeners on collapse element
      dropdownRef.current.removeEventListener(DropdownEvents.hide, beginAnimation)
      dropdownRef.current.removeEventListener(DropdownEvents.hidden, endHide)
      dropdownRef.current.removeEventListener(DropdownEvents.show, beginAnimation)
      dropdownRef.current.removeEventListener(DropdownEvents.shown, endShown)
    }
  }, [dropdownRef.current])

  useEffect(() => {
    if (!dropdown || isAnimating) {
      return
    }

    // sync Collapse state with isVisible
    if (isOpen) {
      dropdown.show()
    } else {
      dropdown.hide()
    }
  })

  function beginAnimation() {
    console.log('beginAnimation')
    setIsAnimating(true)
  }

  function endHide() {
    console.log('endHide')
    setIsAnimating(false)
    setIsOpen(false)
  }

  function endShown() {
    console.log('endShown')
    setHasBeenShown(true)
    setIsAnimating(false)
    setIsOpen(true)
  }

  // function toggle() {
  //   setIsOpen((prev) => !prev)
  // }

  return {
    /** Ref that can be used for the dropdown toggle element */
    dropdownRef,
    /**
     * Function to toggle the visibility of the collapsible element
     *
     * If you want to explicitly set the visibility, use `setIsVisible` instead
     */
    // toggle,
    /** Dropdown is currently open */
    isOpen,
    /**
     * Function to explicitly set the open state of the dropdown element
     *
     * If you just want to toggle the open state, use `toggle` instead
     */
    // setIsOpen,
    /**
     * Dropdown has been opened at least once
     *
     * This allows us to set the `"open"` class on the element before any events
     *   have been emitted, while avoiding interfering with show/hide animations
     */
    hasBeenShown
  }
}
