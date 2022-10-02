import { Html, Head, Main, NextScript } from 'next/document'

export default function AppDocument() {
  // prevents theme flicker on page load
  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300i,400,600|Playfair+Display:700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
