// react
import React from 'react'

// images
import logo from '../../images/sfc_logo.png'

// sass
import './footer.sass'


const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt="logo" />
    </footer>
  )
}

export default Footer