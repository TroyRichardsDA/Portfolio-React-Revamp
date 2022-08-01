import React from "react";
import Skill from "./UI/Skill";

const Skills = () => {
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
      icon: <i className="fa-brands fa-square-js"></i>,
      name: "JavaScript",
      mark: 1,
      isMain: true,
    },
    {
      icon: <i className="fa-brands fa-sass"></i>,
      name: "Sass",
      mark: 2,
      isMain: true,
    },
    {
      icon: <i className="fab fa-git-alt"></i>,
      name: "Git",
      mark: 2,
    },
  ];

  return (
    <div className="about__skills">
      {skills.map((skill, ind) => (
        <Skill skill={skill} key={ind} />
      ))}
    </div>
  );
};

export default Skills;
