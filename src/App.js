import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import ProjectsRight from "./Components/ProjectsRight/ProjectsRight";
import ProjectsLeft from "./Components/ProjectsLeft/ProjectsLeft";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import logo from "./logo.svg";

function App() {
  const skillCrush = "https://skillcrush.com/";

  return (
    <div className="App">
      <Nav logo={logo} />
      <Header />
      <Skills />
      <section id="projects">
        <h2 className="projects-header">
          <i className="header-icon fas fa-code"></i> Projects
        </h2>
        <p className="projects-subtitle">
          Some things I've built.{" "}
          <small>
            {" "}
            <br />
            <br />
            Pssst... Hey uh... hover over me: <br />{" "}
            <i className="fas fa-window-restore"></i> = live site <br />
            <i className=" fas fa-file-code"></i> = Source Code
          </small>
        </p>
        <div className="project-area">
          <ProjectsRight
            title="Revamped Portfolio"
            img={require("./images/revamp-portfolio.png")}
            liveSite="https://ayetone.github.io/Portfolio-React-Revamp/"
            sourceCode="https://github.com/AyeTone/Portfolio-React-Revamp"
            desc={
              <>
                A revamp of my portfolio. I rebuilt my portfolio site into a{" "}
                <span className="skills-used">React</span> app using the
                knowledge I acquired through{" "}
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
                is a link to my old portfolio for reference of my improved
                skills.
              </>
            }
            devWith="React, CSS"
          />
          <ProjectsLeft
            title="Repo Gallery"
            img={require("./images/repo-gallery.png")}
            liveSite="https://ayetone.github.io/github-repo-gallery/"
            sourceCode="https://github.com/AyeTone/github-repo-gallery"
            desc={
              <>
                With the help of{" "}
                <a
                  href={skillCrush}
                  target="_blank"
                  className="important-text-link"
                >
                  Skillcrush
                </a>
                , I was able to build a gallery of all repos posted on Github.
                The design/bolierplate was provided by, Skillcrush and I
                programmed the <span className="skills-used"> Javascript</span>{" "}
                and routed the <span className="skills-used"> API's </span>{" "}
                needed.
              </>
            }
            devWith="Javascript, API"
          />
          <ProjectsRight
            title="Sticky Notes"
            img={require("./images/notes.png")}
            liveSite="https://6vl2y.csb.app/"
            sourceCode="https://codesandbox.io/s/6vl2y"
            desc={
              <>
                A Sticky Note app capable of saving rendered notes to the local
                storage. The design/bolierplate was provided by{" "}
                <a href={skillCrush} className="important-text-link">
                  Skillcrush
                </a>{" "}
                while I programmed the{" "}
                <span className="skills-used">React</span> and{" "}
                <span className="skills-used">CSS</span> needed.
              </>
            }
            devWith="React, CSS"
          />
          <ProjectsLeft
            title="Guess-The-Word"
            img={require("./images/word-guess.png")}
            liveSite="https://ayetone.github.io/guess-the-word/"
            sourceCode="https://github.com/AyeTone/guess-the-word"
            desc={
              <>
                A word guessing game with a set amount of guesses allowed before
                it's game over. The words are fetched from an{" "}
                <span className="skills-used">API</span> at random inside of
                this <span className="skills-used">React</span> app. The
                design/bolierplate was provided by{" "}
                <a href={skillCrush} className="important-text-link">
                  Skillcrush
                </a>
                .
              </>
            }
            devWith="React, CSS"
          />
          <ProjectsRight
            title="Advice"
            img={require("./images/advice-gen.png")}
            liveSite="https://github.com/AyeTone/Advice-Gen-App"
            sourceCode="https://ayetone.github.io/Advice-Gen-App/"
            desc={
              <>
                {" "}
                This is app provides random advice provided by an API. This
                project was a challenge provided by{" "}
                <a
                  href="https://www.frontendmentor.io/home"
                  className="important-text-link"
                >
                  {" "}
                  Frontend Mentor
                </a>
                . I used this challenge as an opportunity to learn and practice
                my skills with <span className="skills-used">
                  {" "}
                  Tailwind{" "}
                </span>{" "}
                and <span className="skills-used"> React </span>.
              </>
            }
            devWith="React, CSS"
          />
        </div>
      </section>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
