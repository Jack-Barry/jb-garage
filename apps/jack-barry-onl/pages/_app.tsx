import { config } from '@fortawesome/fontawesome-svg-core'
import { AppBar, Box, Toolbar, Typography, useTheme } from '@mui/material'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import Link from 'next/link'

import ButtonDarkModeToggle from '../components/ButtonDarkModeToggle'
import AppThemeProvider, { useAppTheme } from '../contexts/app-theme'
import { linkResolver, repositoryName } from '../prismicio'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/prism.css'
import './index.scss'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...pageProps }) => (
          <Link href={href}>
            <a {...pageProps} />
          </Link>
        )}
        richTextComponents={{
          heading1: (props) => <Typography variant="h1" {...props} />,
          heading2: (props) => <Typography variant="h2" {...props} />,
          heading3: (props) => <Typography variant="h3" {...props} />,
          heading4: (props) => <Typography variant="h4" {...props} />,
          heading5: (props) => <Typography variant="h5" {...props} />,
          heading6: (props) => <Typography variant="h6" {...props} />,
          paragraph: (props) => <Typography variant="body1" {...props} />
        }}
      >
        <Box>
          <NavMenu />
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </Box>
      </PrismicProvider>
    </AppThemeProvider>
  )
}

const NavMenu = () => {
  const theme = useTheme()
  const { mode } = useAppTheme()

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor:
          mode === 'dark' ? theme.palette.primary.dark : undefined
      }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} />
        <ButtonDarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}
