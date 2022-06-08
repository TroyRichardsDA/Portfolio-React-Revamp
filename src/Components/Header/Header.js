import {
  Container,
  HeroHeading,
  Name,
  ToProjects,
  Wrapper,
} from "./HeaderStyles";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Header() {
  let name = ["Troy Richards"];
  let textPos = -20;
  let speed = 100;

  function typewriter() {
    document.getElementById("message").innerHTML =
      name[0].substring(0, textPos) + "<span class='blicker'>|</span>";

    if (textPos++ !== name[0].length) setTimeout(typewriter, speed);
  }

  window.addEventListener("load", typewriter);

  return (
    <Container>
      <Wrapper>
        <Name id="message">{name}</Name>
        <HeroHeading>Frontend Developer </HeroHeading>
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
