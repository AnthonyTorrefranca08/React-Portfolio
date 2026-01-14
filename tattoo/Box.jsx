import React from 'react'
import './Box.css'

const Box = ({textLink, paddingValue}) => {
    return (
    <section className="boxContainer" style={{"--padding": paddingValue}}>
        <section id='box'>
            <p>{textLink}</p>
            <span className='Child1'></span>
        </section>
    </section>
)
}

export default  Box
