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
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { DiGulp, DiJava } from "react-icons/di";

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
    name: "React",
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
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    mark: 2,
  },
  {
    icon: <SiStyledcomponents />,
    name: "Styled Components",
    mark: 2,
  },
  {
    icon: (
      <>
        <SiSass /> <DiGulp />
      </>
    ),
    name: "Sass w/ Gulp",
    mark: 2,
    isMain: true,
  },
  {
    icon: <i className="fab fa-git-alt"></i>,
    name: "Git",
    mark: 2,
  },
  {
    icon: (
      <>
        <i className="fab fa-chrome"></i>
        <i className="fas fa-tools"></i>
      </>
    ),
    name: "Chrome DevTools",
    mark: 2,
  },
  {
    icon: <FiFigma />,
    name: "Figma",
    mark: 2,
  },
  {
    icon: <SiFramer />,
    name: "Framer",
    mark: 2,
  },
  {
    icon: <SiMaterialui />,
    name: "Material UI",
    mark: 2,
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    mark: 2,
  },
  {
    icon: <AiFillApi />,
    name: "REST API's",
    mark: 2,
  },
  {
    name: "React Context",
    mark: 2,
  },
  {
    icon: <DiJava />,
    name: "Java",
    mark: 2,
  },
  {
    icon: <SiCypress />,
    name: "Cypress",
    mark: 2,
  },
  {
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
    mark: 2,
  },
];

export default skills;
