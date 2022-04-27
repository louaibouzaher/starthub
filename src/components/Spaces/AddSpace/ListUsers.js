import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASEURL } from '../../../../appConfig'

export const ListUsers = ({ label, list }) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    list.forEach(async (id) => {
      const { data } = await axios.get(`${API_BASEURL}profiles/${id}`)
      setUsers([...users, data])
    })
  }, [])

  return (
    <>
      <div className="text-sm text-gray-500 mt-6">{label}</div>
      <div className="flex flex-wrap w-full">
        {users.map((p) => (
          <div className="text-gray-800 bg-gray-200 rounded-2xl py-1 px-2 m-1">{`${p?.user.first_name} ${p?.user.last_name}`}</div>
        ))}
      </div>
    </>
  )
}
