import React from 'react'
import './AboutMe.css'
import Box from '../tattoo/Box.jsx'
import SeeMoreSec from '../tattoo/SeeMoreSec.jsx'
import Tattoo from '../tattoo/Tattoo.jsx'
import FolderDescription from '../FolderDescription/FolderDescription.jsx'
import FolderSkills from '../FolderSkills/FolderSkills.jsx'
import FolderSkillLearningSec from '../FolderSkillLearning/FolderSkillLearning.jsx'

const AboutMe = () => {
    return (
    <section id='aboutMeSection'>
        
        <Box textLink="ABOUT ME" textColor='black' />

        <section id="paragraph">
            <p>My name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry.</p>
            <br />
            <p>Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming websites, my passion is all kinds of motorsport - from rallies to the very king of motorsport - formula 1.</p>
        </section>
        <SeeMoreSec textLink="EXPLORE"  textColor='black' />
        
        <Tattoo className="desktopOnly" tattooColor='black'/>

        <section id="folderDescDetails">
            <FolderDescription title="DESIGN" description="I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work." />
            <FolderDescription title="DEVELOPMENT" description="Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive."/>
            <FolderDescription title="MAINTENANCE" description="In case of any problems or the need for changes, I can introduce new functionalities and solutions."/>
        </section>

        <Tattoo className="desktopOnly" tattooColor='black' />

        <Box textLink="SKILLS" textColor="black" paddingValue="8rem 0"/>

        <FolderSkills heading="USING NOW:" />

        <FolderSkillLearningSec heading="LEARNING NOW:" />
    </section>
)}

export default AboutMe
