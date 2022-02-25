import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { projects } from '../../src/data/projects'
import { connectedUser } from '../../src/data/user'
import { Navbar } from '../../src/components/Navbar'
import { Button } from '../../src/components/Button'

import UserAvatar from '../../src/assets/images/UserAvatar'
import ReactPlayer from 'react-player'
import Location from '../../src/assets/icons/Location'

const Project = ({}) => {
  const router = useRouter()
  const { projectId } = router.query

  return (
    <>
      <Navbar isConnected connectedUser={connectedUser} />
      
      <div className="ml-8 App flex flex-col justify-end items-end pt-16">
          <Button
            btnStyle=" mt-8 mr-8 w-1/4 bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white"
            label="I am Interested"
            onClick={() => {
            console.log('I am Interested')
            }}
          />
      </div>

      <div className="ml-8 App w-full flex flex-col justify-start items-start">
        <div className=" mb-4 text-4xl text-dark font-bold pt-16 hover:underline ">{projects.at(0).title}</div>
        <div className="flex space-x-2 justify-start ">
        {projects.at(0).tags
          ?.split(',')
          .filter((t) => t.length > 0)
          .map((t) => {
            return (
              <div
                className="text-xl border-green text-green mb-4 px-2 rounded-md "
                style={{
                  borderWidth: 1,
                }}
              >
                {' '}
                {t}{' '}
              </div>
            )
          })}
      </div>
      <div className="flex flex-row mt-2 items-center">
        <Location /> <span className="my-4">{projects.at(0).location}</span>
      </div>
        <span className=" text-xl text-black font-bold ">Description: </span>
        <div className={'text-green-500 no-underline my-2'}>{projects.at(0).description}
      </div>
      <div className='flex flex-col justify-start items-start mt-2'>
        <div className=" text-xl text-dark my-2">
          <div className='my-2'><span className=" text-xl text-black font-bold">Field: </span>{projects.at(0).field}</div>
          <div className='my-2'><span className=" text-xl text-black font-bold ">Number of Employees:  </span>{projects.at(0).numberOfEmployees}</div>
          <div className='my-2'><span className=" text-xl text-black font-bold ">Date of establishment:  </span>{projects.at(0).dateOfEstablishment}</div>
          <div className='my-2'><span className=" text-xl text-black font-bold ">Capital:  </span>{projects.at(0).capital}
          <span className=" text-xl text-black "> dollars  </span></div>
          <div className='my-2'><span className=" text-xl text-black font-bold ">Visions:  </span>{projects.at(0).vision}</div>
        </div>
        
      </div>
      <div className="rounded-xl mt-6 mb-16 overflow-hidden">
        {projects.at(0).video.includes('youtu.be') || projects.at(0).video.includes('youtube') ? (
          <ReactPlayer url={projects.at(0).video} muted={true} />
        ) : (
          <video className="w-full" controls>
            <source src={projects.at(0).video} type="video/mp4" muted></source>
          </video>
        )}
      </div>
      </div>
      <div className = "ml-8 App flex flex-col justify-start items-start" >
      <span className=" text-xl mb-4 text-black font-bold "> Likes </span>
      </div>
      <div className='space-y-6 ml-8 App flex flex-col justify-start items-start'>
        <span className=" text-xl mb-4 text-black font-bold "> comments </span>
        <div className='flex flex-row justify-start items-start'>
          <UserAvatar sizing className={'h-16 w-16'} link={connectedUser.picture} />
          <div className='space-y-1 ml-2'>
            <span className=" text-xl text-black font-bold ">{connectedUser.firstName} {connectedUser.lastName} </span>
            <div className={'text-green-500 no-underline my-2'}>i love the idea!!</div>
          </div>
          
        </div>
        <div className='flex flex-row justify-start items-start'>
            <UserAvatar sizing className={'h-16 w-16'} link={connectedUser.picture} />
            <div className='space-y-1 ml-2'>
              <span className=" text-xl text-black font-bold ">{connectedUser.firstName} {connectedUser.lastName} </span>
              <div className={'text-green-500 no-underline my-2'}>i love the idea!!</div>
            </div>
          </div>
        
      </div>
      
      
    </>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)