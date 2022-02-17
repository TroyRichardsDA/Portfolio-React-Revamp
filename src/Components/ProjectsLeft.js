

export function ProjectsLeft({title, liveSite, sourceCode, desc, devWith, img}) {


    return (
        <article className="project-item">

        
         <div className="project-text">
            <h3 className="project-title">{title}</h3>
             <p className="project-desc">
               {desc}
             </p>
             <p className="project-skills">
              <span className="developed-with"> Developed With: </span> <br/>
              <span className="devWith-skills">{devWith}</span>
             </p>
             <div className="cardLinks">
{/*               <div>
                <a className="project-link" href={liveSite} target="_blank">
                  Live Page
                </a>
              </div>
              <div>
                <a className="project-link" href={sourceCode} target="_blank">
                  Source Code 
                </a>
              </div> */}
            </div>
         </div>

        <div className="project-img-container project-left">
          <a href={liveSite} target="_blank">
            <img class="project-img" src={img} alt={title}/>
          <div className="link-to">
{/*             <div>
              <a href={liveSite} target="_blank">
                <i className="icon-link fas fa-window-restore"></i>
              </a>
            </div>
            <div>
              <a href={sourceCode} target="_blank">
                <i className="icon-link fas fa-file-code"></i>
              </a>
            </div> */}
          </div>
          </a>
        </div>
      </article>
    )
}