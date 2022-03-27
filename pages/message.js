import React from 'react'
import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import OverlayWindow from '../src/components/OverlayWindow'
import { Avatar } from '@mui/material'
import { Button } from '../src/components/Button'

function Message({}) {
  return (
    <>
      <Head>
        <title>Message - StartHub</title>
      </Head>
      <OverlayWindow />
      <Navbar />
      <div className="flex text-dark">
        <div className="w-1/4 py-16 h-screen bg-gray-100 border-b-2 border-gray-500">
          <div className="text-2xl p-4">Chats</div>
          <div className="p-2 flex ">
            <input
              className="p-2 bg-gray-200 text-xs flex-grow focus:outline-none rounded-tr-md rounded-bl-md"
              type="text"
              placeholder="Search For messages or users..."
            />
          </div>
          <div className="flex flex-row justify-around">
            <div className="p-2 flex flex-col justify-center items-center">
              <Avatar />
              <div className="text-gray-500 text-xs pt-2 text-center w-full">
                {' '}
                William
              </div>
            </div>
            <div className="p-2 flex flex-col justify-center items-center">
              <Avatar />
              <div className="text-gray-500 text-xs pt-2 text-center w-full"> Smith</div>
            </div>
            <div className="p-2 flex flex-col justify-center items-center">
              <Avatar />
              <div className="text-gray-500 text-xs pt-2 text-center w-full"> Mirna</div>
            </div>
            <div className="p-2 flex flex-col justify-center items-center">
              <Avatar />
              <div className="text-gray-500 text-xs pt-2 text-center w-full"> Ahmad</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mx-2 my-1 bg-white rounded-lg px-3 py-4">
              <div>
                <Avatar className="w-12 h-12 rounded-full"></Avatar>
              </div>
              <div className="flex-grow">
                <div className="flex text-xs ml-2 mb-2 justify-between">
                  <div>William</div>
                  <div className="text-gray-400 ml-10">12:00 AM</div>
                </div>
                <div className="text-xs ml-2 text-gray-400">
                  ok great!! We have a deal ...
                </div>
              </div>
            </div>
            <div className="flex mx-2 my-1 bg-white rounded-lg px-3 py-4">
              <div>
                <Avatar className="w-12 h-12 rounded-full"></Avatar>
              </div>
              <div className="flex-grow">
                <div className="flex text-xs ml-2 mb-2 justify-between">
                  <div>Stephano</div>
                  <div className="text-gray-400 ml-10">08:00 AM</div>
                </div>
                <div className="text-xs ml-2 text-gray-400">
                  please i need more info ...
                </div>
              </div>
            </div>
            <div className="flex mx-2 my-1 bg-white rounded-lg px-3 py-4">
              <div>
                <Avatar className="w-12 h-12 rounded-full"></Avatar>
              </div>
              <div className="flex-grow">
                <div className="flex text-xs ml-2 mb-2 justify-between">
                  <div>William</div>
                  <div className="text-gray-400 ml-10">12:00 AM</div>
                </div>
                <div className="text-xs ml-2 text-gray-400">
                  ok great!! We have a deal ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow py-16 h-screen flex flex-col">
          <div className="w-full h-14 flex justify-between shadow-lg">
            <div className="flex items-center">
              <div className="p-3">
                <Avatar className="w-8 h-8 rounded-full"></Avatar>
              </div>

              <div className="flex flex-col justify-start items-start ">
                <div className="text-sm">William James</div>
                <div className="text-xs">Online</div>
              </div>
            </div>
          </div>
          <div className="w-full flex-grow">
            <div className="flex items-end w-3/6 bg-gray-100 m-8 rounded-tl-lg rounded-tr-lg rounded-br-lg">
              <Avatar className="w-8 h-8 rounded-full m-3"></Avatar>
              <div className="p">
                <div className="text-sm">William James</div>
                <div className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe iure id,
                  sunt odio placeat excepturi cumque nemo nihil illum officiis.
                </div>
                <div className="text-xs text-gray-400">8 minutes ago</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-end w-3/6 bg-green m-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                <div className="p-3">
                  <div className="text-xs text-white">
                    Saepe iure id, sunt odio placeat excepturi ckwdxjckldl;jlkj;kjc;kumque
                    nemo nihil illum officiis.
                  </div>
                  <div className="text-xs text-gray-200">5 minutes ago</div>
                </div>
                <Avatar className="w-8 h-8 rounded-full m-3"></Avatar>
              </div>
            </div>
            <div className="flex items-end w-3/6 bg-gray-100 m-8 rounded-tl-lg rounded-tr-lg rounded-br-lg">
              <Avatar className="w-8 h-8 rounded-full m-3"></Avatar>
              <div className="p">
                <div className="text-sm">William James</div>
                <div className="text-xs text-gray-500">Please keep me posted!!</div>
                <div className="text-xs text-gray-400">4 minutes ago</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-end w-3/6 bg-green m-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                <div className="p-3">
                  <div className="text-xs text-white">
                    yes deal. so we can meet tomorrow because i am really interested in
                    the project.
                  </div>
                  <div className="text-xs text-gray-200">now</div>
                </div>
                <Avatar className="w-8 h-8 rounded-full m-3"></Avatar>
              </div>
            </div>
          </div>
          <div className="w-full px-3 p-4 flex justify-between">
            <input
              placeholder="type your message ..."
              type="text"
              className="mx-2 p-4 w-full rounded-md focus:outline-none bg-gray-100"
            />

            <Button
              label="Send"
              btnStyle={
                'bg-white border-green border-2 text-green  text-center hover:bg-green hover:text-white'
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Message
