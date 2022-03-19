import React from 'react'
import { space } from '../../data/space'

export function MySpaces() {
  const sp = [space, space]
  return (
    <div className="flex w-fit flex-col justify-center ">
      {sp.map((space) => {
        return (
          <div className=" flex items-start flex-row bg-white rounded shadow-lg p-10 m-2">
            <div
              className="h-36 w-36 rounded-full mr-6"
              style={{
                backgroundImage: `url(${space.logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="h-36 max-w-md ml-1">
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
            <div className=" text-2xl ">
              <h2>Position</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default MySpaces
