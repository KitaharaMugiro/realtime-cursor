import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';
import "./main.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <Head>
        <title>Realtimely demo</title>
        <meta name="description" content="realtimely demo created by next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
