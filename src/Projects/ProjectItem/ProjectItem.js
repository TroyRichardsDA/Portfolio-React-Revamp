//Text box on Right

import { Container } from "./ProjectsItemStyles";

export default function ProjectItem({
  title,
  liveSite,
  sourceCode,
  desc,
  devWith,
  img,
}) {
  return (
    <Container className="project-item">
      <div className="project-img-container project-img-right">
        <a href={liveSite} target="_blank">
          <img className="project-img" src={img} alt={title} />
          <div className="link-to"></div>
        </a>
      </div>

      <div className="project-text project-text-right">
        <h3 className="project-title">{title}</h3>
        <div className="project-desc">
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
        </div>
        <p className="project-skills">
          <span className="developed-with"> Developed With: </span> <br />
          <span className="devWith-skills">{devWith}</span>
        </p>
      </div>
    </Container>
  );
}
