import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { useModalContext } from "../context/modalContext";
// import Skills from "./Skills";

const Skills = lazy(() => import("./Skills"));

function About() {
  const { toggleModal } = useModalContext();

  return (
    <section className="about" id="about">
      <motion.div
        className="about__container container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">
          <b className="important-text">A</b>bout
        </h2>

        <div className="about__content">
          <div className="about__text">
            <p className="about__text--para">
              Hello! My name is Troy Richards and I'm just another{" "}
              <b className="important-text">Frontend Engineer</b> with a mouse
              and a laptop with unrelated opinions about Deborah's shoes....
              There's nothing wrong with her make-up.
            </p>
            <p className="about__text--para">
              Aside from spending my time on the interwebs trying to bolster my
              net worth in the frontend development market, I like to read
              manhwas, mangas, some manhuas, webtoons, go for walks around the
              neighborhood, pester my sister and nephews, and play some videos
              games.
            </p>
            <p className="about__text--para">
              Currently, I am seeking a remote{" "}
              <b className="important-text">Frontend Engineer</b> role, but I'm
              definitely open to a role as a Shoe Shiner if the pay is good, the
              benefits are solid, and the work-life balance is great. Want a
              break from the ads? Contact me{" "}
              <b onClick={toggleModal} className="text-link">
                here!
              </b>
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
