"use client";
import React from 'react'
import ProjectItem from '@/components/ProjectItem/ProjectItem'
import ButtonDark from '../ButtonDark/ButtonDark'
import { useState } from 'react'

const FullProjects = ({projects}) => {

    const [showMore, setShowMore] = useState(false)

    const onClickHandler = () => {
        setShowMore(!showMore)
    }

    const projectsToShow = showMore ? projects : projects.slice(0, 6)

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center my-10">
                {
                projectsToShow.map((project) => (
                    <ProjectItem key={project.title} project={project} />
                ))
                }
        </div>
        <ButtonDark text={showMore ? "Ver menos" : "Ver todos los proyectos"} onClick={onClickHandler} />
    </div>
  )
}

export default FullProjects