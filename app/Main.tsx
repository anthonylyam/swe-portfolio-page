import Link from '@/components/Link'
import ProjectsDisplay from '@/components/ProjectsDisplay'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { useRouter } from 'next/router'

const MAX_DISPLAY = 5

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
          <div>
            <Link href={'https://www.linkedin.com/in/anthonywillyam/'}>
              <button className="rounded-xl border-2 border-purple-400 px-12 py-3 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2">
                Recruit
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
                className="mb-2 mr-2 rounded-lg bg-gray-50 px-6 py-4 text-sm font-medium text-gray-800 shadow-md transition duration-300 ease-in-out hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
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

      {/* <div className="flex flex-wrap mb-4">
  <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
    <div
      className={
        'flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 max-w-xs border'
      }
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold leading-6 mb-4">
          {skills[0]}
        </h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-md py-2 px-4 mr-2 mb-2 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div
      className={
        'flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 max-w-xs border border-pink-500'
      }
    >
    </div>
  </div>
</div> */}
    </div>
  )
}
