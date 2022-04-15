import React, { useEffect, useState, setState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import { connect } from 'react-redux'
import Cross from '../../src/assets/icons/Cross'
import { Button } from '../../src/components/Button'
import SectionIndexer from '../../src/components/SectionIndexer'
import ProjectList from '../../src/components/Projects/ProjectList'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { getMonth } from '../../src/helpers/date'
import { money } from '../../src/helpers/money'
import {
  changeChild,
  toggleOverlay,
} from '../../src/store/OverlayWindow/overlayWindow.actions'
import OverlayWindow from '../../src/components/OverlayWindow'
import { spaceSections } from '../../src/data/general'
import { sectionsInit } from '../../src/store/SectionIndexer/sectionIndexer.actions'
import { setCurrentSpace } from '../../src/store/Spaces/spaces.actions'
import PostList from '../../src/components/Posts/PostList'
import AddPost from '../../src/components/Posts/AddPost'
import { getProjects } from '../../src/store/Projects/projects.api'
import { getPosts } from '../../src/store/Posts/posts.api'
import AddProject from '../../src/components/Projects/AddProject'
import Link from 'next/link'
import EmptyState from '../../src/components/EmptyState'
import { tr } from 'date-fns/locale'

const Space = ({
  space,
  projects,
  posts,
  sectionIndexer,
  toggleOverlay,
  sectionsInit,
  setCurrentSpace,
  changeChild,
  getProjects,
  getPosts,
}) => {
  const spaceTags = ['Machine Learning', 'Software Engineering', 'Startups']
  const startsOn = new Date(space.startsOn)
  const endsOn = new Date(space.endsOn)
  const isParticipant = true
  useEffect(() => {
    sectionsInit(spaceSections)
    setCurrentSpace(space.id)
    getPosts()
    getProjects()
  }, [])

  useEffect(() => {
    if (sectionIndexer.selectedSection == 0) {
      changeChild(<AddPost />)
    }
    if (sectionIndexer.selectedSection == 1) {
      changeChild(<AddProject />)
    }
  }, [sectionIndexer.selectedSection])
  console.log(space)
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
                'url(' + space.spacePic + '),  linear-gradient(#FFFFFF 10%, #212121)',
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

        <div className="w-full flex flex-col justify-start">
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
                  Owner{' '}
                  <Link href={`/profile/${space.owner.id}`}>
                    <span className="text-dark font-bold hover:text-purple cursor-pointer no-underline">
                      {' '}
                      {space.owner.first_name} {space.owner.last_name}{' '}
                    </span>
                  </Link>
                </div>
                <div className="mt-4">
                  Prize <span className="text-purple"> {money(100000)} </span>
                </div>

                <div className="font-bold text-xl text-purple mt-6">
                  About {space.title}
                </div>
                <div className="">{space.description}</div>
                <div className="font-bold text-xl text-purple mt-6">
                  {`Rules & Regulations`}
                </div>
                <div className="">{`{Insert Rules and Regulations here}`}</div>
                <div className="font-bold text-xl text-purple mt-6">Submissions</div>
                <div className="">{`{Insert Submissions Instructions here}`}</div>
                {posts.length > 0 ? (
                  <>
                    {' '}
                    <div className="flex justify-between mt-10">
                      <div className="flex flex-col w-full">
                        <div className="text-4xl text-dark mt-10 font-bold">
                          What is Happening in{' '}
                          <span className="text-green">{space.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-xl text-dark mb-10 mt-2 ">
                            Check the latest updates about this space.
                          </div>
                          <Button
                            onClick={() => {
                              toggleOverlay()
                            }}
                            label="New Post"
                            btnStyle={
                              'max-h-10 bg-white border-purple border-2 text-purple text-center hover:bg-purple hover:text-white'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <PostList />
                  </>
                ) : (
                  <EmptyState
                    label={'Add Post'}
                    onClick={() => {
                      toggleOverlay()
                    }}
                  />
                )}
              </div>
            )}
            {sectionIndexer.selectedSection === 1 && (
              <>
                {projects.length > 0 ? (
                  <>
                    {' '}
                    <div className="flex flex-col w-full">
                      <div className="text-4xl text-dark mt-10 font-bold">
                        Project Submissions in{' '}
                        <span className="text-green">{space.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-xl text-dark mb-10 mt-2 ">
                          Check the projects submitted by participants.
                        </div>
                        <Button
                          onClick={() => {
                            toggleOverlay()
                          }}
                          label="New Project"
                          btnStyle={
                            'max-h-10 bg-white border-purple border-2 text-purple text-center hover:bg-purple hover:text-white'
                          }
                        />
                      </div>
                    </div>
                    <PostList />
                  </>
                ) : (
                  <EmptyState
                    label={'Submit Project'}
                    onClick={() => {
                      toggleOverlay()
                    }}
                  />
                )}
              </>
            )}
            {sectionIndexer.selectedSection === 2 && (
              // <div className="flex flex-wrap space-x-2 space-y-2 ">
              //   {space?.participants?.map((p) => (
              //     <Link href={`/profile/${p.user.id}`}>
              //       <div className="cursor-pointer bg-white rounded-md shadow-md p-2 pr-3 flex justify-center items-center">
              //         <UserAvatar
              //           link={p.profile.profilePic}
              //           className="m-1 h-10 w-10"
              //           sizing
              //         />
              //         <div>
              //           {p.user.first_name} {p.user.last_name}
              //         </div>
              //       </div>
              //     </Link>
              //   ))}
              // </div>
              <div className="flex flex-col space-x-2 space-y-2 ">
                {space?.judges?.map((p) => (
                  <div className=" max-w-max bg-white rounded-md shadow-md p-4 flex justify-center items-center">
                    <UserAvatar link={p.picture} className="m-1 h-10 w-10" sizing />
                    <div className="flex flex-col">
                      <div>
                        {p.firstName} {p.lastName}
                      </div>
                      <div>{p.position}</div>
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
    projects: state.projects.list,
    posts: state.posts.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    sectionsInit: (sections) => dispatch(sectionsInit(sections)),
    setCurrentSpace: (id) => dispatch(setCurrentSpace(id)),
    getPosts: () => dispatch(getPosts()),
    getProjects: () => dispatch(getProjects()),
  }
}

export async function getServerSideProps({ params }) {
  const space = await axios.get(API_BASEURL + `spaces/${params.spaceId}`).then((res) => {
    return res.data
  })

  return {
    props: {
      space,
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Space)
