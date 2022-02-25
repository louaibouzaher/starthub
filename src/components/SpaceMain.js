import Link from 'next/link'
import SpaceMainImage from '../assets/images/SpaceMainImage'
import { Button } from './Button'

export const SpaceMain = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center  p-2 font-inter overflow-x-hidden">
      <div classNmae="h-3/4 w-full flex items-start  overflow-x-hidden">
        <SpaceMainImage
          className={'flex flex-col w-full justify-left items-center scale-120'}
        />
      </div>
      <div className="w-1/3 flex justify-center items-center text-center p-2 font-sans text-lg not-italic font-bold text-dark capitalize">
        Create your own space to host Startup competitions, entrepreneurship forums and
        more!
      </div>
      <div className="py-4 flex justify-center items-center text-dark ">
        <p>
          <span className="m-20">Manage Participating Teams 🎯</span>
          <br></br>
          <span className="m-20">Invite Judges & Attendants ‍⚖️ </span>
          <br></br>
          Evaluate Projects and Participants Performance ⚡
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href="/space/1" passHref>
          <Button
            label="Create A Space"
            btnStyle={'bg-green text-white border-2 border-green mx-2'}
            onClick={() => {
              console.log('Create a Space')
            }}
          />
        </Link>
      </div>
    </div>
  )
}
