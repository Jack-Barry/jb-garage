import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function AppDocument() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Script src="setThemeOnLoad.js" type="module" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
