import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { space } from '../../src/data/space'
import { posts } from '../../src/data/posts'
import { projects } from '../../src/data/projects'
import Cross from '../../src/assets/icons/Cross'
import Navbar from '../../src/components/Navbar'
import { Button } from '../../src/components/Button'
import SectionIndexer from '../../src/components/SectionIndexer'
import Post from '../../src/components/Post'
import Project from '../../src/components/Project'
import UserAvatar from '../../src/assets/images/UserAvatar'

const Space = ({ sectionIndexer }) => {
  const router = useRouter()
  const { spaceId } = router.query

  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex flex-col justify-start items-start pt-28 p-20">
        <div className="flex w-full">
          <div className="w-1/2 flex items-start bg-white rounded-md shadow-lg p-10 m-2">
            <div
              className="h-32 w-32 rounded-full mr-6"
              style={{
                backgroundImage: 'url(' + space.logo + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="w-3/4 flex flex-col">
              <div className="text-4xl text-dark">{space.name}</div>
              <div className="flex items-center my-4 text-dark break-words">
                {space.description}
              </div>
              <Button
                label="Participate Now"
                btnStyle={
                  'border-2 border-purple text-purple text-sm hover:bg-purple hover:text-white max-h-10 max-w-max'
                }
                onClick={() => {
                  console.log('Participate Now')
                }}
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-start bg-white rounded-md shadow-lg p-10 m-2">
            <div className="w-1/3 flex flex-col m-2">
              <div>From</div>
              <div className="text-6xl text-purple">
                {space.dateFrom.toDateString().split(' ')[2]}
              </div>
              <div className="text-6xl text-purple">
                {space.dateFrom.toDateString().split(' ')[1]}
              </div>
              <div>{space.dateFrom.toDateString().split(' ')[3]}</div>
            </div>
            <div className="w-1/3 flex flex-col m-2">
              <div>To</div>
              <div className="text-6xl text-purple">
                {parseInt(space.dateTo.toDateString().split(' ')[2]) + 1}
              </div>
              <div className="text-6xl text-purple">
                {space.dateTo.toDateString().split(' ')[1]}
              </div>
              <div>{space.dateTo.toDateString().split(' ')[3]}</div>
            </div>
            <div className="w-1/3 flex flex-col m-2">
              <div>At</div>
              <div className="text-2xl break-words text-purple">{space.location}</div>
            </div>{' '}
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col items-start bg-white rounded-md shadow-lg p-10 m-2">
            <div className="text-2xl text-dark">Participants</div>
            <div className="flex flex-wrap mt-3 justify-start items-center">
              {space.pariticipants.map((p) => (
                <UserAvatar link={p.picture} className="m-1 h-10 w-10" sizing />
              ))}
              <div className="h-10 w-10 bg-purple rounded-full flex justify-center items-center cursor-pointer">
                <Cross color="white" className={'rotate-45 scale-125'} />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-start bg-white rounded-md shadow-lg p-10 m-2 ">
            <div className="text-2xl text-dark">Judges</div>
            <div className="flex flex-col flex-wrap mt-3">
              {space.judges.map((j) => (
                <div className="flex items-center">
                  <UserAvatar link={j.picture} className="m-1 h-14 w-14" sizing />
                  <div className="mx-2 text-dark">
                    <div>
                      {' '}
                      {j.firstName} {j.lastName}{' '}
                    </div>
                    <div className="font-bold"> {j.experience} </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col p-16">
          <div className="text-4xl text-dark mt-10 font-bold">
            What is Happening in <span className="text-green">{space.name}</span>
          </div>
          <div className="text-xl text-dark mb-10 mt-2">
            Check the latest updates about this space.
          </div>
          <SectionIndexer />
          {sectionIndexer.id === 0
            ? posts.map((p) => <Post post={p} user={p.user} />)
            : projects.map((p) => <Project project={p} user={p.user} />)}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    sectionIndexer: state.sectionIndexer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Space)
