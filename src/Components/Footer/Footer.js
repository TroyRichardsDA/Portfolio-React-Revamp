import { Container, Copyright, Social, Text, Wrapper } from "./FooterStyles";

export default function Footer({ setDisplayModal }) {
  return (
    <Container id="footer">
      <Wrapper>
        <Social className="social-icons">
          <a
            href="https://www.linkedin.com/in/troyrichardsdevloper/"
            target="_blank"
            rel="noreferrer"
            className="important-text-link"
          >
            LinkedIn
          </a>
          <p
            className="important-text-link"
            onClick={() => setDisplayModal(true)}
          >
            Contact
          </p>
          <a
            href="https://github.com/AyeTone"
            className="important-text-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Social>
        <Copyright className="copyright">
          <Text>Copyright &copy; 2022 | Troy Richards</Text>
        </Copyright>
      </Wrapper>
    </Container>
  );
}
