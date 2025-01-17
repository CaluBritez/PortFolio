import './css/Conocimientos.css'

import imgDeveloper from '../assets/softDeve.jpg'

import { FaReact } from "react-icons/fa";

export const Conocimientos = () => {

  
  return (
    <div id='box-main-conocimientos'>

      <div id='boxMain-front-developer'>

        <div id='boxMain-front-developer-img'>
          <img src={imgDeveloper} alt="" />
        </div>

        <div id='boxMain-front-developer-skills'>
          <div id='boxMain-front-developer-skills-textOne'>
            <p>Los lenguajes y las tecnologías que estoy utilizando actualmente en mis proyectos son:</p>
          </div>
          <div id='boxMain-front-developer-skills-frontDev'>
            <div id='boxMain-front-developer-skills-frontDev-text'>
              <p>Frontend:</p>
            </div>
            <div id='boxMain-front-developer-skills-frontDev-icons'>
              <p><FaReact /></p>
            </div>
          </div>

        </div>

      </div>













      <div id='boxMain-back-developer'>

      </div>

      <div id='boxMain-extra-developer'>

      </div>

      <div id='boxMain-Aptitudes'>

      </div>

    </div>
  )
}
