import React from 'react'
import MainLogo from '../../assets/images/MainLogo'
import Link from 'next/link'
import { getMonth } from '../../helpers/date'
const SpaceCard = ({ space }) => {
  const startsOn = new Date(space.startsOn)
  const endsOn = new Date(space.endsOn)
  console.log(space)
  return (
    <Link href={`competition/${space.id}`}>
      <div className="cursor-pointer hover:shadow-lg flex-1 flex items-start justify-start bg-white rounded-md shadow-md p-10 m-2">
        {space.spacePic ? (
          <div
            className="rounded-full mr-6 w-1/3"
            style={{
              backgroundImage: 'url(' + space.spacePic + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 100,
              width: 100,
            }}
          ></div>
        ) : (
          <div
            className="rounded-full shadow-md flex justify-center items-center mr-4"
            style={{
              height: 100,
              width: 100,
            }}
          >
            <MainLogo width={100} />
          </div>
        )}
        <div className="flex flex-col w-2/3">
          <div className="text-2xl break-words">{space.title}</div>
          <div className="text-sm opacity-50">
            {`${getMonth(startsOn.getMonth())}
            ${startsOn.getDate()}
            ${startsOn.getFullYear()}`}{' '}
            -
            {`${getMonth(endsOn.getMonth())}
            ${endsOn.getDate()}
            ${endsOn.getFullYear()}`}
          </div>
          <div className="text-sm break-words mt-2">
            {space.description.substring(0, 100)}...
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SpaceCard
