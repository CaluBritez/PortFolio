import './css/Contacto.css';
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";


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

        
      </div>

      <div id='box-main-contacto-mandarEmail'>

        <div id='box-main-contacto-mandarEmail-textOne'>
          <h5>Puedes enviarme un mensaje aquí</h5>
        </div>
        <form action="">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje"></textarea>
        </form>

      </div>

    </div>
  )
}
