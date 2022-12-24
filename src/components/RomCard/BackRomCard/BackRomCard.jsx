// react
import React, { useRef } from 'react'

// sass
import './backromcard.sass'


const BackRomCard = ({title, rom, back, backImage, setBackImage}) => {

  const aRef = useRef("")
  setTimeout(() => {
    aRef.current.style.display = "flex"
  }, 2000)

  return (
    backImage && 
      <div className='backromcard'>
        <div className="brcO">
          <img 
            src={back}
            alt={title}
            onClick={() => {setBackImage(false)}} />
          <a ref={aRef} href={rom}>Download</a>
        </div>
      </div>
  )
}

export default BackRomCard