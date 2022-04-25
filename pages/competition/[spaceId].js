import React, { useEffect, useState, setState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import { connect } from 'react-redux'
import { BiLinkAlt } from 'react-icons/bi'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
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
import LeaderBoardCard from '../../src/components/LeaderBoardCard'
import AddWinners from '../../src/components/Spaces/AddWinners'

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
  currentSpace,
  connectedUser,
}) => {
  const startsOn = new Date(space.startsOn)
  const endsOn = new Date(space.endsOn)
  const [canPost, setCanPost] = useState(false)
  useEffect(() => {
    sectionsInit(spaceSections)
    setCurrentSpace(space.id)
    getPosts()
    getProjects()
    canUserPost()
  }, [])

  useEffect(() => {
    if (sectionIndexer.selectedSection == 0) {
      changeChild(<AddPost />)
    }
    if (sectionIndexer.selectedSection == 1) {
      changeChild(<AddProject />)
    }
    if (sectionIndexer.selectedSection == 3) {
      changeChild(<AddWinners />)
    }
  }, [sectionIndexer.selectedSection])

  const canUserPost = async () => {
    try {
      const { data } = await axios.get(`${API_BASEURL}spaces/${currentSpace}`)
      console.log(data)
      if (data?.owner.id == connectedUser.id) {
        setCanPost(true)
        return
      }
      data?.participants.forEach((p) => {
        if (p.user.id == connectedUser.id) {
          console.log(p.user.id, connectedUser.id)
          setCanPost(true)
          return
        }
      })
      data?.judges.forEach((p) => {
        if (p.user.id == connectedUser.id) {
          setCanPost(true)
          return
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>{space.title}</title>
      </Head>
      <OverlayWindow />
      <div className="text-dark h-screen w-full flex flex-col justify-start items-start p-20">
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
              <div className="my-1">Address</div>
              <div className="text-xl break-words text-purple">{space.address}</div>
            </div>{' '}
          </div>
        </div>

        <div className="w-full flex flex-col justify-start">
          <div className="w-full">
            <SectionIndexer />
            {sectionIndexer.selectedSection === 0 && (
              <div className="p-10">
                <div className="space-x-1">
                  {space?.tags?.split(',').map((p) => (
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
                {space.prize && (
                  <div className="mt-4">
                    Prize{' '}
                    <span className="text-purple"> {money(parseInt(space.prize))} </span>
                  </div>
                )}

                <div className="font-bold text-xl text-purple mt-6">
                  About {space.title}
                </div>
                <div className="">{space.description}</div>
                <div className="font-bold text-xl text-purple mt-6">
                  {`Rules & Regulations`}
                </div>
                <div className="whitespace-pre-line">{space.rules}</div>
                <div className="font-bold text-xl text-purple mt-6">Judging Criteria</div>
                <div className="my-1">
                  Your projects will be evaluated according to the following criterias
                </div>
                <div>
                  {space?.judgingCriterias?.map((jC, idx) => (
                    <div>
                      {' '}
                      {idx + 1} - {jC}{' '}
                    </div>
                  ))}
                </div>
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
                          {canPost && (
                            <Button
                              onClick={() => {
                                toggleOverlay()
                              }}
                              label="New Post"
                              btnStyle={
                                'max-h-10 bg-white border-purple border-2 text-purple text-center hover:bg-purple hover:text-white'
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <PostList />
                  </>
                ) : canPost ? (
                  <EmptyState
                    label={'Add Post'}
                    onClick={() => {
                      toggleOverlay()
                    }}
                  />
                ) : (
                  <div className="w-full flex my-6 text-left">
                    You are not part of this competition. 🚫 <br />
                    Contact the owner to become a participant.
                  </div>
                )}
              </div>
            )}
            {sectionIndexer.selectedSection === 1 && (
              <>
                {projects.length > 0 ? (
                  <>
                    {' '}
                    <div className="flex flex-col w-full">
                      {space.owner.id == connectedUser.id && (
                        <div className="w-ful flex justify-end">
                          <Link href={`/competition/evaluations/${space.id}`}>
                            <div className="text-purple mt-6 text-xl cursor-pointer mx-10">{`Projects Evaluations >`}</div>
                          </Link>
                        </div>
                      )}
                      <div className="text-4xl text-dark mt-6 font-bold">
                        Project Submissions in{' '}
                        <span className="text-green">{space.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-xl text-dark mb-10 mt-2 ">
                          Check the projects submitted by participants.
                        </div>
                        {canPost && (
                          <Button
                            onClick={() => {
                              toggleOverlay()
                            }}
                            label="Submit Project"
                            btnStyle={
                              'max-h-10 bg-white border-purple border-2 text-purple text-center hover:bg-purple hover:text-white'
                            }
                          />
                        )}
                      </div>
                    </div>
                    <ProjectList />
                  </>
                ) : canPost ? (
                  <EmptyState
                    label={'Submit Project'}
                    onClick={() => {
                      toggleOverlay()
                    }}
                  />
                ) : (
                  <div className="w-full flex m-6 text-left">
                    You are not part of this competition. 🚫 <br />
                    Contact the owner to become a participant and submit a project.
                  </div>
                )}
              </>
            )}
            {sectionIndexer.selectedSection === 2 && (
              // TODO: Show Participants in the future
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
              <div className="p-10 flex flex-col">
                {space?.judges?.map((p) => (
                  <div className="my-2 space-x-4 max-w-max bg-white rounded-md shadow-md px-10 py-6 flex justify-between items-start">
                    <UserAvatar
                      link={p.profile.profilePic}
                      className=" h-20 w-20"
                      sizing
                    />
                    <div className="flex flex-col">
                      <div className="font-bold">
                        {p.user.first_name} {p.user.last_name}
                      </div>
                      <div>{p.profile.position}</div>
                      <div className="flex space-x-1 my-1">
                        {p.profile.website_url && (
                          <Link href={p.profile.website_url} passHref>
                            <a target="_blank">
                              <BiLinkAlt size={28} />
                            </a>
                          </Link>
                        )}
                        {p.profile.linkedin_url && (
                          <Link href={p.profile.linkedin_url} passHref>
                            <a target="_blank">
                              <AiFillLinkedin size={28} />
                            </a>
                          </Link>
                        )}
                        {p.profile.twitter_url && (
                          <Link href={p.profile.twitter_url} passHref>
                            <a target="_blank">
                              <AiFillTwitterSquare size={28} />
                            </a>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {sectionIndexer.selectedSection === 3 && (
              <>
                {space.owner.id == connectedUser.id && (
                  <div className="w-ful flex justify-end">
                    <div
                      onClick={toggleOverlay}
                      className="text-purple mt-6 text-xl cursor-pointer mx-10"
                    >{`Set Winners >`}</div>
                  </div>
                )}
                <div className="p-10">
                  {space.showWinners ? (
                    <div className="flex p-10 justify-center items-center">
                      Winners are not announced yet. 🕑
                    </div>
                  ) : (
                    <div className="p-10 flex flex-col justify-center items-center">
                      {space.secondWinnerId && (
                        <LeaderBoardCard winnerId={space.secondWinnerId} Rank={1} />
                      )}
                      {space.secondWinnerId && (
                        <LeaderBoardCard winnerId={space.secondWinnerId} Rank={2} />
                      )}
                      {space.thirdWinnerId && (
                        <LeaderBoardCard winnerId={space.thirdWinnerId} Rank={3} />
                      )}
                    </div>
                  )}
                </div>
              </>
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
    currentSpace: state.spaces.currentSpace,
    connectedUser: state.user.data.connectedUser,
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
