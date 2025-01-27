import './css/Trayectoria.css'

import { useDispatch } from 'react-redux';

import { home } from '../store/ui/uiSlice';

import curso from '../assets/curso2025.png'
import orbita1 from '../assets/orbita.png'
import orbita2 from '../assets/orbita2.png'
import orbita3 from '../assets/orbita3.png'
import orbita4 from '../assets/orbita4.png'
import orbita5 from '../assets/orbita5.png'

import { SiGooglemaps } from "react-icons/si";

import 'animate.css';


export const Trayectoria = () => {

  const dispatch = useDispatch();

  return (
    <div id='box-main-trayectoria' className='animate__animated animate__zoomIn'>

      <div id='box-main-trayectoria-caja-cerrar'>
        <button className='boton-lila-chico' onClick={() => dispatch(home())}>Volver</button>
      </div>

      <div id='box-main-trayectoria-years-content'>

        <div id='box-main-trayectoria-years'>
          <div id='box-main-trayectoria-years-armario'>
            <p href="">2024</p>
            <p href="">2023</p>
            <p href="">2022</p>
            <p href="">2021</p>
            <p href="">2020 - 2021</p>
          </div>
        </div>

        <div id='box-main-trayectoria-content'>

          <div id='box-main-trayectoria-content-border'>

            <div id='box-main-trayectoria-content-border2025'>
              <div id='box-main-trayectoria-content-border2025-boxImg'>
                <img src={curso} alt="" />
              </div>
              <div id='box-main-trayectoria-content-border2025-boxContent'>
                <h3>Actualmente me encuentro dictando un curso para futuros Ingresantes a la tecnicatura en Desarrollo de Software del Instituto Politécnico Formosa</h3>
                <h3>Las materias que estoy enseñando son Programación y Matemáticas</h3>
                <a href="https://www.instagram.com/casa_orbita/" target="_blank" rel="noopener noreferrer"><SiGooglemaps/> CasaOrbita</a>

                <div id="carouselCurso" className="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={orbita3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={orbita4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={orbita2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={orbita5} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={orbita1} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselCurso" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselCurso" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>



            </div>

          </div>

        </div>
      </div>


      


    </div>
  )
}
