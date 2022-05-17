import {
  Container,
  Header,
  Small,
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
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
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
    const halfH = screenH / 2;
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
        <Header>
          <i className="header-icon fas fa-user"></i> About
        </Header>

        <SubHeader>Hello,</SubHeader>

        <TextContainer>
          <Text style={{ opacity: opacityControl(progress, 0) }}>
            Hello again ! My name is Troy Richards, and I have recently started
            my journey to becoming a Frontend Developer. After Covid-19 caused
            me to lose my job as a server, I began my hunt for a more stable
            job. I landed a job at Publix. However, it did last long due to an
            unfortunate injury. Thus I began my hunt for at-home work and came
            upon Frontend Development. Every day that I can, I am looking for
            ways to expand my knowledge and become even better at Development.
          </Text>
          <Text style={{ opacity: opacityControl(progress, 1) }}>
            Although I have a degree in Audio Production granted by Full Sail
            University, I have decided to pursue a career in frontend
            development as I find it more enjoyable. Every day that I can, I
            expand my knowledge with the help of Scrimba, SkillCrush,
            Frontmentor, CodeWithMosh and Stack Overflow
            <Small>(The chad of the group)</Small>.
          </Text>
          <Text style={{ opacity: opacityControl(progress, 2) }}>
            <span className="important-text">Currently</span>, I am looking for
            opportunities to work remotely as a{" "}
            <span className="important-text">
              Frontend Focused Software Engineer{" "}
            </span>{" "}
            apprentice or as an intern.
          </Text>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}
