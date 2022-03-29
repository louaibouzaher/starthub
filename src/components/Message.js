import React from 'react'
import { Avatar } from '@mui/material'



function Message({userFullName, messageSent, timeAgo}) {
    return (
        <div className="w-full flex-grow">
            <div className="flex items-end w-3/4 bg-gray-100 m-8 rounded-tl-lg rounded-tr-lg rounded-br-lg">
              <Avatar className="w-8 h-8 rounded-full m-3"></Avatar>
              <div className="p">
                <div className="text-sm">{userFullName}</div>
                <div className="text-xs text-gray-500">
                    {messageSent}
                </div>
                <div className="text-xs text-gray-400">{timeAgo}</div>
                </div>
            </div></div>
    )
  }
  
  export default Message