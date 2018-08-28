import Home from '@/views/Home'
import About from '@/views/About'
import AboutEducation from '@/views/About/AboutEducation'
import AboutCareer from '@/views/About/AboutCareer'
import AboutSkills from '@/views/About/AboutSkills'
import Contacts from '@/views/Contacts'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      displayName: 'Home',
      pageTitle: 'Projektai'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      displayName: 'Apie Mane',
      pageTitle: 'Apie Mane'
    },
    children: [
      {
        path: '',
        name: 'About',
        component: AboutEducation
      },
      {
        path: 'career',
        name: 'AboutCarrer',
        component: AboutCareer
      },
      {
        path: 'skills',
        name: 'AboutSkills',
        component: AboutSkills
      }
    ]
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      displayName: 'Kontaktai',
      pageTitle: 'Kontaktai'
    }
  }
]
