import Link from 'next/link'
import HeroImage from '../assets/images/HeroImage'
import { Button } from './Button'

export const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center p-20 overflow-x-hidden">
      <div className="flex flex-col w-1/2 justify-center items-start">
        <div className="text-left font-sans text-7xl text-dark ">
          The Place For <br /> <span className="text-green">Growing</span> Startups
        </div>
        <div className="w-1/2 text-left mt-5 text-dark">
          Join a community of entrepreneurs and businessmen shaping the market.
        </div>

        <div className="flex flex-row mt-7">
          <Link href="/browse" passHref>
            <Button
              label="I have a Startup"
              btnStyle={'bg-green text-white border-2 border-green mx-2'}
              onClick={() => {
                console.log('Startuper')
              }}
            />
          </Link>
          <Link href="/browse" passHref>
            <Button
              label="I'm an Investor"
              btnStyle="bg-white border-2 border-dark text-dark mx-2"
              onClick={() => {
                console.log('Investor')
              }}
            />
          </Link>
        </div>
      </div>
      <HeroImage
        className={'flex flex-col w-1/2  justify-center items-center scale-95'}
      />
    </div>
  )
}
