import { config } from '@fortawesome/fontawesome-svg-core'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import Link from 'next/link'

import ButtonDarkModeToggle from '../components/ButtonDarkModeToggle'
import AppThemeProvider, { useAppTheme } from '../contexts/app-theme'
import { linkResolver, repositoryName } from '../prismicio'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/prism.scss'
import './index.scss'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBook,
  faHome,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons'

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
          paragraph: (props) => <Typography variant="body1" {...props} />,
          image: (props) => (
            <Box marginBottom="1.5rem">
              <Image
                src={props.node.url}
                alt={props.node.alt}
                width={props.node.dimensions.width}
                height={props.node.dimensions.height}
                layout="responsive"
              />
            </Box>
          ),
          hyperlink: (props) => (
            <Link href={props.node.data.url}>{props.text}</Link>
          )
        }}
      >
        <AppContent Component={Component} pageProps={pageProps} />
      </PrismicProvider>
    </AppThemeProvider>
  )
}

const NavMenu = () => {
  const theme = useTheme()
  const { mode } = useAppTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor:
          mode === 'dark' ? theme.palette.primary.dark : undefined
      }}
    >
      <Toolbar>
        <Fragment>
          <IconButton
            onClick={() => {
              setDrawerOpen((prev) => !prev)
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
            <Paper sx={{ width: 320, maxWidth: '100%' }} elevation={0}>
              <MenuList dense>
                <Link passHref={true} href="/">
                  <MenuItem sx={{ py: 2, my: 0 }} onClick={closeDrawer}>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faHome} />
                    </ListItemIcon>
                    <ListItemText color="text.secondary">Home</ListItemText>
                  </MenuItem>
                </Link>
                <Link passHref={true} href="/about">
                  <MenuItem sx={{ py: 2, my: 0 }} onClick={closeDrawer}>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faBook} />
                    </ListItemIcon>
                    <ListItemText color="text.secondary">About</ListItemText>
                  </MenuItem>
                </Link>
                <Link passHref={true} href="/blog">
                  <MenuItem sx={{ py: 2, my: 0 }} onClick={closeDrawer}>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faNewspaper} />
                    </ListItemIcon>
                    <ListItemText color="text.secondary">Blog</ListItemText>
                  </MenuItem>
                </Link>
              </MenuList>
            </Paper>
          </Drawer>
        </Fragment>
        <Typography sx={{ flexGrow: 1 }} />
        <ButtonDarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

const AppContent = ({
  Component,
  pageProps
}: {
  Component: (props: any) => JSX.Element
  pageProps: any
}) => {
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
