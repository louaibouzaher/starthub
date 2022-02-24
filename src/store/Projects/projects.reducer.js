import { postProject, deleteProject } from './projects.api'
import { ADD_PROJECT, DELETE_PROJECT } from './projects.types'

const INITIAL_STATE = [
  {
    id: 12323,
    user: {
      firstName: 'Andrew',
      lastName: 'Garfield',
      position: 'PR Manager',
      picture:
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
    tags: 'Tech,Delivery,Urban',
    location: 'Beirut, Lebanon',
    numberOfEmployees: 20,
    ageInMonths: 12,
  },
  {
    id: 13234235,
    user: {
      firstName: 'Emma',
      lastName: 'Stone',
      position: 'CEO',
      picture:
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
    tags: 'Tech, Linux,Software',
    location: 'Paris, France',
    numberOfEmployees: 20,
    ageInMonths: 12,
  },
]

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      const newProject = { ...action.payload }
      postProject(action.payload).then((r) => {
        newProject.id = r
      })
      console.log(newProject)
      return [newProject, ...state]

    case DELETE_PROJECT:
      deleteProject(action.id)
      return state.filter((p) => p.id !== action.id)

    default:
      return state
  }
}

export default reducer
