import { Html, Head, Main, NextScript } from 'next/document'

export default function AppDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300i,400,600|Playfair+Display:700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
