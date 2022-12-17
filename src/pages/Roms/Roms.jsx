// react
import React from 'react'

// sass
import './roms.sass'

// json
import snes from '../../snes.json'

// component
import RomCard from '../../components/RomCard/RomCard'


const Roms = () => {

  return (
    <div className='roms'>
      {snes?.map((rom, index) => {
        return (
          <React.Fragment key={index}>
            <RomCard
              title={rom.title}
              rom={rom.rom}
              front={rom.images.front}
              back={rom.images.back}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Roms