import React from 'react'
import HTML from '../img/img.png'
import CSS from '../img/img1.png'
import SASS from '../img/img2.png'
import JAVASCRIPT from '../img/img3.png'
import BOOTSTRAP from '../img/img4.png'
import REACT from '../img/img5.png'
import GIT from '../img/img6.png'
import FIGMA from '../img/img7.png'
import './FolderSkills.css'


const FolderSkills = () => {
return (
    <section id='skillSection'> 
        <section>
            <img src={HTML} alt="SKILLS LOGO" />
            <img src={CSS} alt="SKILLS LOGO" />
            <img src={SASS} alt="SKILLS LOGO" />
            <img src={JAVASCRIPT} alt="SKILLS LOGO" />   
        </section>
        <section>
            <img src={BOOTSTRAP} alt="SKILLS LOGO" />
            <img src={REACT} alt="SKILLS LOGO" />
            <img src={GIT} alt="SKILLS LOGO" />
            <img src={FIGMA} alt="SKILLS LOGO" />
        </section>
    </section>
    )
}

export default FolderSkills
