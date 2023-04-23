import { useModalContext } from "../context/modalContext";

export default function Footer() {
  const { toggleModal } = useModalContext();

  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/troyarichards/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>
          <p className="text-link" onClick={toggleModal}>
            Contact
          </p>
          <a
            href="https://github.com/TroyRichardsDA"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="footer__copyright">
          <p>Copyright &copy; 2022 | Troy Richards</p>
        </div>
      </div>
    </footer>
  );
}
