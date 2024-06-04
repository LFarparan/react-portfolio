import Homepage from "./Homepage"
import { useState, createContext } from "react"

export const TempContext = createContext();

function App() {
  const [temperature, setTemperature] = useState('cold')

  return (
    <div className={temperature}>
      <TempContext.Provider value={{ temperature, setTemperature }}>
        <Homepage/>
      </TempContext.Provider>
    </div>
  )
}

export default App
