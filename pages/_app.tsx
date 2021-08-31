import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from "../src/api/MyApolloClient";
import "./main.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Component {...pageProps} />
  )
}
export default MyApp
