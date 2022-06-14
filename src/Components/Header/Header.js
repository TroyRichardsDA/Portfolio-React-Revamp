import {
  Backdrop,
  Container,
  HeroHeading,
  Name,
  ToProjects,
  Wrapper,
} from "./HeaderStyles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ReactComponent as ReactIcon } from "../../svgs/react.svg";
import { ReactComponent as BoldNote } from "../../svgs/bold-note.svg";
import { ReactComponent as CodeIcon } from "../../svgs/code.svg";
import { ReactComponent as DownStep } from "../../svgs/down-step-note.svg";
import { ReactComponent as MusicIcon } from "../../svgs/music-reader.svg";
import { ReactComponent as PlayStation } from "../../svgs/playstation.svg";
import { ReactComponent as Controller } from "../../svgs/controller.svg";

export default function Header() {
  let name = ["Troy Richards"];
  let textPos = -20;
  let speed = 100;
  const scaleFactor = 1 / 20;

  function typewriter() {
    document.getElementById("message").innerHTML =
      name[0].substring(0, textPos) + "<span class='blicker'>|</span>";

    if (textPos++ !== name[0].length) setTimeout(typewriter, speed);
  }

  function moveIcons(event) {
    const icons = document.querySelectorAll(".back-drop__icon");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < icons.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      icons[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px)`;
    }
  }

  window.addEventListener("load", typewriter);

  return (
    <Container onMouseMove={(e) => moveIcons(e)}>
      <Wrapper>
        <Name id="message">{name}</Name>
        <HeroHeading>Frontend Developer </HeroHeading>
        <ToProjects href="#projects">
          View My Work{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </ToProjects>
        <Backdrop>
          <ReactIcon className="back-drop__icon icon--1" />
          <Controller className="back-drop__icon icon--0" />
          <BoldNote className="back-drop__icon icon--2" />
          <DownStep className="back-drop__icon icon--3" />
          <CodeIcon className="back-drop__icon icon--4" />
          <MusicIcon className="back-drop__icon icon--5" />
          <PlayStation className="back-drop__icon icon--6" />
          <DownStep className="back-drop__icon icon--7" />
          <Controller className="back-drop__icon icon--8" />
        </Backdrop>
      </Wrapper>
    </Container>
  );
}
