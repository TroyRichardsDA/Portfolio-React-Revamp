import { Container, Header, Text, TextContainer, Wrapper } from "./AboutStyles";

function About() {
  return (
    <Container id="about">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Header>
          <b className="important-text">A</b>bout
        </Header>

        <TextContainer>
          <Text>
            Hello! My name is Troy Richards, and I am, what some would call, a{" "}
            <br /> <span className="shake">🎉</span>{" "}
            <b className="skills-used about-title">Frontend Developer!!!!!!</b>{" "}
            <span className="shake">🎉</span>
            <br />
            <small>
              if they don't call me that, they don't know about me. Don't worry
              about them, we're talking about me.
            </small>
          </Text>

          <Text>
            If you couldn't tell from the AMAZING animations so far, I love to
            create websites/apps that look and feel amazing to use. I mainly
            work with <span className="skills-used">react</span> and{" "}
            <span className="skills-used">sass</span> but don't mind branching
            out for the right opportunity.
          </Text>

          <Text>
            <b className="important-text">
              You can skip this chunk if you're pressed for time,
            </b>{" "}
            but I would be happy if you read it. Let's talk about me as a
            person. I like to play games in my spare time, mainly moba's
            {"(SMITE!!!)"} and my favorite role is jungle. Don't ever ask me to
            play support. Just don't. Another thing about me is I use to make
            use of my degree in audio production and make music. However, when
            covid hit, I had to sell a lot of my equipment and that made me very
            sad :(. My dream is to be able to buy my equipment back{" "}
            {"(over even better equipment)"} and go back to producing in my
            spare time. But enough about that, let's move on to what you're
            really here for!
          </Text>

          <Text>
            <span className="important-text">Currently</span>, I am looking for
            opportunities to work remotely as a{" "}
            <span className="important-text"> Frontend Developer</span>. Want to
            know what I can bring to your team? Just a bit more scrolling and
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

export default About;
