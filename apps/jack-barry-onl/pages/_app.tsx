import { AppProps } from 'next/app'
import { Fragment } from 'react'
import { ThemeSwitcherContextProvider } from '@jb-garage/theme-switcher-react'
import ThemeSwitcherButton from '../components/ThemeSwitcherButton'

import '../../../dist/packages/bootstrap/styles/index.css'

export default function App(props: AppProps) {
  return (
    <Fragment>
      <ThemeSwitcherContextProvider themeKey="bsTheme">
        <props.Component {...props.pageProps} />
        <ThemeSwitcherButton />
      </ThemeSwitcherContextProvider>
    </Fragment>
  )
}
