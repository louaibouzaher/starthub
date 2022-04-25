import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'
import store from '../../store'
export default function Follow({ userId, classNames }) {
  const [isFollowed, setIsFollowed] = useState(false)
  const handleFollow = async () => {
    if (isFollowed) {
      await axios.delete(`${API_BASEURL}profiles/unfollow/${userId}/`).then((res) => {
        console.log(res)
        setIsFollowed(false)
      })
    } else {
      await axios.post(`${API_BASEURL}profiles/follow/${userId}/`).then((res) => {
        console.log(res)
        setIsFollowed(true)
      })
    }
  }
  const checkIsFollowed = async () => {
    axios
      .get(`${API_BASEURL}profiles/${userId}/`)
      .then((res) => {
        setIsFollowed(res?.data?.isFollowed)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  useEffect(() => {
    checkIsFollowed()
  }, [])
  return (
    <>
      {store.getState().user.isConnected &&
        store.getState().user.data.connectedUser.id != userId && (
          <Button
            btnStyle={
              ` ${classNames} ` +
              (!isFollowed
                ? ' mx-3 break-normal  bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white'
                : 'text-gray-500  opacity-50')
            }
            label={isFollowed ? 'Unfollow ' : 'Follow'}
            onClick={handleFollow}
          />
        )}
    </>
  )
}
