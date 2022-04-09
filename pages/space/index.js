import React from 'react'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import Head from 'next/head'
import Link from 'next/link'
import OverlayWindow from '../../src/components/OverlayWindow'
import SpaceMainImage from '../../src/assets/images/SpaceMainImage'
import SpaceCard from '../../src/components/SpaceCard'
import { Button } from '../../src/components/Button'

const Spaces = ({ spaces }) => {
  return (
    <>
      <Head>
        <title>StartHub Spaces</title>
      </Head>
      <OverlayWindow />
      <div className="h-screen w-full flex flex-col justify-start items-start pt-28 p-20">
        <div className="w-full flex flex-col justify-center items-center">
          <SpaceMainImage
            className={'flex flex-col w-full justify-left items-center scale-120'}
          />
          <div className="text-center text-sm mt-6">
            Browse Spaces on StartHub <br />
            Get engaged in Startup Competetions and more!
          </div>
          <div className="mt-6 mb-2">You want to start your own?</div>
          <Link href="/create-space" passHref>
            <Button
              label="Create New Space"
              btnStyle={'bg-green text-white border-2 border-green mx-2'}
              onClick={() => {
                console.log('Create New Space')
              }}
            />
          </Link>
        </div>
        <div className="w-full px-60 flex justify-center">
          <div className="w-full flex flex-wrap ">
            {spaces.map((s) => (
              <SpaceCard space={s} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const spaces = await axios.get(API_BASEURL + `spaces/`).then((res) => {
    return res.data
  })

  return {
    props: {
      spaces,
    },
  }
}
export default Spaces
