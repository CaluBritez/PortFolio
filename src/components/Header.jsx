import './css/Header.css'

import { GoLightBulb } from "react-icons/go";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiJourney } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

import 'animate.css';


export const Header = () => {

  return (
    <div id='box-header-main'>

      <div id='box-header-main-center'>

        <div id='box-header-botonera' className='animate__animated animate__fadeInDown'>
          <nav className="navbar navbar-expand-lg botonResponsive">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><GoLightBulb /> Conocimientos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><AiOutlineDatabase /> Proyectos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><GiJourney /> Trayectoria</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><FaUser /> Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
             
      </div>
    </div>
  )
}
