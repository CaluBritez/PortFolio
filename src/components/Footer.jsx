import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import './css/Footer.css'

import { useState } from 'react'
import 'animate.css';

function Footer(){

    const [emailVisible, setEmailVisible] = useState(false);

    return(
        <div id='caja-footer' className='animate__animated animate__fadeInUp'>

            {emailVisible && (
                <div id='caja-email'>
                    <p>britezlucasgaston@gmail.com</p>
                </div>
            )}

            <div id='caja-redes'>
                <a href="https://www.instagram.com/lucasbritez/" target="_blank" rel="noopener noreferrer">
                    <p className="social-icon"><IoLogoInstagram /></p>
                </a>
                <a href="https://www.facebook.com/calubritez/" target="_blank" rel="noopener noreferrer">
                    <p className="social-icon"><FaFacebookSquare /></p>
                </a>
                <a >
                <p onClick={() => setEmailVisible(!emailVisible)} className={`social-icon ${emailVisible ? 'lilaClaro' : ''}`}>
                    <CgMail />
                </p>
                </a>
                <a href="https://www.linkedin.com/in/lucasgastonbritez/" target="_blank" rel="noopener noreferrer">
                    <p className="social-icon"><FaLinkedin /></p>
                </a>
                <a href="https://github.com/CaluBritez" target="_blank" rel="noopener noreferrer">
                    <p className="social-icon"><BsGithub /></p>
                </a>
            </div>
        </div> 

    )
}
export default Footer