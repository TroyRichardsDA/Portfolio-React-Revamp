import React from "react";
import Project from "./Project/Project";
import {
  Container,
  Header,
  ProjectsContainer,
  Headings,
  Wrapper,
} from "./ProjectsStyles";

const Projects = () => {
  const frontendMentor = "https://www.frontendmentor.io/home";

  return (
    <Container id="projects">
      <Wrapper>
        <Headings>
          <Header>
            <i className="header-icon fas fa-code"></i> Projects
          </Header>
        </Headings>
        <ProjectsContainer>
          <Project
            title="Github Showcase"
            img={require("../../images/github-repo-display.png")}
            liveSite="https://ayetone.github.io/github-repo/"
            sourceCode="https://github.com/AyeTone/github-repo"
            desc={
              <>
                This project is an application that displays Github users'
                stats. This application has the option of choosing a different
                user or searching through the repository list. To build this
                app, I used <span className="skills-used"> react </span>,{" "}
                <span className="skills-used"> sass w/ gulp </span>, and{" "}
                <span className="skills-used"> REST APIs </span>.
              </>
            }
            devWith="React, REST API, Sass w/ Gulp"
          />
          <Project
            title="Time-Tracking-Dashboard"
            img={require("../../images/time-tracking-dashboard.png")}
            liveSite="https://ayetone.github.io/Time-Tracking-Dashboard/"
            sourceCode="https://github.com/AyeTone/Time-Tracking-Dashboard"
            desc={
              <>
                This project is an app that changes its presented times
                depending upon user selection. A javascript file provides the
                times in JSON format, which I then store in a state for further
                usage. To complete this challenge presented by{" "}
                <a href={frontendMentor} className="important-text-link">
                  {" "}
                  Frontend Mentor{" "}
                </a>
                , I used <span className="skills-used"> react </span>, and{" "}
                <span className="skills-used"> styled components </span>.
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
                . I used this challenge as an opportunity to learn and practice
                my skills with <span className="skills-used">
                  {" "}
                  tailwind{" "}
                </span>{" "}
                and <span className="skills-used"> react </span>.
              </>
            }
            devWith="React, Tailwind, REST APIs"
          />
          <Project
            title="Taskify"
            img={require("../../images/to-do_list.png")}
            liveSite="https://ayetone.github.io/TodoList-App/"
            sourceCode="https://github.com/AyeTone/TodoList-App"
            desc={
              <>
                This project is an application that allows the set-up of a task
                list. The application allows the user to edit, delete, or mark a
                task as done. To complete this project I used{" "}
                <span className="skills-used"> react </span>,{" "}
                <span className="skills-used"> typescript </span>, and{" "}
                <span className="skills-used"> styled components </span>.
              </>
            }
            devWith="React, Styled Components, TypeScript"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
