interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'UriBasecamp',
    description: `Imagine Google Classroom, but for community building and bonding. I learned to set up authentication at the low level, implement version control, and integrate various frameworks. (Database hosting discontinued)`,
    imgSrc: '/static/images/uribasecamp_display.png',
    href: 'https://uribasecamp-vercel.vercel.app/',
  },
  {
    title: 'In the making...',
    description: `Stay tuned for my Headstarter Fellowship's team debut.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/',
  },
]

export default projectsData
