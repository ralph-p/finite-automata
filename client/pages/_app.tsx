import NavBar from '@/components/NavBar'
import { Context } from '@/context/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Context>
        <Head >
          <title>Finite Automata</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </Context>
    </>
  )
}
