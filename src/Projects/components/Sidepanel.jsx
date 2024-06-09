import React, { useState } from 'react'
import '../style/sidepanel.css'
import home from '../assets/home.png'
import project from '../assets/project.png'
import about from '../assets/about.png'
import Papercut from './Proj_Papercut'

export default function Sidepanel() {
  return (
    <>  
        <nav className='sidepanel' >
            <div className='unicon'>
                <div className="icontainer"> </div>
            </div>
            <a href="#header">
                <div className='icondiv'>
                    <div className="icontainer">
                        <img src={home} alt="home-icon" className='home-icon'/>
                    </div>
                    <p className='navtext'> HOME </p>
                </div>
            </a>
            <a href='#project1'>
                <div className='icondiv'>
                    <div className="icontainer">
                        <img src={project} alt="project-icon" className='project-icon'/>
                    </div>
                    <p className='navtext'> PaperCut </p>
                </div>
            </a>
            
            <div className='icondiv'>
                <div className="icontainer"> 
                    <img src={project} alt="project-icon" className='project-icon'/>
                </div>
                <p className='navtext'> PokeMart </p>
            </div>
            <div className='icondiv'>
                <div className="icontainer"> 
                    <img src={project} alt="project-icon" className='project-icon'/>
                </div>
                <p className='navtext'> R.P.S. </p>
            </div>
            <a href="#about">
                <div className='icondiv'>
                    <div className="icontainer"> 
                        <img src={about} alt="about-icon" className='about-icon'/>
                    </div>
                    <p className='navtext'> ABOUT ME </p>
                </div>
            </a>
        </nav>
        <Papercut/>
    </>
  )
}
