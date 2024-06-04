import React, { useState, useContext } from 'react'
import './Homepage/style/homepage.css'
import snowflake from './Homepage/assets/snowflake.svg'
import fire from './Homepage/assets/fire.svg'
import { TempContext } from './App'

export default function Homepage() {
  const [widget, setWidget] = useState(snowflake);
  const { temperature, setTemperature } = useContext(TempContext)

  

  function themeChange(){
    setTemperature(temperature === 'cold'? 'warm': 'cold')
    setWidget( widget === snowflake? fire : snowflake )    
  }


  return (
    <div className='header'>
        <div className="themecon" onClick={themeChange}>
            <img src={widget} alt="theme-button" className="theme"/>
        </div>
    </div>
  )
}
