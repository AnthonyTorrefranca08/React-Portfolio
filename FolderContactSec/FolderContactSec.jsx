import React from 'react'
import './FolderContactSec.css'
import Box from '../tattoo/Box'
import Tattoo from '../tattoo/Tattoo'
import SeeMoreSec from '../tattoo/SeeMoreSec'

const FolderContactSec = () => {
    return (
        <section id='contactSection'>
            <Box textLink="Contact" textColor='black' />
            <section id="contactSectionEls">
                <section>
                    <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
                </section>

                <Tattoo tattooColor='black' dDisplay='flex' />
                
                <form id="inputFields">
                    <input type="text" placeholder='ENTER YOUR NAME*' />
                    <input type="text" placeholder='ENTER YOUR EMAIL' />
                    <input type="number" placeholder='PHONE NUMBER' />
                    <input type="text" placeholder='YOUR MESSAGE*' />
                </form>
                <SeeMoreSec textLink="SUBMIT" spanColor='black' />
            </section>
        </section>
    )
}

export default FolderContactSec
