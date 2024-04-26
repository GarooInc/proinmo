"use client";
import React from 'react'
import projects from '@/projects'
import { useEffect, useState } from 'react';
import NavBarSecond from '@/components/NavBarSecond/NavBarSecond';

const ProjectDetails = ({ params }) => {
  const [data, setData] = useState([]);


  const project = projects.find(p => p.id === params.projectId)

  const fetchData = async () => {
      const response = await fetch(`https://proinmo-garoo.koyeb.app/list/${params.projectId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data.images);
      console.log(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col'>
      <NavBarSecond />
    { data && (
      <div className='flex flex-col justify-center w-full px-8 lg:px-10 pt-20 lg:pt-40'>
      <h1 className='uppercase font-inter text-xl lg:text-2xl font-bold text-center mt-4 mb-2 text-grayish'>{project.title}</h1>
      <p className='font-inter text-lg text-grayish text-start p-4 whitespace-pre-line'>{project.longdescription}</p>
      {project.metraje && (
        <p className='font-inter text-lg text-grayish text-start p-4 whitespace-pre-line'>
          A continuación los metrajes de cada fase del proyecto: 
          <div className='flex lg:flex-row flex-col flex-wrap py-8'>
          {project.metraje.map((metraje) => (
            <div key={metraje.title} className='flex flex-col gap-2 lg:w-1/4 py-4'>
              <span className='font-bold'>{metraje.title}</span> 
              <span>Entrega: {metraje.entrega}</span>
              <span>Metraje: {metraje.metraje}</span> 
              <span>Bodegas: {metraje.bodegas}</span>
              <span>{metraje.opcion}</span>
            </div>
          ))
          }
          </div>
          
          </p>
      )}
      {data.map((image) => (
        <img src={image} alt={project.title} className='w-full my-4 h-full rounded-lg object-cover' key={image} />
      ))}
    </div>
    )
    }
    </div>
  )
}

export default ProjectDetails