import React from 'react'
import { Avatar } from '@mui/material'


function MessageCard({user, lastMessage, timeAgo}) {
    
    return (
        <div className='flex m-3 bg-white rounded-lg p-2'>
        <div >
            <Avatar className='w-12 h-12 rounded-full'></Avatar>
        </div>
        
        <div className='flex-grow'>
            <div className='flex text-xs ml-2 mb-2 justify between'>
            <div>{user}</div>
            <div className='text-gray-400 ml-10'>{timeAgo}</div>
            </div><div className='text-xs ml-2 text-gray-400'>
                {lastMessage}
            </div>
        </div>
        </div>
    )
  }
  
  export default MessageCard