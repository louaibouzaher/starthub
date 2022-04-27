import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import UserAvatar from '../assets/images/UserAvatar'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
function LeaderBoardCard({ winnerId, Rank }) {
  const [project, setProject] = useState({})
  const getProject = async () => {
    await axios
      .get(`${API_BASEURL}projects/${winnerId}/`)
      .then((res) => {
        setProject(res.data)
      })
      .catch((e) => {})
  }
  useEffect(() => {
    getProject()
  }, [])
  return (
    <div className="my-2 space-x-4 w-1/2  rounded-md shadow-md px-10 py-6 flex justify-between items-start">
      <div className="flex flex-col">
        <div>🏆 {Rank == 1 ? 'First' : Rank == 2 ? 'Second' : 'Third'} Place</div>
        <Link href={`/project/${project.id}`} passHref>
          <div className="hover:text-purple cursor-pointer text-dark font-bold text-2xl">
            {project.title}
          </div>
        </Link>{' '}
        <div className={'mt-4 p-2 w-3/4 text-left text-sm '}>{project.description}</div>
        <div className="flex flex-row w-full items-center mt-2 ">
          <Link href={`/profile/${project?.owner?.id}`} passHref>
            <UserAvatar link={project?.profile?.profilePic} />
          </Link>
          <div className="ml-4 flex flex-col items-start">
            <Link href={`/profile/${project?.owner?.id}`} passHref>
              <div className="hover:text-purple cursor-pointer text-dark font-bold">
                {' '}
                {project?.owner?.first_name} {project?.owner?.last_name}
              </div>
            </Link>
            <div className={'text-xs opacity-50'}>{project?.profile?.position}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardCard
