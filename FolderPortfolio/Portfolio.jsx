import React from 'react'
import Box from '../tattoo/Box'
import './Portfolio.css'
import PortFolioCover from '../img/pfCover.jpg'
import bootTaup from'../img/bootTaup.jpg'

const Portfolio = () => {
    return (
        <section id='portfolioSection'>
            <section id="portfolioCover">
                <img src={PortFolioCover} alt="Porfolio Cover" />
                <Box textLink="Portfolio" textColor='white'/>
            </section>
            <section id="varietySec">
                <a href="#">
                    <p>ALL</p>
                </a>
                <a href="#">
                    <p>CODED</p>
                </a>
                <a href="#">
                    <p>DESIGN</p>
                </a>
            </section>
            <section id="projects">
                <img src={bootTaup} alt="PROJECTS" />
                <img src={bootTaup} alt="PROJECTS" />
                <img src={bootTaup} alt="PROJECTS" />
                <img src={bootTaup} alt="PROJECTS" />
                <img src={bootTaup} alt="PROJECTS" />
                <img src={bootTaup} alt="PROJECTS" />
            </section>
            <section>
                <p style={{color: "grey", fontSize: "20px"}}>And many more to come!</p>
            </section>
        </section>
    )
}

export default Portfolio
