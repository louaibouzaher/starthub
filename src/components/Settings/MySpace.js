import React from 'react'
import { space } from '../../data/space'

export function MySpaces() {
  const sp = [space, space]
  const pt=["Judge","Owner","Participant"]
  return (
    <div className="flex w-fit flex-col justify-center ">
      {sp.map((space) => {
        return (
          <div className=" flex items-start flex-row bg-white rounded shadow-lg p-10 m-2">
            <div
              className="h-36 w-1/3 rounded-full mr-6"
              style={{
                backgroundImage: `url(${space.logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="h-36  w-2/3 ml-1">
              <div className="text-4xl text-dark font-bold">{space.name}</div>
              <div className=" flex flex-row text-xl font-bold m-2">
                <div>From:</div>
                <div className=" ml-4">{space.dateFrom.toDateString()}</div>
              </div>
              <div className=" flex flex-row text-xl font-bold m-2">
                <div>To:</div>
                <div className=" ml-10">{space.dateTo.toDateString()}</div>
              </div>
            </div>
            <div className=" ml-5 w-1/5 text-2xl font-bold felx flex-col">
              <h2 className='text-4xl'>Position</h2>
              <div className='text-purple text-2xl py-8'>{pt[Math.floor(Math.random() * pt.length)].toString()}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default MySpaces
