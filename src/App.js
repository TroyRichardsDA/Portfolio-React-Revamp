import Nav from './Components/Nav';
import { Header } from './Components/Header';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
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
          <i class="fas fa-code"></i> Projects
        </h2>
        <p class="projects-subtitle">
          Some things I've built. <small> <br/><br/>
          Pssst... Hey uh: <br/> <i class="fas fa-window-restore"></i> = live site <br/> 
          <i class=" fas fa-file-code"></i> = Source Code</small>
        </p>
        <div className="project-area">
          <Projects 
            title= 'Revamped Portfolio'
            img='./img/revamp-portfolio.png'
            liveSite='https://ayetone.github.io/Portfolio-React-Revamp/'
            sourceCode="https://github.com/AyeTone/Portfolio-React-Revamp"
            desc={<>A revamp of my portfolio. I rebuilt my portfolio site 
            into a react app using the knowledge I acquired through Scrimba 
            and Skillcrush. Although the design is not mine (inspired by <a className="important-text-link" href="https://brittanychiang.com/" target="_">Brittany Chiang's</a> website),
            the code itself is mine. I am still updating this project to 
            improve the current design and refactor the code to a more dry state.</>}
            devWith = 'React, HTML, CSS'

          />
          <Projects 
            title= 'Github Repo Gallery'
            img='./img/repo-gallery.png'
            liveSite='https://ayetone.github.io/github-repo-gallery/'
            sourceCode="https://github.com/AyeTone/github-repo-gallery"
            desc="Uses GitHub's API to pull data from my GitHub portfolio
            to create a gallery of repos. Visitors can click on each repo
            to see more details and a link to the repo."
            devWith = 'Javascript, HTML, CSS'

          />
          <Projects 
            title='Sticky Notes'
            img='./img/notes.png'
            liveSite='https://6vl2y.csb.app/'
            sourceCode='https://codesandbox.io/s/6vl2y'
            desc='Greenfield project creating a Sticky notes web app. Uses
            multiple components to build the classic sticky note UI with
            the ability to add, edit, delete, and search for notes'
            devWith='HTML, CSS, React, Codepen'
          />
          <Projects 
            title='Guess-The-Word'
            img='./img/word-guess.png'
            liveSite='https://ayetone.github.io/guess-the-word/'
            sourceCode='https://github.com/AyeTone/guess-the-word'
            desc='A game where players guess the word by entering one letter at a time.
            If the player guesses the word correctly before running out of chances,
            they win and are prompted to play again.'
            devWith='HTML, CSS, Javascript'
          />
          <Projects 
            title='Unplugged'
            img='./img/unplugged.png'
            liveSite='https://ayetone.github.io/responsive-unplugged-retreat/'
            sourceCode='https://github.com/AyeTone/3Paged-Responsive'
            desc='A multi-page responsive website coded with Flexbox. This
            versatile design has several sections, including a cards design
            pattern, that can be repurposed for different sites.'
            devWith='HTML, CSS, '
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
