import React from 'react'
import { Avatar } from '@mui/material'

function LeaderBoardCard({ ProjectName, Grade, Rank }) {
  if (Rank === 1) {
      return (
        <div className="my-2 space-x-4 full-w-full bg-amber-400 rounded-md shadow-md px-10 py-6 flex justify-between items-start">
        <div className="flex flex-col">
          <div className="font-bold text-2xl text-white mb-4">
            WINNER
          </div>
          <div className="font-bold text-xl">
            {ProjectName}
          </div>
          <div className="text-lg">
            {Grade + "/10"}
          </div>
          
        </div>
        </div>
        
      )
  } else if (Rank === 2) {
    return (
        <div className="my-2 space-x-4 full-w-full bg-gray-400 rounded-md shadow-md px-10 py-6 flex justify-between items-start">
        <div className="flex flex-col">
          <div className="font-bold text-xl">
            {ProjectName}
          </div>
          <div className="text-lg">
            {Grade + "/10"}
          </div>
        </div>
        </div>
        
      )
  } else if (Rank === 3) {
    return (
        <div className="my-2 space-x-4 full-w-full bg-amber-700 rounded-md shadow-md px-10 py-6 flex justify-between items-start">
        <div className="flex flex-col">
          <div className="font-bold text-xl">
            {ProjectName}
          </div>
          <div className="text-lg">
            {Grade + "/10"}
          </div>
        </div>
        </div>
        
      )
  } else {
    return (
        <div className="my-2 space-x-4 full-w-full bg-white rounded-md shadow-md px-10 py-6 flex justify-between items-start">
        <div className="flex flex-col">
          <div className="font-bold text-xl">
            {ProjectName}
          </div>
          <div className="text-lg">
            {Grade + "/10"}
          </div>
        </div>
        </div>
        
      )
  }
}

export default LeaderBoardCard