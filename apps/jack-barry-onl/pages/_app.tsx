import { config } from '@fortawesome/fontawesome-svg-core'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import Link from 'next/link'

import ButtonDarkModeToggle from '../components/ButtonDarkModeToggle'
import AppThemeProvider from '../contexts/app-theme'
import { linkResolver, repositoryName } from '../prismicio'

import '@fortawesome/fontawesome-svg-core/styles.css'
import './index.scss'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography sx={{ flexGrow: 1 }} />
              <ButtonDarkModeToggle />
            </Toolbar>
          </AppBar>
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </Box>
      </PrismicProvider>
    </AppThemeProvider>
  )
}
