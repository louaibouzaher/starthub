import { ADD_POST, DELETE_POST } from './posts.types'

const INITIAL_STATE = [
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

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state]

    // case DELETE_POST:
    //   return [
    //     ...state,
    //   ]

    default:
      return state
  }
}

export default reducer
