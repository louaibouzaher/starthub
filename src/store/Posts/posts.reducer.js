import { postPost, deletePost, putPost, getPosts } from './posts.api'
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST,
  SET_ADD_POST_STATE,
  TOGGLE_ISEDITING,
  POSTS_LOADING,
  POSTS_FAILURE,
} from './posts.types'

const INITIAL_STATE = {
  loading: false,
  error: false,
  isEditing: false,
  addPostState: {
    title: '',
    content: '',
    picture: null,
    file: null,
  },
  list: [
    {
      user: {
        firstName: 'Emma',
        lastName: 'Stone',
        avatar:
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      title: 'Checkout the latest news about our UNICORN 🦄',
      content: `#MENA #Investment #TechStartup`,
      picture:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
    {
      title: 'This is the post Title',
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
      title: 'Checkout the latest news about our UNICORN 🦄',
      content: `#MENA #Investment #TechStartup`,
      user: {
        firstName: 'Emma',
        lastName: 'Stone',
        avatar:
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      picture:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
    {
      title: 'This is the post Title',
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
  ],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state, loading: true }
    case POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case TOGGLE_ISEDITING:
      return { ...state, isEditing: !state.isEditing }

    case SET_ADD_POST_STATE:
      return { ...state, addPostState: action.payload }
    case GET_POSTS:
      return { ...state, loading: false, list: action.payload }
    case ADD_POST:
      const newPost = { ...action.payload }
      postPost(action.payload).then((r) => {
        newPost.id = r
      })
      console.log(newPost)
      return { ...state, list: [newPost, ...state.list] }

    case DELETE_POST:
      deletePost(action.id)
      return { ...state, list: state.list.filter((p) => p.id !== action.id) }

    case EDIT_POST:
      putPost(action.id, action.payload)
      console.log(action.id)
      const newList = state.list.filter((p) => p.id != action.id)
      return {
        ...state,
        list: [{ ...action.payload, id: action.id }, ...newList],
      }

    default:
      return state
  }
}

export default reducer
