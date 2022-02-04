import { Navbar } from '../src/components/Navbar'
import { Hero } from '../src/components/Hero'

function Home() {
  return (
    <>
      <Navbar isConnected={false} />
      <Hero />
    </>
  )
}

export default Home
