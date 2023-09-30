import Button from '@jb-garage/bootstrap-react/components/components/Button/Button'
import Placeholder from '@jb-garage/bootstrap-react/components/components/Placeholder/Placeholder'
import { useThemeSwitcher } from '@jb-garage/theme-switcher-react'
import { useEffect, useState } from 'react'

export default function ThemeSwitcherButton() {
  const { setTheme, currentTheme } = useThemeSwitcher()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return <Placeholder brPlaceholderAnimation="glow" style={{ height: '38px', width: '150px' }} />
  }

  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

  return (
    <div>
      <Button
        onClick={(e) => {
          if (e.detail === 2) {
            setTheme(null)
            return
          }

          setTheme(nextTheme)
        }}
        bsJs={{ bsJsAll: { spacing: { padding: 0 } } }}
        title="Click once to change theme. Double click to follow system theme setting"
      >
        {nextTheme === 'dark' ? '🌚' : '🌞'}
      </Button>
    </div>
  )
}
