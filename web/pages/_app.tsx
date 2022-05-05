import * as React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  const serverUrl = process.env.MORALIS_SERVER_URL ?? ''
  const appId = process.env.MORALIS_APP_ID ?? ''
  return (
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
