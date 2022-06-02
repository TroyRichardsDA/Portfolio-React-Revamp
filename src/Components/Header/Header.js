import {
  Container,
  Greeting,
  HeroHeading,
  Name,
  ToProjects,
  Wrapper,
} from "./HeaderStyles";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Header() {
  let name = ["Troy Richards."];
  let textPos = 0;
  let speed = 200;

  function typewriter() {
    document.getElementById("message").innerHTML =
      name[0].substring(0, textPos) + "<span class='blicker'>|</span>";

    if (textPos++ !== name[0].length) setTimeout(typewriter, speed);
  }

  window.addEventListener("load", typewriter);

  return (
    <Container>
      <Wrapper>
        <Greeting>Hello, I'm</Greeting>
        <Name id="message">{name}</Name>
        <HeroHeading>An aspiring Frontend Developer </HeroHeading>
        <ToProjects href="#projects">
          View My Work{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </ToProjects>
      </Wrapper>
    </Container>
  );
}
