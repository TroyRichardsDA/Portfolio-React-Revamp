import Nav from './Components/Nav';
import { Header } from './Components/Header';
import { Skills } from './Components/Skills';
import { ProjectsRight } from './Components/ProjectsRight';
import { ProjectsLeft } from './Components/ProjectsLeft';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import logo from "./logo.svg"




function App() {

  const skillCrush = 'https://skillcrush.com/'

  
  return (
    <div className="App">
      <Nav logo={logo}/>
      <Header />
      <Skills />
      <section id="projects">
        <h2 class="projects-header">
          <i class="header-icon fas fa-code"></i> Projects
        </h2>
        <p class="projects-subtitle">
          Some things I've built. <small> <br/><br/>
          Pssst... Hey uh: <br/> <i class="fas fa-window-restore"></i> = live site <br/> 
          <i class=" fas fa-file-code"></i> = Source Code</small>
        </p>
        <div className="project-area">
          <ProjectsRight 
            title= 'Revamped Portfolio'
            img={require('./images/revamp-portfolio.png')}
            liveSite='https://ayetone.github.io/Portfolio-React-Revamp/'
            sourceCode="https://github.com/AyeTone/Portfolio-React-Revamp"
            desc={<>A revamp of my portfolio. I rebuilt my portfolio site 
            into a react app using the knowledge I acquired through Scrimba 
            and <a href={skillCrush} className="important-text-link">Skillcrush</a>. 
            Although the design is not mine (inspired 
            by <a className="important-text-link" href="https://brittanychiang.com/" target="_">Brittany Chiang's</a> website),
            the code itself is mine.</>}
            devWith = 'React, CSS'
          />
          <ProjectsLeft 
            title= 'Repo Gallery'
            img={require('./images/repo-gallery.png')}
            liveSite='https://ayetone.github.io/github-repo-gallery/'
            sourceCode="https://github.com/AyeTone/github-repo-gallery"
            desc={<>With the help of <a href={skillCrush} target="_blank" className="important-text-link">Skillcrush</a>, 
            I was able to build a gallery of all repos posted on Github. 
            The design/bolierplate was provided by, Skillcrush and I programmed 
            the <span className="skills-used"> Javascript</span> and 
            routed the <span className="skills-used"> API's </span> needed.</>}
            devWith = 'Javascript, API'
          />
          <ProjectsRight 
            title= 'Sticky Notes'
            img={require('./images/notes.png')}
            liveSite='https://6vl2y.csb.app/'
            sourceCode="https://codesandbox.io/s/6vl2y"
            desc={<>A Sticky Note app capable of saving rendered notes to the local storage.
             The design/bolierplate was provided by <a href={skillCrush} className="important-text-link">Skillcrush</a> while
              I programmed the <span className="skills-used">React</span> and <span className="skills-used">CSS</span> needed.</>}
            devWith = 'React, CSS'
          />
          <ProjectsLeft 
            title= 'Guess-The-Word'
            img={require('./images/word-guess.png')}
            liveSite='https://ayetone.github.io/guess-the-word/'
            sourceCode="https://github.com/AyeTone/guess-the-word"
            desc={<>A word guessing game with a set amount of guesses allowed before it's game over. 
            The words are fetched from an <span className="skills-used">API</span> at random inside of 
            this <span className="skills-used">React</span> app. The design/bolierplate was 
            provided by <a href={skillCrush} className="important-text-link">Skillcrush</a></>}
            devWith = 'React, CSS'
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
