import React from 'react'
import './SeeMoreSec.css'

const SeeMoreSec = ({textLink, textColor='black', stockColor='black', hoverColor='wheat'}) => {
  return (
    <section id='seeMoreBtn'>
        <section className='span1'></section>
          <p style={{"--textColor": textColor, "--stockColor": stockColor,
          "--hoverColor": hoverColor}}>{textLink}</p>
        <section className='span2'></section>
    </section>
  )
}

export default SeeMoreSec
