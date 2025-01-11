import './css/Home.css'
import imgMain from '../assets/mejorche.png'

import 'animate.css';


export const Home = () => {
  return (
    <div id='box-center-home' className='animate__animated animate__zoomIn'>

      <div id='box-home-img'>
        <img src={imgMain} alt="" />
      </div>

      <div id='box-home-texto'>
        <p>Hola!! Mi nombre es <span className='letraBeige'>Lucas Gaston Britez</span></p>
        <p>Soy Desarrollador de Software</p>
      </div>

    </div>
  )
}
