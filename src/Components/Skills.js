import Skill from "./UI/Skill";
import Html from "../assets/html.webp";
import CSS from "../assets/css.webp";
import React from "../assets/react.webp";
import Js from "../assets/js.webp";
import Ts from "../assets/typescript.webp";
import Sass from "../assets/sass.webp";
import Git from "../assets/git.webp";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      img: Html,
    },
    {
      name: "CSS3",
      img: CSS,
    },
    {
      name: "React",
      img: React,
    },
    {
      name: "JavaScript",
      img: Js,
    },
    {
      name: "TypeScript",
      img: Ts,
    },
    {
      name: "Sass",
      img: Sass,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="skills"
    >
      <div className="skills__container container">
        <h2 className="section__title skills__title">
          <b className="important-text">S</b>kills
        </h2>
        <p className="skills__subtitle">
          I made a list of things that I know but you don't know that I know but
          are going to know after looking at it. You know what I mean?
        </p>
        <div className="skills__langs">
          {skills.map((skill, ind) => (
            <Skill skill={skill} key={ind} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
