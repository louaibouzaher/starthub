import Link from 'next/link'
import SpaceMainImage from '../assets/images/SpaceMainImage'
import { Button } from './Button'

export const SpaceMain = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center  p-2 overflow-x-hidden">
      <div classNmae="h-3/4 w-full flex items-start  overflow-x-hidden">
        <SpaceMainImage
          className={'flex flex-col w-full justify-left items-center scale-120'}
        />
      </div>
      <div className="flex justify-center items-center p-2 ">
        <span className="font-sans text-lg not-italic font-bold text-black capitalize">
          Create your own space to host Startup competitions,
          <br></br>
          <span className="m-20">entrepreneurship forums and more!</span>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <p>
          <span className="m-20">Manage Participating Teams 🎯</span>
          <br></br>
          <span className="m-20">Invite Judges & Attendants ‍⚖️ </span>
          <br></br>
          Evaluate Projects and Participants Performance ⚡
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href="/browse" passHref>
          <Button
            label="Create A Space"
            btnStyle={'bg-green text-white border-2 border-green mx-2'}
            action={() => {
              return 0
            }}
          />
        </Link>
      </div>
    </div>
  )
}
