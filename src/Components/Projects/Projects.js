import React from "react";
import Project from "./Project/Project";
import {
  Container,
  Header,
  ProjectsContainer,
  SmallText,
  SubHeader,
} from "./ProjectsStyles";

const Projects = () => {
  const skillCrush = "https://skillcrush.com/";

  const frontendMentor = "https://www.frontendmentor.io/home";

  return (
    <Container id="projects">
      <Header>
        <i className="header-icon fas fa-code"></i> Projects
      </Header>
      <SubHeader>
        Some things I've built.{" "}
        <SmallText>
          {" "}
          <br />
          <br />
          Pssst... Hey uh... hover over me: <br />{" "}
          <i className="fas fa-window-restore"></i> = live site <br />
          <i className=" fas fa-file-code"></i> = Source Code
        </SmallText>
      </SubHeader>
      <ProjectsContainer>
        <Project
          title="Github Showcase"
          img={require("../../images/github-repo-display.png")}
          liveSite="https://ayetone.github.io/github-repo/"
          sourceCode="https://github.com/AyeTone/github-repo"
          desc={
            <>
              This project is an application that displays Github users' stats.
              This application has the option of choosing a different user or
              searching through the repository list. To build this app, I used{" "}
              <span className="skills-used"> React </span>,{" "}
              <span className="skills-used"> Sass </span>, and{" "}
              <span className="skills-used"> REST APIs </span>.
            </>
          }
          devWith="React, REST API, Sass"
        />
        <Project
          title="Time-Tracking-Dashboard"
          img={require("../../images/time-tracking-dashboard.png")}
          liveSite="https://ayetone.github.io/Time-Tracking-Dashboard/"
          sourceCode="https://github.com/AyeTone/Time-Tracking-Dashboard"
          desc={
            <>
              This project is an app that changes its presented times depending
              upon user selection. A javascript file provides the times in JSON
              format, which I then store in a state for further usage. To
              complete this challenge presented by{" "}
              <a href={frontendMentor} className="important-text-link">
                {" "}
                Frontend Mentor{" "}
              </a>
              , I used <span className="skills-used"> React </span>,{" "}
              <span className="skills-used"> Context API </span>, and{" "}
              <span className="skills-used"> Styled Components </span>.
            </>
          }
          devWith="React, Styled Components, Context API"
        />
        <Project
          title="Revamped Portfolio"
          img={require("../../images/revamp-portfolio.png")}
          liveSite="https://ayetone.github.io/Portfolio-React-Revamp/"
          sourceCode="https://github.com/AyeTone/Portfolio-React-Revamp"
          desc={
            <>
              A revamp of my portfolio. I rebuilt my portfolio site into a{" "}
              <span className="skills-used">React</span> app using the knowledge
              I acquired through{" "}
              <a
                href="https://scrimba.com/dashboard?tab=overview"
                className="important-text-link"
              >
                Scrimba
              </a>
              , and{" "}
              <a href={skillCrush} className="important-text-link">
                Skillcrush
              </a>
              . Although the design is not mine (inspired by{" "}
              <a
                className="important-text-link"
                href="https://brittanychiang.com/"
                target="_"
              >
                Brittany Chiang's
              </a>{" "}
              website), the code itself is mine.{" "}
              <a
                className="important-text-link"
                href="https://ayetone.github.io/Portfolio/"
              >
                Here
              </a>{" "}
              is a link to my old portfolio for reference of my improved skills.
            </>
          }
          devWith="React, Styled Components"
        />
        <Project
          title="Advice Gen App"
          img={require("../../images/advice-gen.png")}
          liveSite="https://github.com/AyeTone/Advice-Gen-App"
          sourceCode="https://ayetone.github.io/Advice-Gen-App/"
          desc={
            <>
              {" "}
              This is app provides random advice provided by an API. This
              project was a challenge provided by{" "}
              <a href={frontendMentor} className="important-text-link">
                {" "}
                Frontend Mentor
              </a>
              . I used this challenge as an opportunity to learn and practice my
              skills with <span className="skills-used">
                {" "}
                Tailwind{" "}
              </span> and <span className="skills-used"> React </span>.
            </>
          }
          devWith="React, Tailwind, API"
        />
        <Project
          title="Sticky Notes"
          img={require("../../images/notes.png")}
          liveSite="https://6vl2y.csb.app/"
          sourceCode="https://codesandbox.io/s/6vl2y"
          desc={
            <>
              A Sticky Note app capable of saving rendered notes to the local
              storage. The design/bolierplate was provided by{" "}
              <a href={skillCrush} className="important-text-link">
                Skillcrush
              </a>{" "}
              while I programmed the <span className="skills-used">React</span>{" "}
              and <span className="skills-used">CSS</span> needed.
            </>
          }
          devWith="React, CSS"
        />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
