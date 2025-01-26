import './css/Trayectoria.css'

import { useDispatch } from 'react-redux';

import { home } from '../store/ui/uiSlice';

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
        </div>
      </div>


      


    </div>
  )
}
