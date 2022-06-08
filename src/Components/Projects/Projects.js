import React from "react";
import Project from "./Project/Project";
import {
  Container,
  Header,
  ProjectsContainer,
  Headings,
  Wrapper,
  SubHeader,
  FYI,
  Brackets,
} from "./ProjectsStyles";

const Projects = () => {
  const frontendMentor = "https://www.frontendmentor.io/home";

  return (
    <Container id="projects">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Headings>
          <Header>
            <i className="header-icon fas fa-code"></i> Projects
          </Header>
        </Headings>

        <SubHeader>
          Just an fyi from the guy: <Brackets> [ </Brackets>
        </SubHeader>
        <FYI>
          {"{"} "Live Site": "<i className="fas fa-window-restore"></i>" {"}"},
        </FYI>
        <FYI>
          {"{"} "Source Code": "<i className=" fas fa-file-code"></i>" {"}"}
        </FYI>

        <SubHeader>
          <Brackets> ] </Brackets>
        </SubHeader>

        <ProjectsContainer>
          <Project
            title="REST Countries API"
            img={require("../../images/rest-countries-api.png")}
            liveSite="https://ayetone.github.io/rest-countries-api/"
            sourceCode="https://github.com/AyeTone/rest-countries-api"
            desc={
              <>
                {" "}
                This website displays the stats of countries around the world
                using the
                <a
                  href="https://restcountries.com/"
                  target="_blank"
                  className="important-text-link"
                  rel="noreferrer"
                >
                  REST Countries
                </a>{" "}
                API. The website allows users to search for a country via the
                searchbar and filter. This project was a challenge provided by{" "}
                <a href={frontendMentor} className="important-text-link">
                  {" "}
                  Frontend Mentor
                </a>
                . To complete this I used{" "}
                <span className="skills-used"> react</span> ,
                <span className="skills-used"> typescript</span>, and
                <span className="skills-used"> sass w/gulp</span>.
              </>
            }
            devWith="React, Sass w/gulp, Sass w/gulp"
          />
          <Project
            title="Ecommerce Product Page"
            img={require("../../images/ecommerce-product-page.png")}
            liveSite="https://ayetone.github.io/ecommerce-product-page/"
            sourceCode="https://github.com/AyeTone/ecommerce-product-page"
            desc={
              <>
                {" "}
                This app is a fake ecommerce product page. This project was a
                challenge provided by{" "}
                <a href={frontendMentor} className="important-text-link">
                  {" "}
                  Frontend Mentor
                </a>
                . I used this challenge as an opportunity to learn and practice
                my skills with <span className="skills-used"> react</span>,{" "}
                <span className="skills-used"> typescript</span>, and
                <span className="skills-used"> sass w/gulp</span>.
              </>
            }
            devWith="React, Sass w/gulp, Sass w/gulp"
          />
          <Project
            title="Interactive Comment Section"
            img={require("../../images/interactive-comment.png")}
            liveSite="https://ayetone.github.io/interactive-comment-section/"
            sourceCode="https://github.com/AyeTone/interactive-comment-section"
            desc={
              <>
                This project is a challenge from{" "}
                <a href={frontendMentor}>Frontendmentor.com</a>. The app can add
                messages to existing chat, reply to existing comments, dislike
                or like a comment, and allows the current user to delete or edit
                their comments. To complete this project I used{" "}
                <span className="skills-used"> react </span> and{" "}
                <span className="skills-used"> sass w/ gulp</span>.
              </>
            }
            devWith="React, Sass w/ Gulp"
          />
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
                app, I used <span className="skills-used"> react</span>, and{" "}
                <span className="skills-used"> sass w/ gulp</span>.
              </>
            }
            devWith="React, Sass w/ Gulp, REST API"
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
                  Frontend Mentor
                </a>
                , I used <span className="skills-used"> react</span>, and{" "}
                <span className="skills-used"> styled components</span>.
              </>
            }
            devWith="React, Styled Components"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
