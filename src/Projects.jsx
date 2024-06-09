import React from 'react'
import './Projects/style/projects.css'
import Sidepanel from './Projects/components/Sidepanel'
import Papercut from './Projects/components/Proj_Papercut'

export default function Projects() {
  return (
    <section id='projects'>
      <Sidepanel/>
      <h1 className='projectstext'> MY PROJECTS: </h1>
      <Papercut/>
      <div className='fillerspace'></div>
    </section>
  )
}
