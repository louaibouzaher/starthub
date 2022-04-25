import JudgesIcon from '../assets/icons/JudgesIcon'
import Edit from '../assets/icons/Edit'
import ProjectsIcon from '../assets/icons/ProjectsIcon'
import WinnersIcon from '../assets/icons/WinnersIcon'
import OverviewIcon from '../assets/icons/OverviewIcon'

export const labelUpload = 'Seems empty here 🤔'

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
    Icon: () => <OverviewIcon />,
  },
  {
    id: 1,
    title: 'Projects',
    Icon: () => <ProjectsIcon />,
  },
  {
    id: 2,
    title: 'Judges',
    Icon: () => <JudgesIcon />,
  },
  {
    id: 3,
    title: 'Winners',
    Icon: () => <WinnersIcon />,
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
    Icon: () => <Edit />,
  },
]

export const industries = [
  {
    title: 'Software Engineering',
    id: 0,
  },
  {
    title: 'Machine Learning',
    id: 1,
  },
  {
    title: 'Transporations',
    id: 2,
  },
  {
    title: 'Education',
    id: 3,
  },
  {
    title: 'Packaging',
    id: 4,
  },
  {
    title: 'Music',
    id: 5,
  },
  {
    title: 'Nutrition',
    id: 6,
  },
  {
    title: 'Delivery',
    id: 7,
  },
  {
    title: 'E-Commerce',
    id: 8,
  },
  {
    title: 'Health',
    id: 9,
  },
  {
    title: 'Consulting',
    id: 10,
  },
  {
    title: 'Finance',
    id: 11,
  },
  {
    title: 'Manufactoring',
    id: 12,
  },
  {
    title: 'Clothes & Shoes',
    id: 13,
  },
  {
    title: 'Aerospace',
    id: 14,
  },
  {
    title: 'Electronic',
    id: 15,
  },
  {
    title: 'IT',
    id: 16,
  },
  {
    title: 'Education',
    id: 17,
  },
  {
    title: 'Entertainment',
    id: 18,
  },
  {
    title: 'Agriculture',
    id: 19,
  },
]
