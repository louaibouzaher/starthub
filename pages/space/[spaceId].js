import React, { useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { space as s } from '../../src/data/space'
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
  const spaceTags = ['Machine Learning', 'Software Engineering', 'Startups']
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
      <div className="h-screen w-full flex flex-col justify-start items-start p-20">
        <div className="flex w-full">
          <div
            className="w-1/2 flex items-end justify-start bg-white rounded-md shadow-lg p-10 m-2"
            style={{
              backgroundImage:
                'url(' + s.logo + '),  linear-gradient(#FFFFFF 10%, #212121)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'darken',
            }}
          >
            <div className="text-4xl text-white ">{space.title}</div>
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

          <div className="w-full">
            <SectionIndexer sections={spaceSections} />
            {sectionIndexer.selectedSection === 0 && (
              <div className="p-10">
                <div className="space-x-1">
                  {spaceTags.map((p) => (
                    <span
                      className="p-1 text-purple border-purple rounded-md"
                      style={{
                        borderWidth: 1,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  {/* TODO: Replace this by User Card */}
                  Owner <span className="text-purple"> StartHub Co. </span>
                </div>
                <div className="mt-4">
                  Prize <span className="text-purple"> 10.000$ </span>
                </div>

                <div className="font-bold text-xl text-purple mt-6">
                  About {space.title}
                </div>
                <div className="">{s.description}</div>
                <div className="font-bold text-xl text-purple mt-6">
                  {`Rules & Regulations`}
                </div>
                <div className="">{`{Insert Rules and Regulations here}`}</div>
                <div className="font-bold text-xl text-purple mt-6">Submissions</div>
                <div className="">{`{Insert Submissions Instructions here}`}</div>
              </div>
            )}
            {sectionIndexer.selectedSection === 1 && (
              <div className="h-full flex flex-col justify-center items-center">
                <div className="my-4"> Seems empty here. 🤔</div>

                <Button
                  label="Submit Project"
                  btnStyle={
                    'max-w-max bg-white border-purple border-2 text-purple w-full text-center hover:bg-purple hover:text-white'
                  }
                />
              </div>
            )}
            {sectionIndexer.selectedSection === 2 && (
              <div className="flex flex-wrap space-x-2 space-y-2 ">
                {s.pariticipants.map((p) => (
                  <div className="bg-white rounded-md shadow-md p-2 flex justify-center items-center">
                    <UserAvatar link={p.picture} className="m-1 h-10 w-10" sizing />
                    <div>
                      {p.firstName} {p.lastName}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {sectionIndexer.selectedSection === 3 && (
              <div className="flex flex-col space-x-2 space-y-2 ">
                {s.judges.map((p) => (
                  <div className=" max-w-max bg-white rounded-md shadow-md p-4 flex justify-center items-center">
                    <UserAvatar link={p.picture} className="m-1 h-10 w-10" sizing />
                    <div className="flex flex-col">
                      <div>
                        {p.firstName} {p.lastName}
                      </div>
                      <div>{p.experience}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
