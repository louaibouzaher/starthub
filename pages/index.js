import React, { useState } from 'react'

import MilestonesIcon from '../src/assets/icons/MilestonesIcon'
import DemosIcon from '../src/assets/icons/DemosIcon'

import { Navbar } from '../src/components/Navbar'
import { Hero } from '../src/components/Hero'
import { Feed } from '../src/layouts/Feed'
import { Post } from '../src/components/Post'
import { SectionIndexer } from '../src/components/SectionIndexer'
import { Demo } from '../src/components/Demo'
import { SideBar } from '../src/layouts/SideBar'

function Home() {
  const [section, setSection] = useState(0)
  const [userConnected, setUserConnected] = useState(false)
  const posts = [
    {
      user: {
        firstName: 'Emma',
        lastName: 'Stone',
        avatar:
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      content: `Checkout the latest news about our UNICORN 🦄 \n
      #MENA #Investment #TechStartups`,
      picture:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
    {
      user: {
        firstName: 'Andrew',
        lastName: 'Garfield',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      content: `I JUST GOT MY FIRST INVESTMENT ⚡ \n
      #Spotify #MusicBusiness #2K22`,
      picture: null,
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
    {
      user: {
        firstName: 'Emma',
        lastName: 'Stone',
        avatar:
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      content: `Checkout the latest news about our UNICORN 🦄 \n
      #MENA #Investment #TechStartups`,
      picture:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
    {
      user: {
        firstName: 'Andrew',
        lastName: 'Garfield',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      content: `I JUST GOT MY FIRST INVESTMENT ⚡ \n
      #Spotify #MusicBusiness #2K22`,
      picture: null,
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
  ]
  const demos = [
    {
      user: {
        firstName: 'Andrew',
        lastName: 'Garfield',
        position: 'PR Manager',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      title: 'The New Uber Is Here!',
      description: `A platform where those who drive and deliver can connect with riders, eaters, and restaurants. In cities where Uber is available, you can use the Uber app to request a ride. When a nearby driver accepts your request, the app displays an estimated time of arrival for the driver heading to your pickup location.`,
      vision: `
      ⚡ First Vison \n
      ⚡ Second Vison \n
      ⚡ Third Vison
      `,
      video: 'https://youtu.be/ASfhYIyzTQQ',
      field: 'VTC',
      tags: ['Tech', 'Delivery', 'Urban'],
      location: 'Beirut, Lebanon',
      numberOfEmployees: 20,
      ageInMonths: 12,
    },
    {
      user: {
        firstName: 'Emma',
        lastName: 'Stone',
        position: 'CEO',
        avatar:
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      title: 'Time to switch to Zorin OS',
      description: `Zorin OS is a Linux distribution based on Ubuntu. It uses a GNOME 3 or XFCE 4 desktop environment as default, although the desktop is heavily customized in order to help Windows and macOS users transition to Linux easily.`,
      vision: `
      ⚡ First Vison \n
      ⚡ Second Vison \n
      ⚡ Third Vison
      `,
      video: 'https://youtu.be/30BKvLCEdkQ',
      field: 'VTC',
      tags: ['Tech', 'Linux', 'Software'],
      location: 'Paris, France',
      numberOfEmployees: 20,
      ageInMonths: 12,
    },
  ]
  const sections = [
    {
      id: 0,
      title: 'Milestones',
      Icon: () => <MilestonesIcon />,
    },
    {
      id: 1,
      title: 'Demos',
      Icon: () => <DemosIcon />,
    },
  ]
  return (
    <>
      <Navbar isConnected={userConnected} setUserConnected={setUserConnected} />
      {userConnected && (
        <>
          <SideBar section={sections[section].title} />
          <div className="App w-full flex flex-col justify-start items-center pt-24">
            <Feed>
              <SectionIndexer
                section={section}
                changeSection={setSection}
                sections={sections}
              />
              {section === 0 &&
                posts.map((post) => (
                  <Post
                    user={post.user}
                    time={post.time}
                    picture={post.picture}
                    content={post.content}
                  />
                ))}
              {section === 1 &&
                demos.map((demo) => <Demo demo={demo} user={demo.user} />)}
            </Feed>
          </div>
        </>
      )}
      {!userConnected && <Hero setUserConnected={setUserConnected} />}
    </>
  )
}

export default Home
