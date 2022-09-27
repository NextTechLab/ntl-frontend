import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/landing/Landing'
import Header from '../components/layout/Header'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/ntl.png" type="image/x-icon" />
    </Head>
    <Header/>
    <Landing/>
    </>
  )
}

export default Home
