import './css/Conocimientos.css'
import { useDispatch } from 'react-redux';
import { home } from '../store/ui/uiSlice';

import { ImStatsBars2 } from "react-icons/im";
import { GiProgression } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";

import imgDeveloper from '../assets/softDeve.jpg'
import imgAptitudes from '../assets/ing.jpg'
import 'animate.css';

import {Skill} from './Skill.jsx'

export const Conocimientos = () => {

  const dispatch = useDispatch();
  
  return (
    <div id='box-main-conocimientos' className='animate__animated animate__zoomIn'>

      <div id='boxMain-conocimientos-volver'>
        <button className='boton-lila-chico' onClick={() => dispatch(home())}>Volver</button>

      </div>

      <div id='boxMain-developer'>

        <div id='boxMain-developer-img'>
          <img src={imgDeveloper} alt="" />
        </div>

        <div id='boxMain-developer-skills'>

          <div id='boxMain-developer-skills-textOne'>
            <p>Los lenguajes y las tecnologías que estoy utilizando actualmente en mis proyectos son:</p>
          </div>

          <div id='boxMain-developer-skills-frontDev'>

            <div id='boxMain-developer-skills-frontDev-text'>
              <p>Frontend:</p>
            </div>
            <div id='boxMain-developer-skills-frontDev-icons'>
              <Skill technology="React" />
              <Skill technology="JS" />
              <Skill technology="Bootstrap" />
              <Skill technology="GoogleMaps" />
              <Skill technology="HTML" />
              <Skill technology="CSS" />
            </div>
          </div>

          <div id='boxMain-developer-skills-backDataBaseDev'>
            
            <div id='boxMain-developer-skills-backDev'>
              <div id='boxMain-developer-skills-backDev-text'>
                <p>Backend:</p>
              </div>
              <div id='boxMain-developer-skills-backDev-icons'>
                <Skill technology="NodeJS" />
                <Skill technology="Express" />
              </div>
            </div>
            
            <div id='boxMain-developer-skills-dataBaseDev'>
              <div id='boxMain-developer-skills-dataBaseDev-text'>
                <p>DataBase:</p>
              </div>
              <div id='boxMain-developer-skills-dataBaseDev-icons'>
                <Skill technology="MySQL" />
                <Skill technology="MongoDB" />
              </div>

            </div>

          </div>

          <div id='boxMain-developer-skills-verControlDesignDev'>

            <div id='boxMain-developer-skills-verControlDev'>
              <div id='boxMain-developer-skills-verControlDev-text'>
                <p>Version Control:</p>
              </div>
              <div id='boxMain-developer-skills-verControlDev-icons'>
                <Skill technology="Git" />
                <Skill technology="GitHub" />
              </div>
            </div>

            <div id='boxMain-developer-skills-designDev'>
              <div id='boxMain-developer-skills-designDev-text'>
                <p>Design:</p>
              </div>
              <div id='boxMain-developer-skills-designDev-icons'>
                <Skill technology="Illustrator" />
                <Skill technology="Photoshop" />
              </div>
            </div>

          </div>

          <div id='boxMain-developer-skills-textTwo'>
            <p>Además, tengo conocimientos en:</p>
          </div>

          <div id='boxMain-developer-skills-extraDev'>
            <div id='boxMain-developer-skills-extraDev-firstBox'>
              <Skill technology="ReactNative" />
              <Skill technology="PHP" />
              <Skill technology="Python" />
              <Skill technology="Typescript" />
            </div>
            <div id='boxMain-developer-skills-extraDev-secondBox'>
              <Skill technology="Trello" />
              <Skill technology="Jira" />
            </div>
            <div id='boxMain-developer-skills-extraDev-thirdBox'>
              <Skill technology="Docker" />
              <Skill technology="Socket.io" />
              <Skill technology="Tensorflow" />
            </div>
            <div id='boxMain-developer-skills-extraDev-fourthBox'>
              <Skill technology="AutoCAD" />
            </div>
          </div>

        </div>

      </div>

      <div id='boxMain-Aptitudes'>

        <div id='boxMain-Aptitudes-img'>
          <img src={imgAptitudes} alt="" />
        </div>
        <div id='boxMain-Aptitudes-text'>

          <div id='boxMain-Aptitudes-text-textOne'>
            <p>Mi experiencia trabajando como Ingeniero Industrial durante 6 años y medio, me brindo muchas habilidades, tanto Técnicas como Blandas:</p>
          </div>

          <div className='boxMain-Aptitudes-text-car'>
            <div className='boxMain-Aptitudes-text-car-icon'>
              <p><ImStatsBars2 /></p>
            </div>
            <div className='boxMain-Aptitudes-text-car-text'>
              <p>Conocimiento avanzado de Estadísticas y Matemáticas</p>
            </div>
          </div>

          <div className='boxMain-Aptitudes-text-car'>
            <div className='boxMain-Aptitudes-text-car-icon'>
              <p><GiProgression /></p>
            </div>
            <div className='boxMain-Aptitudes-text-car-text'>
              <p>Análisis de resultados financieros y productivos</p>
            </div>
          </div>

          <div className='boxMain-Aptitudes-text-car'>
            <div className='boxMain-Aptitudes-text-car-icon'>
              <p><TbReportAnalytics /></p>
            </div>
            <div className='boxMain-Aptitudes-text-car-text'>
              <p>Elaboración de Informes</p>
            </div>
          </div>

          <div className='boxMain-Aptitudes-text-car'>
            <div className='boxMain-Aptitudes-text-car-icon'>
              <p><FaPeopleGroup /></p>
            </div>
            <div className='boxMain-Aptitudes-text-car-text'>
              <p>Liderazgo y manejo de personal</p>
            </div>
          </div>

          <div className='boxMain-Aptitudes-text-car'>
            <div className='boxMain-Aptitudes-text-car-icon'>
              <p><GiTeacher /></p>
            </div>
            <div className='boxMain-Aptitudes-text-car-text'>
              <p>Aptitud para transmitir conocimientos y capacitar personal </p>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
