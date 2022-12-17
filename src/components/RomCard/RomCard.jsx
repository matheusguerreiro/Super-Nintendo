// react
import React from 'react'

// hook
import { useState } from 'react'

// sass
import './romcard.sass'

// component
import BackRomCard from './BackRomCard/BackRomCard'


const RomCard = ({title, rom, front, back}) => {

  const [backImage, setBackImage] = useState(false)

  return (
    <div 
      className="romcard">
        <img 
          src={front}
          alt={title}
          onClick={() => {setBackImage(true)}} />
        <label>{title}</label>
        {backImage &&
          <BackRomCard
            title={title}
            rom={rom}
            back={back}
            backImage={backImage}
            setBackImage={setBackImage}
          />
        }
    </div>
  )
}

export default RomCard