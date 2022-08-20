export const truncateString = (str: string, limit = 200, append = '...') => {
  if (!str) return ''

  const firstSpaceBeforeLength = str.indexOf(' ') + append.length > limit
  if (firstSpaceBeforeLength) {
    return str
  }

  let newLength = str.length
  const shouldTruncate = str.length + append.length > limit
  if (shouldTruncate) {
    newLength = limit - append.length
  }

  let newString = str.substring(0, newLength)
  newString = newString.replace(/\s+\S*$/, '')

  if (append) {
    newString = newString + append
  }
  return newString
}
