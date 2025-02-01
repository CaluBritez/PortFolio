import './css/Trayectoria.css'
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { home } from '../store/ui/uiSlice';

import curso from '../assets/curso2025.png'
import orbita1 from '../assets/orbita.png'
import orbita2 from '../assets/orbita2.png'
import orbita3 from '../assets/orbita3.png'
import orbita4 from '../assets/orbita4.png'
import orbita5 from '../assets/orbita5.png'
import devTeam from '../assets/devTeam.png'

import ipf1 from '../assets/IPF1.jpg'
import ipf2 from '../assets/IPF2.jpg'
import ipf3 from '../assets/IPF3.jpg'
import ipf4 from '../assets/IPF4.jpg'
import ipf5 from '../assets/IPF5.jpg'
import logoIPF from '../assets/logoIPF.png'

import curso2 from '../assets/Curso2024.png'
import alas1 from '../assets/alas1.jpg'
import alas2 from '../assets/alas2.png'
import alas3 from '../assets/alas3.jpg'
import alas4 from '../assets/alas4.jpg'

import chauBolo from '../assets/chauBolo.png'
import notasPolo from '../assets/notas2023Polo.png'
import cursado1 from '../assets/cursado1.png'
import cursado2 from '../assets/cursado2.png'
import cursado3 from '../assets/cursado3.png'
import cursado4 from '../assets/cursado4.jpg'
import cursado5 from '../assets/cursado5.jpg'

import bolo from '../assets/bolo.png'
import bolo1 from '../assets/bolo1.png'
import bolo2 from '../assets/bolo2.png'
import bolo3 from '../assets/bolo3.png'
import bolo4 from '../assets/bolo4.png'

import logoUTN from '../assets/logoUTN.png'
import frenteUTN from '../assets/UTNfrente.jpg'
import logoWD from '../assets/logoWD.png'

import { IoLogoInstagram } from "react-icons/io5";

import 'animate.css';


export const Trayectoria = () => {

  const dispatch = useDispatch();

  const [year,setYear] = useState('2025');

  return (
    <div id='box-main-trayectoria' className='animate__animated animate__zoomIn'>

      <div id='box-main-trayectoria-caja-cerrar'>
        <button className='boton-lila-chico' onClick={() => dispatch(home())}>Volver</button>
      </div>

      <div id='box-main-trayectoria-years-content'>

        <div id='box-main-trayectoria-years'>
          <div id='box-main-trayectoria-years-armario'>
            <p className={year === '2025' ? 'letraConSombra' : 'letraNegra'} href="" onClick={()=>setYear('2025')}>2025</p>
            <p className={year === '2024' ? 'letraConSombra' : 'letraNegra'} href="" onClick={()=>setYear('2024')}>2024</p>
            <p className={year === '2023' ? 'letraConSombra' : 'letraNegra'} href="" onClick={()=>setYear('2023')}>2023</p>
            <p className={year === '2022' ? 'letraConSombra' : 'letraNegra'} href="" onClick={()=>setYear('2022')}>2022 - 2017</p>
            <p className={year === '2016' ? 'letraConSombra' : 'letraNegra'} href="" onClick={()=>setYear('2016')}>2016</p>
          </div>
        </div>

        <div id='box-main-trayectoria-content'>

          <div id='box-main-trayectoria-content-border'>

          {year === "2025" && (

            <div className='animate__animated animate__bounceInRight' id='box-main-trayectoria-content-border2025'>

              <div id='box-main-trayectoria-content-border2025-boxImg'>
                <img src={curso} alt="" />
              </div>

              <div id='box-main-trayectoria-content-border2025-boxContent'>
                <h3>Actualmente me encuentro dictando un curso para futuros Ingresantes a la tecnicatura en Desarrollo de Software del Instituto Politécnico Formosa</h3>
                <h3>Las materias que estoy enseñando son Programación y Matemáticas</h3>
                <a href="https://www.instagram.com/casa_orbita/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram/> CasaOrbita</a>

                <div id='carouselCurso' className="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={orbita4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={orbita3} className="d-block w-100" alt="..."/>
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

              <div id='box-main-trayectoria-content-border2025-textDev'>
                <h3>Como Desarrollador, en estos momentos me encuentro realizando Proyectos de manera independiente en colaboración con otros Programadores.</h3>
                <h3>Estoy abierto ante cualquier oportunidad, ya sea en relación de dependencia, como también a realizar trabajos a pedido. Siempre armo un Equipo que se adecue a las necesidades solicitadas.</h3>
                <img src={devTeam} alt="" />
              </div>



            </div>
          )}
          {year === "2024" && (
            <div id='box-main-trayectoria-content-border2024' className='animate__animated animate__bounceInRight'>
              <h3>Terminando el 2024 logré graduarme como <span className='letraAzul'>Técnico en Desarrollo de Software Multiplartaforma</span> en el Instituo Politécnico Formosa</h3>
              <h3>En la exposición final, con mi equipo de trabajo presentamos nuestra App Web llamada <span className='letraAzul'>LegalDocs</span>, la cual esta destinada a los Abogados y Estudios Jurídicos, facilitando sus labores y utilizando Inteligencia Artificial para las funciones más destacadas.</h3>
              <img className='imgLogoIPF2024' src={logoIPF} alt="" />
              <div id='carouselCurso1' className="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={ipf3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={ipf1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={ipf5} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={ipf4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={ipf2} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselCurso1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselCurso1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
              <div id='box-main-trayectoria-content-border2024-curso'>

                <div id='box-main-trayectoria-content-border2024-boxImg'>
                  <img src={curso2} alt="" />
                </div>
                <div id='box-main-trayectoria-content-border2024-boxContent'>
                <h3>A comienzos de año, noté que para las personas en Formosa, estudiar Desarrollo de Software resultaba cada vez más difícil debido a la alta competencia. Lograr estar entre las 50 mejores notas y poder ingresar al Instituto se volvía un desafío. Aprovechando esta situación y con el deseo de poner a prueba mi capacidad para educar, decidí lanzar mi primer curso preparatorio para futuros programadores formoseños.</h3>
                <h3>El curso se realizó en el Colegio Alas, institución de la que orgullosamente fui alumno y que, en mi etapa profesional, decidió abrirme sus puertas nuevamente.</h3>
                  <a href="https://www.instagram.com/colegioprivadoalas/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram/> Colegio Alas</a>

                  <div id='carouselCurso' className="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={alas1} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={alas2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={alas3} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={alas4} className="d-block w-100" alt="..."/>
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
          )}
          {year === "2023" && (
            <div id='box-main-trayectoria-content-border2023' className='animate__animated animate__bounceInRight'>
              <div id='box-main-trayectoria-content-border2023-chauBolognino'>
              <img src={chauBolo} alt="" />
                <h3>Al comienzo de este año, abandoné mi trabajo como Ingeniero Industrial después de seis años y medio en el cargo. Fue una decisión difícil, pero estaba seguro del nuevo camino que quería comenzar. Aprendí muchísimo durante ese tiempo y conocí grandes profesionales, con quienes fue un honor trabajar.
                </h3>
              </div>

              <div id='box-main-trayectoria-content-border2023-holaIPF'>
                <h3>Quería que programar dejara de ser un pasatiempo y dedicarme exclusivamente a ello. Decidí rendir el examen de ingreso al Instituto Politécnico Formosa, en la tecnicatura en <span className='letraAzul'>Desarrollo de Software</span>. Solo las 50 mejores notas pueden ingresar al Instituto; mi examen tuvo como nota final 100%, compartiendo el primer lugar en la lista con dos Colegas.
                </h3>
                <img id='notasImg' src={notasPolo} alt="" />
                <a href="/IPF-Ingreso-2023.pdf" download="IPF-Ingreso-2023.pdf">Descargar lista</a>
                <h3>De esta forma, volví a ser un estudiante a tiempo completo, pero esta vez con la seguridad de que era el inicio de lo que durante muchos años había imaginado alcanzar.
                </h3>
                <img className='imgLogoIPF2024' src={logoIPF} alt="" />
                <div id='carouselCursado' className="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={cursado1} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={cursado2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={cursado3} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={cursado4} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={cursado5} className="d-block w-100" alt="..."/>
                      </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCursado" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselCursado" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                </div>

              </div>


            </div>
          )}
          {year === "2022" && (
            <div id='box-main-trayectoria-content-border2022' className='animate__animated animate__bounceInRight'>

              <div id='carouselBoloActivo' className="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={bolo} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={bolo1} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={bolo3} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={bolo2} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={bolo4} className="d-block w-100" alt="..."/>
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselBoloActivo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselBoloActivo" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div id='box-main-trayectoria-content-border2022-text'>
                <h3>Durante seis años y medio, trabajé como Ingeniero Industrial en la empresa Bolognino S.A., en Córdoba Capital.</h3>
                <a href="https://www.instagram.com/bolognino.preimpresion.flexo/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram/> Bolognino S.A.</a>
                <h3>Era el encargado de Logística y Programación de la Producción. Mis principales funciones eran:</h3>
                <ul>
                  <li>Planificación de las prioridades de producción en cada sector, según los productos a fabricar y las condiciones de elaboración que estos implicaban.</li>
                  <li>Gestión de los medios y métodos de entrega, según cada caso.</li> <li>Contacto con los clientes para informarles las fechas de entrega.</li>
                  <li>Elaboración de informes sobre el estado y los resultados de producción, permitiendo modificaciones y mejoras.</li>
                </ul>
              </div>
              <div id='box-main-trayectoria-content-border2022-boxEstudios'>
                <h3>Durante estos años, siempre me mantuve estudiando a la par de mi trabajo. He llegado al quinto año de la carrera de <span className='letraAzul'>Ingeniería Industrial</span> en la Universidad Tecnológica Nacional de Córdoba, al segundo año de <span className='letraAzul'>Ingeniería en Sistemas</span> en la misma facultad, y posteriormente me fui introduciendo en la programación web a través de distintos cursos, además de haber aprendido muchas cosas de manera autodidacta.    
                </h3>
                <img id='logo-UTN' src={logoUTN} alt="" />
                <img id='img-frente-utn' src={frenteUTN} alt="" />
              </div>
              
            </div>
          )}
          {year === "2016" && (
            <div id='box-main-trayectoria-content-border2016' className='animate__animated animate__bounceInRight'>
              <img src={logoWD} alt="" />
            </div>
          )}

          </div>

        </div>
      </div>


      


    </div>
  )
}
