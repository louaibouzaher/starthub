import Link from 'next/link'
import HeroImage from '../assets/images/HeroImage'
import { Button } from './Button'

export const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center p-20 overflow-x-hidden">
      <div className="flex flex-col w-1/2 justify-center items-start">
        <div className="text-left text-6xl text-dark font-bold">
          The Place For <br /> <span className="text-green">Growing</span> Startups
        </div>
        <div className="w-1/2 text-left mt-5 text-dark font-thin">
          Join a community of entrepreneurs and businessmen shaping the market world.
        </div>

        <div className="flex flex-row mt-7">
          <Link href="/feed" passHref>
            <Button
              label="Join The Community"
              btnStyle={'bg-green text-white border-2 border-green mx-2'}
              onClick={() => {
                console.log('Join the community')
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
