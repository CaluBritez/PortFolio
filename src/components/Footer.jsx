import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import './css/Footer.css'


function Footer(){
    return(
        <div id='caja-footer' className='animate__animated animate__fadeInUp'>
            <div id='caja-redes'>
                <a href="https://www.instagram.com/lucasbritez/" target="_blank" rel="noopener noreferrer">
                    <p className="social-icon"><IoLogoInstagram /></p>
                </a>
                <a href="https://www.facebook.com/calubritez/" target="_blank" rel="noopener noreferrer">
                    <p className="social-icon"><FaFacebookSquare /></p>
                </a>
                <a >
                    <p className="social-icon"><CgMail /></p>
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