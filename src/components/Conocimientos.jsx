import './css/Conocimientos.css'
import { useDispatch } from 'react-redux';
import { home } from '../store/ui/uiSlice';

import imgDeveloper from '../assets/softDeve.jpg'
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

      </div>

    </div>
  )
}
