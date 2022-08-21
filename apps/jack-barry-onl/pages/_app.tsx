import { config } from '@fortawesome/fontawesome-svg-core'
import { Box } from '@mui/material'
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
import AppThemeProvider, { useAppTheme } from '../contexts/app-theme'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/prism.scss'
import './index.scss'
import { AppProps } from 'next/app'

config.autoAddCss = false

export default function App(props: AppProps) {
  return (
    <Fragment>
      <AppHead {...props} />
      <AppThemeProvider>
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
