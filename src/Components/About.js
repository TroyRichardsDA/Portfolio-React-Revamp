import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">
          <b className="important-text">A</b>bout
        </h2>

        <div className="about__text">
          <div className="about__text--base">
            <p className="about__text--para">
              Hello! My name is Troy Richards, and I am, what some would call, a{" "}
              <b className="important-text">Frontend Developer!!!!!!</b>
            </p>
            <p className="about__text--para">
              If you couldn't tell from the AMAZING animations so far, I have
              strong passion for developing websites with great user{" "}
              <b className="important-text">experiences.</b> As a mainly
              self-taught developer, I spent most of my free time learning and
              honing my skills to progress to the next level.
            </p>
            <p className="about__text--para">
              <b className="important-text">Currently</b>, I am looking for
              opportunities to work remotely as a{" "}
              <b className="important-text"> Frontend Developer</b>. Want to
              know what I can bring to your team? Just a bit more scrolling and
              you can{" "}
              <a href="#skills" className="important-text-link">
                find out!
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
