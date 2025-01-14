import { useSelector, useDispatch } from 'react-redux';
import { home, conocimientos, proyectos, trayectoria, contacto } from './store/ui/uiSlice';

import './App.css'


import { Header } from './components/Header.jsx';

import { Home } from './components/Home.jsx';
import { Conocimientos } from './components/Conocimientos.jsx';

import Footer from './components/Footer.jsx';

function App() {

  const { isModalOpen, seccion } = useSelector(state => state.ui)
  const dispatch = useDispatch();

  return (
    <>
      <div id='box-body-home'>

        <Header />

        { /* */}

        <Home />

        <Footer />

      </div>
      
    </>
  )
}

export default App
