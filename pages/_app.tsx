import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return <React.Fragment>
    <Head>
      <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="/favicon-128x128.png" sizes="128x128" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
}
