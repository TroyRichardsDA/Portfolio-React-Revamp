import {
  Container,
  Greeting,
  HeroDesc,
  HeroHeading,
  HeroResume,
  Name,
  Wrapper,
} from "./HeaderStyles";

export default function Header() {
  let greeting = ["Hello, my name is "];
  let textPos = 0;
  let speed = 60;

  function typewriter() {
    document.getElementById("message").innerHTML =
      greeting[0].substring(0, textPos) + "<span class='blicker'>|</span>";

    if (textPos++ != greeting[0].length) setTimeout(typewriter, speed);
  }

  window.addEventListener("load", typewriter);

  return (
    <Container>
      <Wrapper>
        <Greeting id="message">{greeting}</Greeting>
        <Name>Troy Richards</Name>
        <HeroHeading>
          {" "}
          I type on keyboards and make web things look good.
        </HeroHeading>
        <HeroDesc>
          I am a Frontend Developer with experience building and designing
          responsive websites. I am currently looking for a position as a
          Frontend Developer.
        </HeroDesc>
        <HeroResume
          href={require("../../Resume/resume-file.pdf")}
          target="_blank"
        >
          Resume
        </HeroResume>
      </Wrapper>
    </Container>
  );
}
