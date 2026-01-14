import React from 'react'
import './SeeMoreSec.css'

const SeeMoreSec = ({linkText, textColor='black', stockColor='black', hoverColor='black'}) => {
  return (
    <section>
      <section id='linkText'>
        <section className='span1'></section>
          <p>
            <a href="#" style={{"--textColor": textColor, "--stockColor": stockColor, "--hoverColor": hoverColor}}>{linkText}</a>
          </p>
        <section className='span2'></section>
      </section>
    </section>
  )
}

export default SeeMoreSec
