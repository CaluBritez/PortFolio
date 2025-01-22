import './css/Contacto.css';
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";


export const Contacto = () => {



  return (


    <div id='box-main-body-contacto'>

      <div id='box-main-contacto-datos'>

        <div id='box-main-contacto-datos-textOne'>
          <h5 className='titulo-negro'>Datos de Contacto</h5>
        </div>

        <div className='box-main-contacto-datos-textCar'>
          <div className='box-main-contacto-datos-textCar-icon'>
            <p><CgMail /></p>
          </div>
          <div className='box-main-contacto-datos-textCar-text'>
            <p>britezlucasgaston@gmail.com</p>
          </div>
        </div>

        <div className='box-main-contacto-datos-textCar'>
          <div className='box-main-contacto-datos-textCar-icon'>
            <p><FaWhatsapp /></p>
          </div>
          <div className='box-main-contacto-datos-textCar-text'>
            <p>351-3390409</p>
          </div>
        </div>

        <div id='box-main-contacto-datos-textTwo'>
          <h5 className='titulo-negro'>Redes</h5>
        </div>

        <div className='box-main-contacto-datos-textCar'>
          <div className='box-main-contacto-datos-textCar-icon'>
            <a href="https://www.linkedin.com/in/lucasgastonbritez/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          <div className='box-main-contacto-datos-textCar-text'>
            <a href="https://www.linkedin.com/in/lucasgastonbritez/" target="_blank" rel="noopener noreferrer">/lucasgastonbritez</a>
          </div>
        </div>

        <div className='box-main-contacto-datos-textCar'>
          <div className='box-main-contacto-datos-textCar-icon'>
            <a href="https://github.com/CaluBritez" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          </div>
          <div className='box-main-contacto-datos-textCar-text'>
            <a href="https://github.com/CaluBritez" target="_blank" rel="noopener noreferrer">/CaluBritez</a>
          </div>
        </div>

        <div className='box-main-contacto-datos-textCar'>
          <div className='box-main-contacto-datos-textCar-icon'>
            <a href="https://www.instagram.com/lucasbritez/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
          </div>
          <div className='box-main-contacto-datos-textCar-text'>
            <a href="https://www.instagram.com/lucasbritez/" target="_blank" rel="noopener noreferrer">/lucasbritez</a>
          </div>
        </div>

        <div className='box-main-contacto-datos-textCar'>
          <div className='box-main-contacto-datos-textCar-icon'>
            <a href="https://www.facebook.com/calubritez/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          </div>
          <div className='box-main-contacto-datos-textCar-text'>
            <a href="https://www.facebook.com/calubritez/" target="_blank" rel="noopener noreferrer">/calubritez</a>
          </div>
        </div>

        
      </div>

      <div id='box-main-contacto-mandarEmail'>

        <div id='box-main-contacto-mandarEmail-textOne'>
          <h5>Puedes enviarme un mensaje aquí</h5>
        </div>
        <form action="">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" placeholder='Ingrese su Nombre'/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder='tuEmail@ejemplo.com' />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" placeholder='Deja tu mensaje'></textarea>
          <div id='box-form-button'>
            <button className='boton-lila-chico'>Enviar</button>
          </div>
        </form>

      </div>

    </div>
  )
}
