import { ComponentPropsWithRef, ElementType, useCallback } from 'react'

type SingleRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']

/** Facilitates using multiple refs for a single element */
export function useMultiRef<T extends ElementType>(...refs: SingleRef<T>[]) {
  return useCallback(
    function multiRef(node: T | null) {
      refs.forEach((r) => {
        const isFunction = typeof r === 'function'

        if (r && !isFunction) {
          r.current = node
          return
        }

        if (isFunction) {
          r(node)
          return
        }
      })
    },
    [refs]
  )
}
