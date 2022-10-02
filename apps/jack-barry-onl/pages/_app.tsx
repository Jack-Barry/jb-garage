import { config } from '@fortawesome/fontawesome-svg-core'
import { Box, PaletteMode } from '@mui/material'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { Fragment } from 'react'

import AppHead from '../components/AppHead'
import NavMenu from '../components/NavMenu'
import {
  internalLinkComponent,
  richTextComponents
} from '../config/prismic/components'
import { linkResolver, repositoryName } from '../config/prismic'
import AppThemeProvider, {
  LOCAL_STORAGE_SELECTED_THEME_KEY,
  useAppTheme
} from '../contexts/app-theme'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/prism.scss'
import './index.scss'
import { AppProps } from 'next/app'
import { localStorage } from '../utils/window'

config.autoAddCss = false

export default function App(props: AppProps) {
  const ls = localStorage()
  const initialThemeMode =
    (ls.getItem(LOCAL_STORAGE_SELECTED_THEME_KEY) as PaletteMode) || 'light'

  return (
    <Fragment>
      <AppHead {...props} />
      <AppThemeProvider initialMode={initialThemeMode}>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={internalLinkComponent}
          richTextComponents={richTextComponents}
        >
          <AppContent {...props} />
        </PrismicProvider>
      </AppThemeProvider>
    </Fragment>
  )
}

const AppContent = ({ Component, pageProps }: AppProps) => {
  const { mode } = useAppTheme()

  return (
    <Box className={mode === 'light' ? 'app-light' : 'app-dark'}>
      <NavMenu />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </Box>
  )
}
