import React from 'react'
import './Box.css'

const Box = ({textLink, textColor = "white", paddingValue, boxColor = "black"}) => {
    return (
    <section className="boxContainer" style={{"--padding": paddingValue, "--textColor": textColor }}>
        <section id='box'>
            <p style={{"--textColor":textColor}}>{textLink}</p>
            <span className='Child1' style={{"--boxColor" : boxColor}}></span>
        </section>
    </section>
)
}

export default  Box
