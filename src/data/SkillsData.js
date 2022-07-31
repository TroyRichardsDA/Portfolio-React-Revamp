import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiSass,
  SiFramer,
  SiMaterialui,
  SiBootstrap,
  SiCypress,
  SiAdobephotoshop,
  SiRedux,
  SiJest,
  SiReactrouter,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { DiGulp } from "react-icons/di";

const skills = [
  {
    icon: <i className="fab fa-html5"></i>,
    name: "HTML",
    mark: 1,
  },
  {
    icon: <i className="fab fa-css3"></i>,
    name: "CSS",
    mark: 1,
  },
  {
    icon: <i className="fab fa-react"></i>,
    name: "React (Hooks+)",
    mark: 1,
    isMain: true,
  },
  {
    icon: <i className="fab fa-js"></i>,
    name: "JavaScript",
    mark: 1,
    isMain: true,
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    mark: 1,
    isMain: true,
  },

  {
    icon: <SiSass />,
    name: "Sass",
    mark: 2,
    isMain: true,
  },
  {
    icon: <i className="fab fa-git-alt"></i>,
    name: "Git",
    mark: 2,
  },
  {
    icon: <AiFillApi />,
    name: "REST API's",
    mark: 2,
  },
  {
    icon: <SiReactrouter />,
    name: "React Router",
    mark: 2,
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    mark: 2,
  },
];

export default skills;
