

export function Projects() {


    return (
        <article class="project-item">
            <h3 className="project-title"> GitHub Repo Gallery</h3>

        <div class="project-img-container">
          <a href="https://ayetone.github.io/github-repo-gallery/" target="_blank">
            <img class="project-img" src="img/repo-gallery.png" alt="Repo Gallery"/>
          </a>
          <div class="link-to">
            <div>
              <a href="https://ayetone.github.io/github-repo-gallery/" target="_blank">
                <i class="icon-link fas fa-window-restore"></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/AyeTone/github-repo-gallery" target="_blank">
                <i class="icon-link fas fa-file-code"></i>
              </a>
            </div>
          </div>
        </div>

        
         <div class="project-text">
             <p class="project-desc">
               Uses GitHub's API to pull data from my GitHub portfolio
               to create a gallery of repos. Visitors can click on each repo
               to see more details and a link to the repo.
             </p>
             <p class="project-skills">
              <span> Developed With: </span> <br/>
              <i class="fab fa-html5"></i> <i class="fab fa-css3"></i>  <i class="fab fa-github-square"></i>
             </p>
             <div class="cardLinks">
              <div>
                <a class="project-link" href="https://ayetone.github.io/github-repo-gallery/" target="_blank">
                  Live Page
                </a>
              </div>
              <div>
                <a class="project-link" href="https://github.com/AyeTone/github-repo-gallery" target="_blank">
                  Source Code 
                </a>
              </div>
            </div>
         </div>
      </article>
    )
}