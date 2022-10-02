import { config } from '@fortawesome/fontawesome-svg-core'
import { Box } from '@mui/material'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

import AppHead from '../components/AppHead'
import NavMenu from '../components/NavMenu'
import {
  internalLinkComponent,
  richTextComponents
} from '../config/prismic/components'
import { linkResolver, repositoryName } from '../config/prismic'
import { useAppTheme } from '../contexts/app-theme'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/prism.scss'
import './index.scss'

config.autoAddCss = false

const AppThemeProvider = dynamic(() => import('../contexts/app-theme'), {
  ssr: false
})

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
  const { activePalette } = useAppTheme()

  return (
    <Box className={activePalette === 'light' ? 'app-light' : 'app-dark'}>
      <NavMenu />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </Box>
  )
}
