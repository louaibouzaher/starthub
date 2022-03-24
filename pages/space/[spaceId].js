import React, { useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { API_BASEURL } from '../../appConfig'
import MainLogo from '../../src/assets/images/MainLogo'
import { connect } from 'react-redux'
import Cross from '../../src/assets/icons/Cross'
import Navbar from '../../src/components/Navbar'
import { Button } from '../../src/components/Button'
import SectionIndexer from '../../src/components/SectionIndexer'
import Post from '../../src/components/Post'
import Project from '../../src/components/Project'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { getMonth } from '../../src/helpers/date'
import { changeChild } from '../../src/store/OverlayWindow/overlayWindow.actions'
import OverlayWindow from '../../src/components/OverlayWindow'
import { spaceSections } from '../../src/data/general'
import { sectionsInit } from '../../src/store/SectionIndexer/sectionIndexer.actions'

const Space = ({ sectionIndexer, space, setSection, sectionsInit }) => {
  const startsOn = new Date(space.startsOn)
  const endsOn = new Date(space.endsOn)
  const isParticipant = true
  useEffect(() => {
    sectionsInit(spaceSections)
  }, [])

  return (
    <>
      <Head>
        <title>{space.title}</title>
      </Head>
      <OverlayWindow />
      <Navbar />
      <div className="h-screen w-full flex flex-col justify-start items-start p-20">
        <div className="flex w-full">
          <div className="w-1/2 flex items-start bg-white rounded-md shadow-lg p-10 m-2">
            {space.spacePic ? (
              <div
                className="rounded-full mr-6"
                style={{
                  backgroundImage: 'url(' + space.spacePic + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: 100,
                  width: 100,
                }}
              ></div>
            ) : (
              <div
                className="rounded-full shadow-md flex justify-center items-center mr-4"
                style={{
                  height: 150,
                  width: 150,
                }}
              >
                <MainLogo width={100} />
              </div>
            )}
            <div className="w-3/4 flex flex-col">
              <div className="text-4xl text-dark">{space.title}</div>
              <div className="flex items-center my-4 text-dark break-words">
                {space.description}
              </div>
              {!isParticipant && (
                <Button
                  label="Participate Now"
                  btnStyle={
                    'border-2 border-purple text-purple text-sm hover:bg-purple hover:text-white max-h-10 max-w-max'
                  }
                  onClick={() => {
                    console.log('Participate Now')
                  }}
                />
              )}
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-start bg-white rounded-md shadow-lg p-6 m-2">
            <div className="w-1/3 flex flex-col m-2">
              <div>From</div>
              <div className="text-6xl text-purple">{startsOn.getDate()}</div>
              <div className="text-2xl text-purple">{getMonth(startsOn.getMonth())}</div>
              <div>{startsOn.getFullYear()}</div>
            </div>
            <div className="w-1/3 flex flex-col m-2">
              <div>To</div>
              <div className="text-6xl text-purple">{endsOn.getDate()}</div>
              <div className="text-2xl text-purple">{getMonth(endsOn.getMonth())}</div>
              <div>{endsOn.getFullYear()}</div>
            </div>
            <div className="w-1/3 flex flex-col m-2">
              <div>At</div>
              <div className="text-2xl break-words text-purple">{space.location}</div>
            </div>{' '}
          </div>
        </div>
        {!isParticipant && (
          <div className="flex w-full">
            <div className="w-1/2 flex flex-col items-start bg-white rounded-md shadow-lg p-10 m-2">
              <div className="text-2xl text-dark">Participants</div>
              <div className="flex flex-wrap mt-3 justify-start items-center">
                {space?.pariticipants?.map((p) => (
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
                {space?.judges?.map((j) => (
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
        )}
        <div className="w-full flex flex-col justify-start">
          {!isParticipant && (
            <>
              <div className="text-4xl text-dark mt-10 font-bold">
                What is Happening in <span className="text-green">{space.name}</span>
              </div>
              <div className="text-xl text-dark mb-10 mt-2">
                Check the latest updates about this space.
              </div>
            </>
          )}
          {/* {isParticipant && (
            <Button
              onClick={() => {
                toggleOverlay()
              }}
              label={`New ${sectionIndexer.title.substring(
                0,
                sectionIndexer.title.length - 1
              )}`}
              btnStyle={
                'max-w-max px-20  bottom-10 right-10 bg-white border-purple border-2 text-purple w-full text-center hover:bg-purple hover:text-white'
              }
            />
          )} */}

          <div className="w-full">
            <SectionIndexer sections={spaceSections} />
            {sectionIndexer.id === 0
              ? space.posts.map((p) => (
                  <Post
                    post={p}
                    user={{
                      id: p.owner?.id,
                      firstName: p.owner?.first_name,
                      lastName: p.owner?.last_name,
                      avatar: p.profile?.profilePic,
                    }}
                  />
                ))
              : space.projects.map((p) => (
                  <Project
                    project={p}
                    user={{
                      id: p.owner?.id,
                      firstName: p.owner?.first_name,
                      lastName: p.owner?.last_name,
                      avatar: p.profile?.profilePic,
                      position: p.profile?.position,
                    }}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    sectionIndexer: state.sectionIndexer,
    isLoading: state.posts.loading || state.projects.loading,
    isOverlayOpen: state.overlayWindow.isOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    sectionsInit: (sections) => dispatch(sectionsInit(sections)),
  }
}

export async function getServerSideProps({ params }) {
  const info = await axios.get(API_BASEURL + `spaces/${params.spaceId}`).then((res) => {
    return res.data
  })
  const projects = await axios
    .get(API_BASEURL + `projects/?space=${params.spaceId}`)
    .then((res) => {
      return res.data
    })
  const posts = await axios
    .get(API_BASEURL + `posts/?space=${params.spaceId}`)
    .then((res) => {
      return res.data
    })

  const space = {
    ...info,
    projects,
    posts,
  }
  return {
    props: {
      space,
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Space)
