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

export default function Project({
  title,
  liveSite,
  sourceCode,
  desc,
  devWith,
  img,
}) {
  return (
    <Container>
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
          <Skills className="devWith-skills">{devWith}</Skills>
        </ProjectSkills>
      </TextContainer>
    </Container>
  );
}
