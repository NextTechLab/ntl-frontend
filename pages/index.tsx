import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/landing/Landing'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>The Next Tech Lab</title>
      <link rel="shortcut icon" href="/ntl.png" type="image/x-icon" />
    </Head>
    <Header/>
    <Landing/>
    <Footer/>
    </>
  )
}

export default Home
