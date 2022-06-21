import {
  Backdrop,
  Container,
  HeroHeading,
  Name,
  ScrollIcon,
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
import { useEffect } from "react";

export default function Header() {
  let name = ["Troy Richards"];
  let textPos = -20;
  let speed = 100;

  useEffect(() => {
    console.log("ran");
    function typewriter() {
      document.getElementById("message").innerHTML =
        name[0].substring(0, textPos) + "<span class='blicker'>|</span>";

      if (textPos++ !== name[0].length) setTimeout(typewriter, speed);
    }
    typewriter();
  }, []);

  return (
    <Container>
      <Wrapper>
        <div id="header__content">
          <Name id="message">{name}</Name>
          <HeroHeading>Frontend Developer </HeroHeading>
          <ToProjects href="#projects">
            View My Work{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </ToProjects>
          <ScrollIcon href="#about">
            <p>learn about me</p>
            <div></div>
          </ScrollIcon>
        </div>
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
