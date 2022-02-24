import React, { useState } from 'react'
import Head from 'next/head'
import { Navbar } from '../src/components/Navbar'
import { connectedUser } from '../src/data/user'
import PersonalInformation from '../src/components/Settings/PersonalInformation'
import PlatformPreferences from '../src/components/Settings/PlatformPreferences'
import { Button } from '../src/components/Button'
import AccountSecurity from '../src/components/Settings/AccountSecurity'

export default function Settings() {
  const [section, setSection] = useState(0)
  const [userConnected, setUserConnected] = useState(true)

  const settingsPages = [
    {
      title: 'Personal Information',
      id: 0,
    },
    {
      title: 'Platform Preferences',
      id: 1,
    },
    {
      title: 'Account & Security',
      id: 2,
    },
  ]

  return (
    <>
      <Head>
        <title>Settings - StartHub</title>
      </Head>
      <Navbar
        connectedUser={connectedUser}
        isConnected={userConnected}
        setUserConnected={setUserConnected}
      />
      <div className="text-dark flex">
        <div className="left-10 z-10 px-4 pt-24 w-1/5 h-screen flex flex-col justify-start items-center">
          <div className="w-full">
            {settingsPages.map((s) => (
              <div
                onClick={() => setSection(s.id)}
                key={s.id}
                className={
                  'shadow-md text-center text-dark p-2 m-2 rounded-lg cursor-pointer flex justify-center items-center ' +
                  (settingsPages[section].id !== s.id
                    ? 'opacity-30 bg-gray-200'
                    : 'opacity-100')
                }
              >
                {s.title}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start pt-24 pb-10 px-44">
          <div className="my-2 flex justify-end w-full">
            <Button
              btnStyle="mx-1 bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white "
              label="Save Changes"
              onClick={() => {
                console.log('Save Changes')
              }}
            />
            <Button
              label="Discard"
              btnStyle="mx-1  border-2 border-dark "
              onClick={() => {
                console.log('Discard Changes')
              }}
            />
          </div>
          <div className="w-full">
            {section == 0 && <PersonalInformation />}
            {section == 1 && <PlatformPreferences />}
            {section == 2 && <AccountSecurity />}
          </div>
        </div>
      </div>
    </>
  )
}