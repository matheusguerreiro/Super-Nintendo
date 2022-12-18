// react
import React from 'react'

// sass
import './backromcard.sass'


const BackRomCard = ({title, rom, back, backImage, setBackImage}) => {

  return (
    backImage && 
      <div className='backromcard'>
        <div className="brcO">
          <img 
            src={back}
            alt={title}
            onClick={() => {setBackImage(false)}} />
          <a href={rom}>Download</a>
        </div>
      </div>
  )
}

export default BackRomCard