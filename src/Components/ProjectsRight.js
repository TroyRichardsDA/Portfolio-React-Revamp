

export function ProjectsRight({title, liveSite, sourceCode, desc, devWith, img}) {


    return (
        <article className="project-item">

        <div className="project-img-container">
          <a href={liveSite} target="_blank">
            <img class="project-img" src={img} alt={title}/>
          <div className="link-to">
          </div>
          </a>
        </div>

        
         <div className="project-text">
            <h3 className="project-title">{title}</h3>
             <p className="project-desc">
               {desc}
               <div className="live-source">
                <div>
                  <a className="project-link" href={liveSite} target="_blank">
                  <i className="fas fa-window-restore"></i>
                  </a>
                </div>
                <div>
                  <a className="project-link" href={sourceCode} target="_blank">
                  <i className=" fas fa-file-code"></i>
                  </a>
                </div>
              </div>
             </p>
             <p className="project-skills">
              <span className="developed-with"> Developed With: </span> <br/>
              <span className="devWith-skills">{devWith}</span>
             </p>
         </div>
      </article>
    )
}