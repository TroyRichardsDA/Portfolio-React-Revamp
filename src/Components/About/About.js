import {
  Container,
  Header,
  MobileShowMore,
  ShowMore,
  Text,
  TextContainer,
  ToggleShowMore,
  Wrapper,
} from "./AboutStyles";
import { FaRegLightbulb } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    if (showMore) {
      setShowMore(false);
      document.getElementById("about").classList.remove("show-more");
    } else {
      setShowMore(true);
      document.getElementById("about").classList += " show-more";
    }
  }

  return (
    <Container id="about">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Header>
          <b className="important-text section__title">A</b>bout me
        </Header>

        <ToggleShowMore onClick={() => toggleShowMore()}>
          Wanna Know More? <HiLightBulb className="light-bulb--lit" />
          <FaRegLightbulb className="light-bulb--out" />
        </ToggleShowMore>

        <TextContainer>
          <div>
            <Text>
              Hello! My name is Troy Richards, and I am, what some would call, a{" "}
              <b className="important-text">Frontend Developer!!!!!!</b>
            </Text>
            <Text>
              If you couldn't tell from the AMAZING animations so far, I strong
              passion for developing websites with great user{" "}
              <b className="important-text">experiences.</b> As a mainly
              self-taught developer, I spent most of my free time learning and
              honing my skills to progress to the next level.
            </Text>
            <Text>
              <b className="important-text">Currently</b>, I am looking for
              opportunities to work remotely as a{" "}
              <b className="important-text"> Frontend Developer</b>. Want to
              know what I can bring to your team? Just a bit more scrolling and
              you can{" "}
              <a href="#skills" className="important-text-link">
                find out!
              </a>
            </Text>
          </div>

          <ShowMore>
            <MobileShowMore onClick={() => toggleShowMore()}>
              Wanna Know More? <HiLightBulb className="light-bulb--lit" />
              <FaRegLightbulb className="light-bulb--out" />
            </MobileShowMore>
            <p className="show-more__para">
              Let's talk about me as a person. I'm a gamer. Moba's take up a
              good amount of my games list with Smite being at the top of that
              list. I promise you, that my jungle is saucey. It's not SPL saucey
              but it's close. Give me any assassin expect Awilix and the
              rotations will be on point. Another thing about me is I use to
              make use of my degree in audio production and make music. However,
              when covid hit, I had to sell a lot of my equipment to get by.
              Eventually, somewhere down the line I will buy back my equipment
              so I can get back to making music.
            </p>
          </ShowMore>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}

export default About;
