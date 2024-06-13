import React, {useContext} from 'react'
import '../style/pokemart.css'
import coldgraphic from '../assets/coldgraphic.svg'
import warmgraphic from '../assets/warmgraphic.svg'
import pokemart from '../assets/pokemon_store.png'
import warmdivider from '../assets/warmdivider.svg'
import colddivider from '../assets/colddivider.svg'
import { TempContext } from '../../App'

export default function Pokemart() {
  const {temperature} = useContext(TempContext)
  return (
    <section id='project2'>
      <div className="divider">
        <img src={temperature === 'cold'? colddivider: warmdivider} alt="divider" className='dividerz' />
      </div>
      <div className="p2content">
        <div className="p2description">
          <h2>PokeMart</h2>
          <p className='stack'> 
            <span className="reacttext"> React </span> |
            <span className='mongotext'> Vanilla CSS  </span> |      
            <span className="nodetext"> Javascript </span> |
            <span className="verceltext"> Vercel </span>
          </p>
          <p className='descriptiontext'> 
            &nbsp;&nbsp;&nbsp;&nbsp; The PokeMart is a satirical website that showcases and sells Pokémon. 
            It’s a practice project that retrieves Pokémon data from the PokeAPI 
          </p>
          <div className="projectlinks">
            <a href="https://poke-mart-six.vercel.app/" target='_blank'>
              <button type='button' className="linktosite"> VISIT PROJECT </button>
            </a>
            <a href="https://github.com/LFarparan/PokeMart" target='_blank' >
              <button type='button' className="linktosite"> VISIT REPO </button>
            </a>
          </div>
        </div>
        <div className="graphicon">
          <img src={temperature === 'cold'? coldgraphic : warmgraphic} className='graphic' alt="temperature" />
          <img src={pokemart} alt="pokemart-store" className='pokemartstore' />
        </div>
      </div>
    </section>
  )
}
