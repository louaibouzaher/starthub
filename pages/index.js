import Navbar from '../src/components/Navbar'
import { Hero } from '../src/components/Hero'
import { SpaceMain } from '../src/components/SpaceMain'

function Home() {
  return (
    <>
      <Navbar isConnected={false} />
      <Hero />
      <SpaceMain />
    </>
  )
}

export default Home
