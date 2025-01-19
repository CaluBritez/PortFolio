import './css/Skill.css'

import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoDocker } from "react-icons/io5";
import { SiSocketdotio } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiAutocad } from "react-icons/si";




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
    case "HTML":
      icon = <FaHtml5 />;
      text = "HTML";
      break;
    case "CSS":
      icon = <FaCss3Alt />;
      text = "CSS";
      break;
    case "NodeJS":
      icon = <FaNodeJs />;
      text = "NodeJS";
      break;
    case "Express":
      icon = <SiExpress />;
      text = "Express";
      break;
    case "MySQL":
      icon = <TbBrandMysql />;
      text = "MySQL";
      break;
    case "MongoDB":
      icon = <SiMongodb />;
      text = "MongoDB";
      break;
    case "Sequelize":
      icon = <SiSequelize />;
      text = "Sequelize";
      break;
    case "Mongoose":
      icon = <SiMongoose />;
      text = "Mongoose";
      break;
    case "Git":
      icon = <FaGitAlt />;
      text = "Git";
      break;
    case "GitHub":
      icon = <FiGithub />;
      text = "Github";
      break;
    case "Illustrator":
      icon = <SiAdobeillustrator />;
      text = "Illustrator";
      break;
    case "Photoshop":
      icon = <SiAdobephotoshop />;
      text = "Photoshop";
      break;
    case "ReactNative":
      icon = <TbBrandReactNative />;
      text = "React Native";
      break;
    case "PHP":
      icon = <SiPhp />;
      text = "PHP";
      break;
    case "Python":
      icon = <FaPython />;
      text = "Python";
      break;
    case "Typescript":
      icon = <TbBrandTypescript />;
      text = "Typescript";
      break;
    case "Docker":
      icon = <IoLogoDocker />;
      text = "Docker";
      break;
    case "Socket.io":
      icon = <SiSocketdotio />;
      text = "Socket.io";
      break;
    case "Tensorflow":
      icon = <SiTensorflow />;
      text = "Tensorflow";
      break;
    case "Trello":
      icon = <FaTrello />;
      text = "Trello";
      break;
    case "Jira":
      icon = <SiJira />;
      text = "Jira";
      break;
    case "AutoCAD":
      icon = <SiAutocad />;
      text = "AutoCAD";
      break
    






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
