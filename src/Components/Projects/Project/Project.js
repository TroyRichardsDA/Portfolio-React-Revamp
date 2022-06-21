import {
  Container,
  Desc,
  DevWith,
  Image,
  ImageCover,
  ImgContainer,
  Link,
  ProjectLinks,
  TextContainer,
  Title,
} from "./ProjectStyles";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

export default function Project({
  title,
  liveSite,
  sourceCode,
  desc,
  devWith,
  img,
  x,
  y,
}) {
  return (
    <Container
      initial={{ x, y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <ImgContainer>
        <Image src={img} alt={title} />

        <ImageCover>
          <TextContainer>
            <Title>{title}</Title>
            <DevWith>{devWith}</DevWith>
            <Desc>
              {desc}
              <ProjectLinks>
                <Link href={liveSite} target="_blank">
                  <AiOutlineLink />
                </Link>
                <Link href={sourceCode} target="_blank">
                  <AiOutlineGithub />
                </Link>
              </ProjectLinks>
            </Desc>
          </TextContainer>
        </ImageCover>
      </ImgContainer>
    </Container>
  );
}
