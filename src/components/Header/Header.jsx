// react
import React from 'react'

// sass
import './header.sass'

// images
import four from '../../images/sfc_four_logo.png'
import logo from '../../images/snes_logo_g.png'


const Header = () => {
  return (
    <header className='header'>
      <div className="fourLeft">
        <img src={four} alt="four" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="fourRight">
        <img src={four} alt="four" />
      </div>
    </header>
  )
}

export default Header