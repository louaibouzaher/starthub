import React from 'react'
import { space } from '../../data/space'
export function MySpaces() {
  return (
    <div>
      <div className=" w-full  flex flex-col justify-center ">
          <div className=" flex items-start flex-row bg-white rounded shadow-lg p-10 m-2">
            <div className="h-36 w-48 rounded-full mr-6">

              style={{
                backgroundImage: 'url(' + space.logo + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            </div>
            <div className="h-36 w-48">
              <div className=" text-dark">{space.name}</div>
              </div>
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
    </div>
    )
}
export default MySpaces
