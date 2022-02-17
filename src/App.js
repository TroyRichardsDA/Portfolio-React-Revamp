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
            and Skillcrush. Although the design is not mine (inspired by <a className="important-text-link" href="https://brittanychiang.com/" target="_">Brittany Chiang's</a> website),
            the code itself is mine. I am still updating this project to 
            improve the current design and refactor the code to a more dry state.</>}
            devWith = 'React, CSS'
          />
          <ProjectsRight 
            title= 'Repo Gallery'
            img={require('./images/repo-gallery.png')}
            liveSite='https://ayetone.github.io/github-repo-gallery/'
            sourceCode="https://github.com/AyeTone/github-repo-gallery"
            desc={<>A revamp of my portfolio. I rebuilt my portfolio site 
            into a react app using the knowledge I acquired through Scrimba 
            and Skillcrush. Although the design is not mine (inspired by <a className="important-text-link" href="https://brittanychiang.com/" target="_">Brittany Chiang's</a> website),
            the code itself is mine. I am still updating this project to 
            improve the current design and refactor the code to a more dry state.</>}
            devWith = 'HTML, CSS, Github'
          />
          <ProjectsRight 
            title= 'Sticky Notes'
            img={require('./images/notes.png')}
            liveSite='https://6vl2y.csb.app/'
            sourceCode="https://codesandbox.io/s/6vl2y"
            desc={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt voluptas numquam quaerat.</>}
            devWith = 'HTML, CSS, React'
          />
          <ProjectsRight 
            title= 'Guess-The-Word'
            img={require('./images/word-guess.png')}
            liveSite='https://ayetone.github.io/guess-the-word/'
            sourceCode="https://github.com/AyeTone/guess-the-word"
            desc={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt voluptas numquam quaerat.</>}
            devWith = 'HTML, CSS, React'
          />
          <ProjectsRight 
            title= 'Unplugged'
            img={require('./images/unplugged.png')}
            liveSite='https://ayetone.github.io/responsive-unplugged-retreat/'
            sourceCode="https://github.com/AyeTone/3Paged-Responsive"
            desc={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt voluptas numquam quaerat.</>}
            devWith = 'HTML, CSS '
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
