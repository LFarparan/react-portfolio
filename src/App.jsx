import Homepage from "./Homepage"
import { useState, createContext } from "react"
import snowflake from './Homepage/assets/snowflake.svg'
import fire from './Homepage/assets/fire.svg'
import Projects from "./Projects"
import About from "./About"

export const TempContext = createContext();

function App() {
  const [temperature, setTemperature] = useState('cold')
  const [widget, setWidget] = useState(snowflake);

  function themeChange(){
    setTemperature(temperature === 'cold'? 'warm': 'cold')
    setWidget( widget === snowflake? fire : snowflake )    
  }

  return (
    <div className={temperature}>
      <div className="themecon" onClick={themeChange}>
        <img src={widget} alt="theme-button" className="theme"/>
      </div>
      <TempContext.Provider value={{ temperature, setTemperature, widget, setWidget }}>
        <Homepage/>
        <Projects/>
        <About/>
      </TempContext.Provider>
      
    </div>
  )
}

export default App
