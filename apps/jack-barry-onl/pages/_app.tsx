import { config } from '@fortawesome/fontawesome-svg-core'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import ButtonDarkModeToggle from '../components/ButtonDarkModeToggle'
import AppThemeProvider from '../contexts/app-theme'

import '@fortawesome/fontawesome-svg-core/styles.css'
import './index.scss'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} />
            <ButtonDarkModeToggle />
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </Box>
    </AppThemeProvider>
  )
}
