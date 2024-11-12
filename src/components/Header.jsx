import './css/Header.css'

import { ImExit } from "react-icons/im";


export const Header = () => {

  return (
    <div id='box-header-main'>
      <div id='box-header-main-center'>

        <div id='box-header-logo'>
          <h2>Britez Lucas Gastón</h2>
        </div>

        <div id='box-header-botonera'>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler fondo-milk" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Experiencia</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Proyectos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contacto</a>
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
