/** Determines if the provided object has at least one property */
export function isEmptyObject(obj: object) {
  return Object.keys(obj).length < 1
}
