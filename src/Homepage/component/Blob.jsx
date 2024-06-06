import React, { useState, useRef, useContext} from 'react'
import snowflake from '../assets/snowflake.svg'
import fire from '../assets/fire.svg'
import { TempContext } from '../../App'
import '../style/blob.css'

export default function Blob() {
    const { temperature, setTemperature, widget, setWidget } = useContext(TempContext)
    const [glow, setGlow] = useState('')
   
    function toggleblob(){
        setGlow('blobglow')
    }

    function toggleleave(){
        setGlow('')
    }

    function themeChange(){
        setTemperature(temperature === 'cold'? 'warm': 'cold')
        setWidget( widget === snowflake? fire : snowflake )    
    }

  return (
    <div className='blobcon'>
        <div className="theme-blobcon" onClick={themeChange} onMouseEnter={toggleblob} onMouseLeave={toggleleave}> 
            <img src= {widget} alt="theme-button" className="theme-icon"/> 
            <p className="clickme">CLICK ME!</p>
        </div>
            <svg className={`blob slow ${glow}`}  id="visual" viewBox="0 0 900 900" width="900" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(337.5 438)">
                <path d="M450 6C450 172 225 344 56.2 344C-112.5 344 -225 172 -225 6C-225 -160 -112.5 -320 56.2 -320C225 -320 450 -160 450 6"></path></g>
            </svg>
            <svg className={`blob ${glow}`} id="visual" viewBox="0 0 900 900" width="900" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(514.45 394.15)">
                <path d="M234.4 27.9C234.4 187.5 117.2 375 -32.2 375C-181.7 375 -363.3 187.5 -363.3 27.9C-363.3 -131.7 -181.7 -263.3 -32.2 -263.3C117.2 -263.3 234.4 -131.7 234.4 27.9"></path></g>
            </svg>
            <svg className={`blob slower ${glow}`} id="visual" viewBox="0 0 900 900" width="900" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(428.1876996189736 381.6993675073364)">
                <path d="M176.6 -150.7C247.1 -106.1 335 -53 361.6 26.5C388.1 106.1 353.1 212.1 282.6 278.1C212.1 344.1 106.1 370.1 0.8 369.2C-104.4 368.4 -208.8 340.8 -267.7 274.8C-326.5 208.8 -339.7 104.4 -315 24.7C-290.3 -54.9 -227.5 -109.8 -168.7 -154.5C-109.8 -199.2 -54.9 -233.6 -0.9 -232.6C53 -231.7 106.1 -195.4 176.6 -150.7"></path></g>
            </svg>
    </div>
  )
}
