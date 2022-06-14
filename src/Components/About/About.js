import {
  Container,
  Header,
  SubHeader,
  Text,
  TextContainer,
  Wrapper,
} from "./AboutStyles";
import { useRef } from "react";
import { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollObsever";

const opacityControl = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (window.innerWidth < 600) {
    if (progress >= 0 && progress < 1) return 1;
    else return 0.2;
  }
  return undefined;
};

export default function About() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 4;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <Container id="about">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        ref={refContainer}
      >
        <Header>A bit...</Header>

        <SubHeader>ABOUT MEH</SubHeader>

        <TextContainer>
          <Text style={{ opacity: opacityControl(progress, 0) }}>
            Hello! My name is Troy Richards, and I am what some would call a{" "}
            <br /> <span className="shake">🎉</span>{" "}
            <b className="skills-used about-title">Frontend Developer!!!!!!</b>{" "}
            <span className="shake">🎉</span>
            <br />
            <small>
              if they don't call me that, they don't know about me. Don't worry
              about them, we talking about me.
            </small>
          </Text>

          <Text style={{ opacity: opacityControl(progress, 1) }}>
            If you couldn't tell from the AMAZING animations so far, I love to
            create websites/apps that look and feel amazing to use. I mainly
            work with <span className="skills-used">react</span> and{" "}
            <span className="skills-used">sass</span> but don't mind branching
            out for the right opportunity.
          </Text>

          <Text style={{ opacity: opacityControl(progress, 2) }}>
            <b className="important-text">
              You can skip this chunk is you're pressed for time,
            </b>{" "}
            but I would be happy if you read it. About me as a person, I am a
            gamer. I like to play games in my spare time, mainly moba's
            {"(SMITE!!!)"}. In my spare, I use to make use of my degree in audio
            production and make music. However, when covid hit, I had to sell a
            lot of my equipment and that made me very say :(. My dream is to be
            able to buy my equipment back {"(over even better equipment)"} and
            go back to producing in my spare time. But enough about that, let's
            move on to what you're really here for!
          </Text>

          <Text style={{ opacity: opacityControl(progress, 3) }}>
            <span className="important-text">Currently</span>, I am looking for
            opportunities to work remotely as a{" "}
            <span className="important-text"> Frontend Developer </span>. Want
            to know what I can bring to your team? Just a bit more scrolling and
            you can{" "}
            <a href="#skills" className="important-text-link">
              find out!
            </a>
          </Text>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}
