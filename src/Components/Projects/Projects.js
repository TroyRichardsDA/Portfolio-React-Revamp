import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Kanban from "../../images/Kanban.webp";
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
              title="Kanban Task Manager"
              img={Kanban}
              liveSite="https://troyrichardsda.github.io/kanban/"
              sourceCode="https://github.com/TroyRichardsDA/kanban"
              desc={
                <>
                  Are you bad at task management? Look worry no more, I have the
                  perfect thing for you. Introducing, in the top left corner of
                  this grid, Kanban Task Manager! With the ability to to create,
                  read, update, or delete boards, columns, tasks, and subtasks,
                  this is the only task manager you'll ever need!
                </>
              }
              devWith="React, TypeScript, Redux, Sass"
              x="0"
              y="300"
            />
            <Project
              title="EWA | Entertainment-Web-App"
              img={EWA}
              liveSite="https://troyrichardsda.github.io/entertainment-web-app/"
              sourceCode="https://github.com/TroyRichardsDA/entertainment-web-app"
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
              liveSite="https://troyrichardsda.github.io/rest-countries-api/"
              sourceCode="https://github.com/TroyRichardsDA/rest-countries-api"
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
              liveSite="https://troyrichardsda.github.io/Library-Ecom/"
              sourceCode="https://github.com/TroyRichardsDA/Library-Ecom"
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
