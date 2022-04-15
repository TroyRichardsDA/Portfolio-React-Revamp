import {
  Container,
  Header,
  Link,
  SubHeader,
  Text,
  TextContainer,
  Wrapper,
} from "./ContactStyles";

export default function Contact() {
  return (
    <Container id="contact">
      <Wrapper
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Header className="contact-header">
          <i className="fa-solid fa-address-card"></i> Contact
        </Header>
        <TextContainer className="contact-text">
          <SubHeader className="contact-subheader">Get it touch</SubHeader>
          <Text>
            <span className="important-text">Currently</span>, I am looking for
            a position as a{" "}
            <span className="important-text">Frontend Developer</span>. I am
            open to Full-time, Part-time, or Internship positions at this time.
            If you would like to get in contact with me, email would be best
            followed by a direct message on LinkedIn. I will try to get back to
            you as soon as possible. Thank You!
          </Text>
        </TextContainer>

        <Link className="email-link" href="mailto:troyrichards28@gmail.com">
          {" "}
          Contact Me
        </Link>
      </Wrapper>
    </Container>
  );
}
