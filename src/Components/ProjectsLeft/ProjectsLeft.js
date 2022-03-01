// Text Box on Left

export default function ProjectsLeft({
  title,
  liveSite,
  sourceCode,
  desc,
  devWith,
  img,
}) {
  return (
    <article className="project-item">
      <div className="project-text project-text-left">
        <h3 className="project-title">{title}</h3>
        <div className="project-desc">
          <p>{desc}</p>
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
        </div>
        <p className="project-skills">
          <span className="developed-with"> Developed With: </span> <br />
          <span className="devWith-skills">{devWith}</span>
        </p>
      </div>
      <div className="project-img-container project-img-left">
        <a href={liveSite} target="_blank">
          <img className="project-img" src={img} alt={title} />
          <div className="link-to"></div>
        </a>
      </div>
    </article>
  );
}
