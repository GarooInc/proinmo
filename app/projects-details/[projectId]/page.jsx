import React from 'react'
import projects from '@/projects'
import Image from 'next/image'

const ProjectDetails = ({ params }) => {

  const project = projects.find(p => p.id === params.projectId)
  console.log(params.projectId)
    if (!project) {
        return <h1>Project not found</h1>
    }

  return (
    <div className='flex flex-col justify-center w-full px-8 lg:px-10 pt-20 lg:pt-40'>
      <h1 className='font-inter text-xl lg:text-2xl font-bold text-start mt-4 mb-2 text-grayish'>{project.title}</h1>
      <Image src={project.image} alt={project.title} className='w-full h-60 rounded-lg object-cover' width={800} height={500} />
      <p className='font-inter text-lg text-grayish text-center lg:text-start m-4'>{project.longdescription}</p>
      <iframe src={project.link} className='lg:w-full h-auto min-h-[100vh] rounded-md' />
    </div>
  )
}

export default ProjectDetails