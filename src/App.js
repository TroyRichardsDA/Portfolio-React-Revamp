import Nav from './Components/Nav';
import { Header } from './Components/Header';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { Contact } from './Components/Contact';




function App() {

  
  return (
    <div className="App">
      <Nav />
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
          <Projects />
        </div>
          <About />
          <Contact />
      </section>
    </div>
  );
}

export default App;
