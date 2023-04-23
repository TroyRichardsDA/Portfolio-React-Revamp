import { useModalContext } from "../context/modalContext";

const Modal = () => {
  const { toggleModal } = useModalContext();
  const linkedin = "https://www.linkedin.com/in/troyarichards/";

  return (
    <div className="modal" id="modal">
      <div className="modal__container">
        <div className="modal__top-half">
          <div className="modal__header">
            <i
              className="modal__closebtn fa-solid fa-xmark"
              onClick={() => toggleModal()}
            ></i>
            <h2 className="modal__title">
              <b className="important-text">C</b>ontact
            </h2>
          </div>

          <div className="modal__desc">
            <p>
              The best way to me contact is through a DM on{" "}
              <a href={linkedin} className="text-link">
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
            <a className="linkedin modal__contact--icon" href={linkedin}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <p>👨🏽‍💻</p>
            <a
              className="mail modal__contact--icon"
              href="mailto:troyrichards28@gmail.com"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>
          <small className="modal__psst">psst.. hover over the guy</small>
        </div>
      </div>
    </div>
  );
};

export default Modal;
