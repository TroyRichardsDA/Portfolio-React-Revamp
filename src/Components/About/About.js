export default function About() {
  return (
    <section id="about">
      <div className="about-wrapper">
        <h2 className="about-header">
          <i className="header-icon fas fa-user"></i> About
        </h2>
        <h2 className="about-subheader">
          Hello, <br />
          <small>(...again?)</small>
        </h2>

        <div className="about-content">
          <div className="about-desc">
            <p>
              Hello again{" "}
              <small>
                (3<sup>rd</sup> time but who's counting...){" "}
              </small>
              ! My name is Troy Richards, and I have recently started my journey
              to becoming a Frontend Developer. After Covid-19 caused me to lose
              my job as a server, I began my hunt for a more stable job. I
              landed a job at Publix. However, it did last long due to an
              unfortunate injury. Thus I began my hunt for at-home work and came
              upon Frontend Development. Every day that I can, I am looking for
              ways to expand my knowledge and become even better at Development.
            </p>
            <p>
              Although I have a degree in Audio Production granted by Full Sail
              University, I have decided to pursue a career in frontend
              development as I find it more enjoyable. Every day that I can, I
              expand my knowledge with the help of Scrimba, SkillCrush,
              Frontmentor, YouTube, and Google
              <small>(The chad of the group)</small>.
            </p>
            <p>
              <span className="important-text">Currently</span>, I am looking
              for opportunities to work remotely as a{" "}
              <span className="important-text">Frontend Developer </span>{" "}
              full-time, part-time, or as an intern.
            </p>
          </div>
          <div className="about-img"></div>
        </div>
      </div>
    </section>
  );
}
