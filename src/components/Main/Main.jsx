// react
import React from 'react'

// sass
import './main.sass'


const Main = (props) => {

  return (
    <main className='main'>
      {props.children}
    </main>
  )
}

export default Main