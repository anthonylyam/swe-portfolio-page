import Link from '@/components/Link'
import ProjectsDisplay from '@/components/ProjectsDisplay'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { useRouter } from 'next/router'

const MAX_DISPLAY = 5

const categories = [
  {
    category: 'Web Development',
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap',
      'MongoDB',
      'PosgreSQL',
      'Django',
      'NodeJS',
    ],
  },
  {
    category: 'Maintenance',
    skills: ['APIs', 'Git'],
  },
]

export default function Home({ posts }) {
  const skills = [
    '💻 Web Development',
    '🪢 APIs',
    '🎮 Git',
    '🛠️ React & Next.js',
    '⚛️ Node.js',
    '🗄️ MongoDB',
    '🦖 PostgreSQL',
    '📚 MERN Stack',
    '🪸 Django',
    '🐍 Python',
    '📜 Javascript',
    '⌨️ Typescript',
    '🎨 Tailwind CSS',
  ]

  const involvements = [
    {
      icon: '🌟',
      title: 'Research',
      description:
        "I'm about to embark on a machine learning journey, during which I'd love to be involved in research on campus that is also closely related to another passion of mine, finance!",
    },
    {
      icon: '🌈',
      title: 'Mentorship',
      description:
        "I'm in charge of organizing the Queer Straight Alliance mentorship program for LGBTQ+ university students across Hong Kong. If you're a professional passionate about the cause or an aspiring mentee with inquiries, do reach out!",
    },
    {
      icon: '🤝',
      title: 'Projects & Internships',
      description:
        'Are you working on something cool incorporating machine learning or intersecting the world of finance? We can work together!',
    },
  ]

  return (
    <div className="space-y-10">
      <div className="h-4/5 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p className="font-mono font-bold">&gt; Hello</p>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            I'm{' '}
            <span className="bg-s bg-gradient-to-br from-teal-300 via-purple-500 to-red-400 bg-clip-text text-transparent transition ease-in-out">
              Anthony Willyam
            </span>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I use software engineering to solve problems and build systems that serve us.
          </p>
          <div className="py-8">
            <Link href={'https://www.linkedin.com/in/anthonywillyam/'}>
              <button className="rounded-xl border-2 border-primary-400 px-12 py-4 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2">
                Connect
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-2 pb-8 pt-6 md:space-y-5 ">
        <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
          Repertoire
        </h1>
        <div className="space-y-4">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Full-stack development. Frameworks, version control, and&nbsp;
            <span>
              {siteMetadata.linkedin ? (
                <Link
                  className="text-gray-500 underline underline-offset-1 transition ease-in-out hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                  href={siteMetadata.linkedin}
                >
                  more
                </Link>
              ) : (
                <a className="text-gray-500 underline underline-offset-1 transition ease-in-out hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500">
                  more
                </a>
              )}
            </span>
            .
          </p>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="mb-2 mr-2 rounded-lg bg-gray-50 px-6 py-4 text-sm font-medium text-gray-800 shadow-md transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-primary-400/50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <ProjectsDisplay projectsData={projectsData} />
      </div>

      <div className="max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Seeking Opportunities
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {involvements.map((involvement, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-gray-100 px-6 py-12 shadow transition duration-300 ease-in-out hover:shadow-primary-400/75 dark:bg-gray-800"
            >
              <div className="mb-6 divide-x-4 text-4xl">{involvement.icon}</div>
              <div className="text-2xl">{involvement.title}</div>
              <div className="my-4 w-full border-t border-gray-300 dark:border-gray-700"></div>
              <div className="text-center text-gray-700 dark:text-gray-300">
                {involvement.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  )
}
