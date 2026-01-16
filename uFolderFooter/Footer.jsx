import React from 'react'
import './Footer.css'
import socGit from  '../img/socGit.svg'
import socLin from '../img/socLin.png'
import socThr from '../img/socTh.png'


const Footer = () => {
    const handleBackToTOp = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer>
            <button id="backToTop" onClick={handleBackToTOp}>
                <p>
                    BACK TO TOP
                </p>
            </button>
            
            <section id="socialsFooter">
                <img src={socGit} alt="GitHub Logo" />
                <img src={socThr} alt="Threads" />
                <img src={socLin} alt="LinkedIn" />
            </section>
            <section id="credits">
                <p>&copy; 2026 <strong>Anthony Torrefranca</strong> All Right Reserved.</p> 
            </section>       
        </footer>
    )
}

export default Footer
