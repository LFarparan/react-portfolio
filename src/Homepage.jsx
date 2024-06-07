import React, { useState, useContext } from 'react'
import './Homepage/style/homepage.css'
import Blob from './Homepage/component/Blob'

export default function Homepage() {

  return (
    <>
      <div className='header'>
        <div className='navigation'>
          <p className="navigate">PROJECTS</p>
          <p className="navigate">ABOUT ME</p>
        </div>
        <div className="homecon">
          <div className="greetbox">
            <h1 className='hello'>Hello, my name is</h1>
            <h1 className='name'>LEONARD FARPARAN</h1>
            <p className="greetdescription">
              I'm an aspiring Web developer with a specializes on JavaScript 
              libraries and frameworks, and I have a keen interest in learning 
              new technologies.
            </p>
          </div>
          <div className="blobbox">
            <Blob/>
          </div>
        </div>
        <div className='headfoot'> </div>
      </div>
      
    </>
    
  )
}
