import React from "react";
import { GrClose, GrLinkedinOption } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

const Modal = ({ setDisplayModal }) => {
  return (
    <div className="modal" id="modal">
      <div className="modal__container">
        <div className="modal__top-half">
          <div className="modal__header">
            <GrClose
              className="modal__closebtn"
              onClick={() => setDisplayModal(false)}
            />
            <h2 className="modal__title">
              <b className="important-text">C</b>ontact
            </h2>
          </div>

          <div className="modal__desc">
            <p>
              The best way to me contact is through a DM on{" "}
              <a
                href="https://www.linkedin.com/in/troyrichardsdevloper/"
                className="text-link"
              >
                {" "}
                LinkedIn
              </a>{" "}
              followed up by email. I am currently seeking a role as a{" "}
              <b className="important-text">Frontend Developer</b>.
            </p>
          </div>
        </div>

        <div className="modal__bottom-half">
          <p>
            There's only <b className="important-text">1</b> me left on the
            market! <br />
            <b className="important-text">Get me fast!</b>
          </p>
          <div className="modal__contact">
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
          </div>
          <small className="modal__psst">psst.. hover over the guy</small>
        </div>
      </div>
    </div>
  );
};

export default Modal;
