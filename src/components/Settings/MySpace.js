import React from 'react'
import { space } from '../../data/space'
export function MySpaces() {
  const sp = [space, space]
  return (
    <div className=" w-full  flex flex-col justify-center ">
      {sp.map((s) => {
        return(
            <div className=" flex items-start flex-row bg-white rounded shadow-lg p-10 m-2">
          <div
            className="h-36 w-36 rounded-full mr-6"
            style={{
              backgroundImage: `url(${s.logo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="h-36 max-w-md ml-1">
            <div className="text-4xl text-dark font-bold">{s.name}</div>
            <div className=" flex flex-row text-xl font-bold m-2">
              <div>From:</div>
              <div className=" ml-4">{s.dateFrom.toISOString()}</div>
            </div>
            <div className=" flex flex-row text-xl font-bold m-2">
              <div>To:</div>
              <div className=" ml-10">{s.dateTo.toDateString()}</div>
            </div>
          </div>
          <div className=" flex flex-col m-1">
            <div className="text-xl font-bold"> Position</div>
          </div>{' '}
        </div>
        )
      })}
    </div>
  )
}
export default MySpaces
