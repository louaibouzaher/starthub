import Navbar from '../src/components/Navbar'
import { Hero } from '../src/components/Hero'
import { SpaceMain } from '../src/components/SpaceMain'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>StartHub</title>
      </Head>
      <Hero />
      <SpaceMain />
    </>
  )
}

export default Home
