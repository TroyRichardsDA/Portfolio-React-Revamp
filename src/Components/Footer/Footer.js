import {
  Container,
  Copyright,
  LinkIcon,
  Social,
  Text,
  Wrapper,
} from "./FooterStyles";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Social className="social-icons">
          <a
            href="https://www.linkedin.com/in/troyrichardsdevloper/"
            target="_blank"
          >
            <LinkIcon className="fab fa-linkedin"></LinkIcon>
          </a>
          <a href="https://github.com/AyeTone" target="_blank">
            <LinkIcon className="fab fa-github"></LinkIcon>
          </a>
        </Social>
        <Copyright className="copyright">
          <Text>Copyright 2022 | Troy Richards</Text>
        </Copyright>
      </Wrapper>
    </Container>
  );
}
