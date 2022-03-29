import {
  Container,
  Header,
  Small,
  SubHeader,
  Text,
  TextContainer,
  Wrapper,
} from "./AboutStyles";

export default function About() {
  return (
    <Container id="about">
      <Wrapper>
        <Header>
          <i className="header-icon fas fa-user"></i> About
        </Header>
        <SubHeader>
          Hello, <br />
          <Small>(...again?)</Small>
        </SubHeader>

        <TextContainer>
          <Text>
            Hello again{" "}
            <Small>
              (3<sup>rd</sup> time but who's counting...){" "}
            </Small>
            ! My name is Troy Richards, and I have recently started my journey
            to becoming a Frontend Developer. After Covid-19 caused me to lose
            my job as a server, I began my hunt for a more stable job. I landed
            a job at Publix. However, it did last long due to an unfortunate
            injury. Thus I began my hunt for at-home work and came upon Frontend
            Development. Every day that I can, I am looking for ways to expand
            my knowledge and become even better at Development.
          </Text>
          <Text>
            Although I have a degree in Audio Production granted by Full Sail
            University, I have decided to pursue a career in frontend
            development as I find it more enjoyable. Every day that I can, I
            expand my knowledge with the help of Scrimba, SkillCrush,
            Frontmentor, YouTube, and Google
            <Small>(The chad of the group)</Small>.
          </Text>
          <Text>
            <span className="important-text">Currently</span>, I am looking for
            opportunities to work remotely as a{" "}
            <span className="important-text">Frontend Developer </span>{" "}
            full-time, part-time, or as an intern.
          </Text>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}
