import React from 'react'
import './Projects/style/projects.css'
import Sidepanel from './Projects/components/Sidepanel'
import Papercut from './Projects/components/Proj_Papercut'
import Pokemart from './Projects/components/Proj_Pokemart'

export default function Projects() {
  return (
    <section id='projects'>
      <Sidepanel/>
      <div className="projectscon">
        <h1 className='projectstext'> MY PROJECTS: </h1>
        <Papercut/>
        <Pokemart/>
      </div>
    </section>
  )
}
