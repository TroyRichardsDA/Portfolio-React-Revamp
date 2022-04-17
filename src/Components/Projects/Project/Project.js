import {
  Container,
  Desc,
  DevWith,
  Image,
  ImageCover,
  ImgContainer,
  Link,
  LinkedImg,
  ProjectLinks,
  ProjectSkills,
  Skills,
  TextContainer,
  Title,
} from "./ProjectStyles";
import Marquee from "react-easy-marquee";

export default function Project({
  title,
  liveSite,
  sourceCode,
  desc,
  devWith,
  img,
}) {
  return (
    <Container
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <ImgContainer>
        <LinkedImg href={liveSite} target="_blank">
          <Image src={img} alt={title} />
          <ImageCover></ImageCover>
        </LinkedImg>
      </ImgContainer>

      <TextContainer>
        <Title>{title}</Title>
        <Desc>
          {desc}
          <ProjectLinks>
            <Link href={liveSite} target="_blank">
              <i className="fas fa-window-restore"></i>
            </Link>
            <Link href={sourceCode} target="_blank">
              <i className=" fas fa-file-code"></i>
            </Link>
          </ProjectLinks>
        </Desc>
        <ProjectSkills className="project-skills">
          <DevWith className="developed-with"> Developed With: </DevWith> <br />
          <Marquee width="70%" duration={6000}>
            <Skills className="devWith-skills">{devWith}</Skills>
          </Marquee>
        </ProjectSkills>
      </TextContainer>
    </Container>
  );
}
