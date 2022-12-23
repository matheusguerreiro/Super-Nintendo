// react
import React from 'react'

// sass
import './header.sass'

// images
import four from '../../images/sfc_four_logo.png'
// import logo from '../../images/snes_logo_g.png'


const Header = () => {

  let snes = "ntertainment Syste".split("")

  return (
    <header className='header'>
      <div className="fourLeft">
        <img src={four} alt="four" />
      </div>
      <div className="title">
        {/* <img src={logo} alt="logo" /> */}
        <h1>Super Nintendo</h1>
        <div className="es">
          <div className="i">E</div>
          {snes?.map((c, i) => {
            return <div key={i} className="m">{c}</div>
          })}
          <div className="f">M</div>
        </div>
      </div>
      <div className="fourRight">
        <img src={four} alt="four" />
      </div>
    </header>
  )
}

export default Header