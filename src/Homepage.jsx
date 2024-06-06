import React, { useState, useContext } from 'react'
import './Homepage/style/homepage.css'
import { TempContext } from './App'

export default function Homepage() {
  const { temperature, setTemperature } = useContext(TempContext)

  function themeChange(){
    setTemperature(temperature === 'cold'? 'warm': 'cold')
    setWidget( widget === snowflake? fire : snowflake )    
  }


  return (
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
            I'm an aspiring Web developer who specializes on Javascript
            libraries & frameworks and is willing to learn new technologies
          </p>
        </div>
        <div className="blobbox">

        </div>
      </div>
    </div>
  )
}
