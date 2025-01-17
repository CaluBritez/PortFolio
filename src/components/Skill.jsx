import './css/Skill.css'

import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";


export const Skill = ({ technology }) => {

  let icon = null;
  let text = "";

  switch (technology) {
    case "React":
      icon = <FaReact />;
      text = "React";
      break;
    case "JS":
      icon = <FaJsSquare />;
      text = "Javascript";
      break;
    case "Bootstrap":
      icon = <FaBootstrap />;
      text = "Bootstrap";
      break;
    case "GoogleMaps":
      icon = <SiGooglemaps />;
      text = "GoogleMaps";
      break;
    default:
      text = "Unknown";
  }

  return (

    <div id="skill-component">
      <p className='h2'>{icon}</p>
      <p>{text}</p>
    </div>
  )
}
