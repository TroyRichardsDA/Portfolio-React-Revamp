import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Designo from "../../images/designo.webp";
import EWA from "../../images/entertainment-web-app.webp";
import WhereInTheWorld from "../../images/where-in-the-world.webp";
import Library from "../../images/library.webp";

const Project = lazy(() => import("./Project/Project"));

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <motion.div
        className="projects__container container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">
          {" "}
          <b className="important-text">P</b>rojects
        </h2>

        <div className="projects__list">
          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title="Designo"
              img={Designo}
              liveSite="https://ayetone.github.io/Designo/"
              sourceCode="https://github.com/AyeTone/Designo"
              desc={
                <>
                  You wanted 7 pages of fun, I brought you 7 pages of a website.
                  I think we can meet in the middle of somewhere. Probably the
                  web design page that has reused components like a lot of the
                  other pages? Or maybe the contact page where I deny your
                  messages? I'm sure we can work something out.
                </>
              }
              devWith="React, Sass"
              x="0"
              y="300"
            />
            <Project
              title="EWA | Entertainment-Web-App"
              img={EWA}
              liveSite="https://ayetone.github.io/entertainment-web-app/"
              sourceCode="https://github.com/AyeTone/entertainment-web-app"
              desc={
                <>
                  What's Netflix? I bring you Entertainment-Wep-App AKA, EWA!...
                  We're still working on the name. In the meantime, why don't
                  you check out this web app that allows you to go through
                  movies, tv-series, or both and bookmark them for later. I
                  promise you'll love it even though you can't watch anything.
                </>
              }
              devWith="React, React Context, Sass, TypeScript"
              y="0"
              x="300"
            />
            <Project
              title="Where in the world?"
              img={WhereInTheWorld}
              liveSite="https://ayetone.github.io/rest-countries-api/"
              sourceCode="https://github.com/AyeTone/rest-countries-api"
              desc={
                <>
                  Ever wanted to know something about a country that you didn't
                  know yet? I'm sure this UI will tell something you didn't know
                  about that one country! If it's not accurate, blame the
                  creaters of this{" "}
                  <a
                    href="https://restcountries.com/"
                    target="_blank"
                    className="important-text-link"
                    rel="noreferrer"
                  >
                    REST Countries
                  </a>{" "}
                  API! T'was but tah messenger I was.
                </>
              }
              devWith="React, React Context, TypeScript, Sass, REST API"
              y="-300"
              x="0"
            />
            <Project
              title="Library"
              img={Library}
              liveSite="https://ayetone.github.io/Library-Ecom/"
              sourceCode="https://github.com/AyeTone/Library-Ecom"
              desc={
                <>
                  I present to you another way to no buy something. Come not
                  shop at Library, The Store! Took a look at all of our books in
                  our book section. You can filter them by "Broke", "Got MONEY
                  money", or "Just tell me whats good"! Pick a book{" "}
                  {"(or books)"}
                  and go not checkout in the cart. Come not shop today!
                </>
              }
              devWith="React"
              y="0"
              x="-300"
            />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
