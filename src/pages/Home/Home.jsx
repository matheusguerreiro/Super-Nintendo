// react
import React from 'react'

// sass
import './home.sass'

// images
import snes from '../../images/snes_home.png'


const Home = () => {
  return (
    <div className='home'>
      <img src={snes} alt="snes" />
    </div>
  )
}

export default Home