import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
