import React from "react";
import {
  Contact,
  Container,
  Desc,
  Footer,
  Header,
  TopHalf,
  Wrapper,
} from "./ModalStyles";
import { GrClose, GrLinkedinOption } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

const Modal = ({ setDisplayModal }) => {
  return (
    <Container id="modal">
      <Wrapper className="modal__wrapper">
        <TopHalf className="modal__content--top">
          <Header>
            <div>
              <GrClose
                className="modal__close"
                onClick={() => setDisplayModal(false)}
              />
            </div>
            <h2>
              You were so impressed that you're trying to{" "}
              <span className="important-text">contact me</span>? ME?!?
            </h2>
          </Header>
          <Desc>
            <p>
              <small>Very Good... Veerrry Goooood.... </small>.. ah, right
              contact. <br />
              AHEM.
              <br />
              The best way to me contact is through a DM on{" "}
              <a
                href="https://www.linkedin.com/in/troyrichardsdevloper/"
                className="important-text-link"
              >
                {" "}
                LinkedIn
              </a>{" "}
              followed up by email. I am currently seeking a role as a{" "}
              <b className="important-text">Frontend Developer</b>.
            </p>
          </Desc>
        </TopHalf>

        <Footer className="modal__content--bottom">
          <p>
            There's only <b>1</b> me left on the market! <br />
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
      </Wrapper>
    </Container>
  );
};

export default Modal;
