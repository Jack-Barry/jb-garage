const windowExists = typeof window !== 'undefined'

export const getHostname = () =>
  windowExists && window.location.hostname ? window.location.hostname : ''
