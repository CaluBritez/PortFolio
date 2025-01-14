import { useSelector } from 'react-redux';

import './App.css'


import { Header } from './components/Header.jsx';

import { Home } from './components/Home.jsx';
import { Conocimientos } from './components/Conocimientos.jsx';
import { Proyectos } from './components/Proyectos.jsx';
import { Trayectoria } from './components/Trayectoria.jsx';
import { Contacto } from './components/Contacto.jsx';

import Footer from './components/Footer.jsx';

function App() {

  const { isModalOpen, seccion } = useSelector(state => state.ui)

  const renderSeccion = () => {
    switch (seccion) {
      case 'home':
        return <Home />;
      case 'conocimientos':
        return <Conocimientos />;
      case 'proyectos':
        return <Proyectos />;
      case 'trayectoria':
        return <Trayectoria />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Home />; // Render por defecto si `seccion` no coincide
    }
  };

  return (
    <>
      <div id='box-body-home'>

        <Header />
        {renderSeccion()}
        <Footer />

      </div>
      
    </>
  )
}

export default App
