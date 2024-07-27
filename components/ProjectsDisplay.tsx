import Card from '@/components/Card'

const ProjectsDisplay = ({ projectsData }) => {
  return (
    <>
      <div className="">
        <div className="space-y-2 md:space-y-5">
          <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Projects
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Showcase your projects with a hero image (16 x 9)
            </p> */}
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsDisplay
