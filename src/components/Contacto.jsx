import './css/Contacto.css';
import React, { useRef } from 'react';
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

import { home } from '../store/ui/uiSlice';
import { useDispatch } from 'react-redux';

import emailjs from '@emailjs/browser';

import 'animate.css';

import { toast } from 'sonner';
import { getEnvVariables } from '../helpers/getEnvVariables.js';

const { VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, VITE_YOUR_PUBLIC_KEY } = getEnvVariables();


export const Contacto = () => {

  const dispatch = useDispatch();

  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      VITE_YOUR_SERVICE_ID, // ID del servicio EmailJS
      VITE_YOUR_TEMPLATE_ID, // ID de la plantilla
      form.current, // Formulario como referencia
      VITE_YOUR_PUBLIC_KEY // Clave pública de EmailJS
    )
    .then(() => {
      toast.success('Mensaje enviado con Éxito', {
        description: 'Me pondre en contacto contigo a la brevedad',
        duration: 2500
    });
    })
    .catch((error) => {
      alert("Error al enviar el correo:", error);
      console.log(error);
      
    });
  
    e.target.reset(); // Resetea el formulario
  };

  return (


    <div id='box-main-body-contacto'>

      <div id='box-main-contacto-datos'className='animate__animated animate__zoomIn'>

        <div id='box-main-contacto-datos-botonVolver'>
          <button className='boton-lila-chico' onClick={() => dispatch(home())}>Volver</button>

        </div>

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

      <div id='box-main-contacto-mandarEmail'className='animate__animated animate__zoomIn'>

        <div id='box-main-contacto-mandarEmail-textOne'>
          <h5>Puedes enviarme un mensaje aquí</h5>
        </div>
        <form onSubmit={enviarCorreo} ref={form}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="user_name" placeholder="Ingrese su Nombre" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" placeholder="tuEmail@ejemplo.com" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="message" placeholder="Deja tu mensaje" required></textarea>
          <div id='box-form-button'>
            <button className="boton-lila-chico" type="submit">Enviar</button>
          </div>
        </form>

      </div>

    </div>
  )
}
