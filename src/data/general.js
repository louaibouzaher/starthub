import PostsIcon from '../assets/icons/PostsIcon'
import ProjectsIcon from '../assets/icons/ProjectsIcon'

export const labelUpload = 'Seems empty here 🤔'

export const industry = [
  {
    label: 'Software Engineering',
    code: 1,
  },
  {
    label: 'Music',
    code: 2,
  },
  {
    label: 'Delivery',
    code: 3,
  },
  {
    label: 'Clothes & Shoes',
    code: 4,
  },
  {
    label: 'Packaging',
    code: 5,
  },
  {
    label: 'Machine Learning',
    code: 6,
  },
]

export const reactionsColors = {
  disabled: '#7B8699',
  like: '#FF5B83',
  comment: '#0A1F44',
  share: '#00DB7D',
  save: '#44DDFF',
}

export const users = [
  {
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    firstName: 'Jhon',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    firstName: 'Jhon',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/4.jpg',
    firstName: 'Jhon',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    firstName: 'Jhon',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/women/6.jpg',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/women/7.jpg',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    picture: 'https://randomuser.me/api/portraits/women/8.jpg',
    firstName: 'Jane',
    lastName: 'Doe',
  },
]

export const sampleComments = [
  'I love the idea 🚀',
  'Seems promising! Keep it up 💪',
  'Can I know more ? ',
  'Interesting invesment opportunity 💵 ',
]

export const spaceSections = [
  {
    id: 0,
    title: 'Overview',
    Icon: () => <PostsIcon />,
  },
  {
    id: 1,
    title: 'Projects',
    Icon: () => <ProjectsIcon />,
  },
  {
    id: 2,
    title: 'Judges',
    Icon: () => <ProjectsIcon />,
  },
]
export const defaultSections = [
  {
    id: 0,
    title: 'Projects',
    Icon: () => <ProjectsIcon />,
  },
  {
    id: 1,
    title: 'Posts',
    Icon: () => <PostsIcon />,
  },
]
