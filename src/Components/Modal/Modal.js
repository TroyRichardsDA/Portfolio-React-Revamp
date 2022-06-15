import React from "react";
import {
  Contact,
  Container,
  Desc,
  Footer,
  Header,
  Wrapper,
} from "./ModalStyles";
import { GrLinkedinOption } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

const Modal = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Header>
            <p>
              You were so impressed that you're trying to{" "}
              <b className="important-text">contact me</b>? ME?!? Very Good{" "}
              <small>Veerrry Goooood.... </small>.. ah, right contact.
            </p>
          </Header>

          <Desc>
            <h3>AHEM</h3>
            <p>
              The best way to me contact by far is a DM on{" "}
              <a
                href="https://www.linkedin.com/in/troyrichardsdevloper/"
                className="important-text-link"
              >
                {" "}
                LinkedIn
              </a>{" "}
              followed up by email. I am currently seeking as a{" "}
              <b className="important-text">Frontend Developer</b>.
            </p>
          </Desc>

          <Footer>
            <p>
              There's only 1 me left on the market!{" "}
              <b className="important-text">Get me fast!</b>
            </p>
            <Contact>
              <a
                className="linkedin modal__contact--icon"
                href="https://www.linkedin.com/in/troyrichardsdevloper/"
              >
                <GrLinkedinOption />
              </a>
              <p>👨🏽‍💻</p>
              <a
                className="mail modal__contact--icon"
                href="mailto:troyrichards28@gmail.com"
              >
                <BiMailSend />
              </a>
            </Contact>
            <small>psst.. hover over the guy</small>
          </Footer>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Modal;
