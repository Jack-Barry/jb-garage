const windowExists = typeof window !== 'undefined'

export const getHostname = () =>
  windowExists && window.location.hostname ? window.location.hostname : ''

export const localStorage = () =>
  windowExists
    ? window.localStorage
    : {
        getItem: () => {
          console.log('localStorage.getItem is unavailable')
        },
        setItem: () => {
          console.log('localStorage.setItem is unavailable')
        }
      }
