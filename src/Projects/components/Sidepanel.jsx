import React, { useState } from 'react'
import '../style/sidepanel.css'
import home from '../assets/home.png'
import project from '../assets/project.png'
import about from '../assets/about.png'

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
            
            <div className='icondiv'>
                <div className="icontainer"> 
                    <img src={project} alt="project-icon" className='project-icon'/>
                </div>
                <p className='navtext'> R.P.S. </p>
            </div>
            <div className='icondiv'>
                <div className="icontainer">
                    <img src={project} alt="project-icon" className='project-icon'/>
                </div>
                <p className='navtext'> PaperCut </p>
            </div>
            <div className='icondiv'>
                <div className="icontainer"> 
                    <img src={project} alt="project-icon" className='project-icon'/>
                </div>
                <p className='navtext'> PokeMart </p>
            </div>
            <a href="#about">
                <div className='icondiv'>
                    <div className="icontainer"> 
                        <img src={about} alt="about-icon" className='about-icon'/>
                    </div>
                    <p className='navtext'> ABOUT </p>
                </div>
            </a>
            
        </nav>
    </>
  )
}
