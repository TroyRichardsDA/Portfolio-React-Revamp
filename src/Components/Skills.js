export function Skills() {
  return (
  <section id="skills">
      <h2 className="skills-header"><i class="fas fa-tasks"></i>Skills</h2>
    <div className="skills-content">
      <div className='skills-container'>
        <h3 className="skills-subheader">Developer Skills</h3>
        <div className="devskills-wrap">
          <p className="skill"><i className="fab fa-html5"></i> HTML <i className="fab fa-html5"></i></p>
          <p className="skill"><i className="fab fa-css3"></i> CSS <i className="fab fa-css3"></i></p>
          <p className="skill"><i class="fab fa-js"></i> JavaScript <i className="fab fa-js"></i></p>
          <p className="skill"><i className="fab fa-react"></i> React <i className="fab fa-react"></i> </p>
        </div>
      </div>
      <div className="tools-container">
        <h3 className="tool-subheader">Tools & Platforms</h3>
        <div className="tools-wrap">
          <p className="tool"><i className="fab fa-git-alt"></i> Git | GitHub <i className="fab fa-github-square"></i></p>
          <p className="tool"><i className="fab fa-chrome"></i> Chrome DevTools <i className="fas fa-tools"></i></p>
          <p className="tool"><i className="fab fa-codepen"></i> Codepen <i className="fab fa-codepen"></i></p>
          <p className="tool"><i className="fas fa-code-branch"></i> Github Pages <i className="fas fa-code-branch"></i></p>
          <p className="tool"><i className="far fa-image"></i> Adobe Photoshop <i className="fas fa-image"></i></p>
          <p className="tool"><i class="fa-brands fa-figma"></i> Figma <i class="fa-brands fa-figma"></i></p>
        </div>
      </div>
    </div>
  </section> 
  )
}