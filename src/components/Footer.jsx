import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import './css/Footer.css'


function Footer(){
    return(
        <div id='caja-footer' className='animate__animated animate__fadeInUp'>
            <div id='caja-redes'>
                <a ><p className="social-icon"><FaXTwitter /></p></a>
                <a ><p className="social-icon"><IoLogoInstagram /></p></a>
                <a ><p className="social-icon"><FaFacebookSquare /></p></a>
                <a ><p className="social-icon"><CgMail /></p></a>
                <a ><p className="social-icon"><FaWhatsapp /></p></a>
            </div>
            <div id='caja-texto-footer'>
                <p>© Soluciones Inteligentes - Todos los derechos reservados.</p>
            </div>
        </div> 

    )
}
export default Footer