// react
import React from 'react'

// sass
import './nav.sass'

// react-router-dom
import { NavLink } from 'react-router-dom'

// images
import marioEyoshi from '../../images/marioEyoshi.png'
import samus from '../../images/samus.png'
import link from '../../images/link.png'
import donkeyKong from '../../images/dk.png'


const Nav = () => {
  return (
    <nav className='nav'>
      <NavLink to="/" end>
        <img src={marioEyoshi} alt="mario e yoshi" />
        HOME
      </NavLink>
      <NavLink to="/emulators">
        <img src={samus} alt="donkey kong" />  
        EMULADORES
      </NavLink>
      <NavLink to="/roms">
        <img src={link} alt="link" />
        ROMS
      </NavLink>
      <NavLink to="/history">
        <img src={donkeyKong} alt="samus" />  
        HISTÓRIA
      </NavLink>
    </nav>
  )
}

export default Nav