import React, { useContext, useEffect, useState } from 'react'
import './About/style/about.css'
import cold from './About/assets/coldportrait.png'
import warm from './About/assets/warmportrait.png'
import { TempContext } from './App'

export default function About(){
    const {temperature} = useContext(TempContext)
    const [portrait, setPortrait] = useState(warm)

    useEffect(()=>{
        setPortrait(portrait === cold ? warm : cold)
    }, [temperature])



  return (
    <div className='about'>
        <div className="aboutbox">
            <img src={portrait} className='portrait' alt="my-portrait"/>
            <div className="abouttext">
                <h2 className='aboutme'>ABOUT ME</h2>
                <p className='aboutmedescription'>
                    Hi!  I am a fresh BSIT graduate from PLM and currently
                    looking for an entry level job in web development or any
                    related roles to grow and acquire new set of skills.
                </p>
                <a className='resume' href="https://www.canva.com/design/DAGHMedsDkA/1DydZpsarr3dPFk7Y2d5qQ/view?utm_content=DAGHMedsDkA&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"> 
                    <p className='resumep'> View resume </p>
                </a>
            </div>
        </div>
        <div className="contactbox">

            <h2 className="aboutme"> CONTACT ME </h2>

            <div className='contactoptions'>
                <span className='contactinfo'>
                    Email: &nbsp;&nbsp;  aguinaldo.farparan@gmail.com <br />
                    Mobile: &nbsp; </span> <p className='mobile'> 0976 136 1311 </p> 
                
                <a href="https://github.com/LFarparan">
                    <div className="option github">
                        <img src="" alt="" />
                    </div>
                </a>
                
               
                
            </div>
        </div>
    </div>
  )
}
