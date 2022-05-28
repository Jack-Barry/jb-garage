import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, Typography } from '@mui/material'
import { useAppTheme } from '../contexts/app-theme'
import { isDarkMode } from '../utils/theme'

export default function ButtonDarkModeToggle() {
  const { toggleDarkMode, mode } = useAppTheme()
  const handleClick = () => {
    toggleDarkMode()
  }

  return (
    <IconButton onClick={handleClick}>
      <Typography component="div" sx={{ flexGrow: 1 }} />
      <FontAwesomeIcon icon={isDarkMode(mode) ? faSun : faMoon} />
    </IconButton>
  )
}
