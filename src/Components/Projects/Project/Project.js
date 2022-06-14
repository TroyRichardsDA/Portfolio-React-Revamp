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
    <Container
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <ImgContainer>
        <LinkedImg href={liveSite} target="_blank">
          <Image src={img} alt={title} />

          <ImageCover>
            <TextContainer>
              <Title>{title}</Title>
              <DevWith>{devWith}</DevWith>
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
            </TextContainer>
          </ImageCover>
        </LinkedImg>
      </ImgContainer>
    </Container>
  );
}
