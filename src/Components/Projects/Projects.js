import React from "react";
import Project from "./Project/Project";
import {
  Container,
  Header,
  ProjectsContainer,
  Wrapper,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Header className="section__title">
          My Shiny <span className="skills-used">P</span>rojects
        </Header>

        <ProjectsContainer>
          <Project
            title="Designo"
            img={require("../../images/designo.png")}
            liveSite="https://ayetone.github.io/Designo/"
            sourceCode="https://github.com/AyeTone/Designo"
            desc={
              <>
                You wanted 7 pages of fun, I brought you 7 pages of a website. I
                think we can meet in the middle of somewhere. Probably the web
                design page that has reused components like a lot of the other
                pages? Or maybe the contact page where I deny your messages? I'm
                sure we can work something out.
              </>
            }
            devWith="React, Sass w/ Gulp, React-Router"
            x="0"
            y="300"
          />
          <Project
            title="Entertainment-Web-App"
            img={require("../../images/entertainment-web-app.png")}
            liveSite="https://ayetone.github.io/entertainment-web-app/"
            sourceCode="https://github.com/AyeTone/entertainment-web-app"
            desc={
              <>
                What's Netflix? I bring you Entertainment-Wep-App AKA, EWA!...
                We're still working on the name. In the meantime, why don't you
                check out this web app that allows you to go through movies,
                tv-series, or both and bookmark them for later. I promise you'll
                love it even though you can't watch anything.
              </>
            }
            devWith="React, Sass, React Router, React Context"
            y="0"
            x="300"
          />
          <Project
            title="REST Countries API"
            img={require("../../images/rest-countries-api.png")}
            liveSite="https://ayetone.github.io/rest-countries-api/"
            sourceCode="https://github.com/AyeTone/rest-countries-api"
            desc={
              <>
                Ever wanted to know something about a country that you didn't
                know yet? I'm sure this UI will tell something you didn't know
                about that one country! If it's not accurate, blame the creaters
                of this{" "}
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
            devWith="React, TypeScript, Sass w/Gulp, BEM, REST API"
            y="-300"
            x="0"
          />
          <Project
            title="Ecommerce Product Page"
            img={require("../../images/ecommerce-product-page.png")}
            liveSite="https://ayetone.github.io/ecommerce-product-page/"
            sourceCode="https://github.com/AyeTone/ecommerce-product-page"
            desc={
              <>
                Did you ever want to not buy something? You came to the right
                place! This website allows users{" "}
                <small>{"(Meaning you... maybe)"}</small> to cycle through the
                display options, add/remove items from a cart and not buy it!
                Exciting Right!?!?!
              </>
            }
            devWith="React, TypeScript, Sass w/gulp, BEM"
            x="300"
            y="0"
          />
          <Project
            title="Library-Ecom Store"
            img={require("../../images/library.png")}
            liveSite="https://ayetone.github.io/Library-Ecom/"
            sourceCode="https://github.com/AyeTone/Library-Ecom"
            desc={
              <>
                I present to you another way to no buy something. Come not shop
                at Library, The Store! Took a look at all of our books in our
                book section. You can filter them by "Broke", "Got MONEY money",
                or "Just tell me whats good"! Pick a book {"(or books)"}
                and go not checkout in the cart. Come not shop today!
              </>
            }
            devWith="React, React Router, BEM"
            y="0"
            x="-300"
          />
          <Project
            title="Interactive Comment Section"
            img={require("../../images/interactive-comment.png")}
            liveSite="https://ayetone.github.io/interactive-comment-section/"
            sourceCode="https://github.com/AyeTone/interactive-comment-section"
            desc={
              <>
                Ever wanted a comment section all to yourself? Look no further!
                This UI allows you <small>{"(the user)"}</small> to talk
                yourself, edit your cringe, and delete it once your filled with
                regret! This UI was brought to you by Troy and sponsered by
                Handsome JACK!
                <small>{"(Not really)"}</small>
              </>
            }
            devWith="React, Sass w/ Gulp, BEM"
            x="0"
            y="300"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
