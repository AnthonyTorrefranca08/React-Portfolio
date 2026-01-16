import React from 'react'
import './SeeMoreSec.css'

const SeeMoreSec = ({textLink, textColor='black', spanColor='wheat', hoverColor='wheat'}) => {
  return (
    <button id='seeMoreBtn'>
        <section className='span1' style={{"--spanColor": spanColor}}></section>
          <p style={{"--textColor": textColor, "--hoverColor": hoverColor}}>
            {textLink}
          </p>
        <section className='span2' style={{"--spanColor": spanColor}}></section>
    </button>
  )
}

export default SeeMoreSec
