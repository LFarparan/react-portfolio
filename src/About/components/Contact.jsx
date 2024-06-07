import React, { useState } from 'react'
import github from '../assets/github.webp'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import '../style/contact.css'


export default function Contact() {
    const [hovertext, setHovertext] = useState('Github')
  return (
        <div className="contactbox">
            <div className="contactcon">
                <h2 className="contactme"> CONTACT ME </h2>
                <div className='contactoptions'>
                    <p className='contactinfo'>
                        Email: aguinaldo.farparan@gmail.com
                    </p>
                    <p>
                        Mobile: 0976 136 1311
                    </p> 
                </div>
                <h3 className="social"> Socials: </h3>
                <div className="socialicons">
                    <div className="github">
                        <a href="https://github.com/LFarparan" target='_blank'>
                            <img src={github} alt="github-icon" id='github' 
                                onMouseEnter={()=>{setHovertext('View my Github profile')}}
                                onMouseLeave={()=>{setHovertext(' ')}}/>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/leonard-farparan-bba26026b" target='_blank'>
                            <img src={linkedin} alt="github-icon" id='linkedin' 
                                onMouseEnter={()=>{setHovertext('View my Linkedin profile')}}
                                onMouseLeave={()=>{setHovertext(' ')}}/>
                        </a>
                    </div>
                    <div className="gmail">
                        <a href="mailto:aguinaldo.farparan@gmail.com" target='_blank'>
                            <img src={gmail} alt="github-icon" id='gmail' 
                                onMouseEnter={()=>{setHovertext('Email me')}}
                                onMouseLeave={()=>{setHovertext(' ')}}/>
                        </a>
                    </div>
                </div>
                <p className="hovertext"> {hovertext} </p>
            </div>
        </div>
  )
}
