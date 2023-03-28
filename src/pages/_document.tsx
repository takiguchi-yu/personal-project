import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className='min-h-screen bg-gradient-to-b from-base to-base-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
