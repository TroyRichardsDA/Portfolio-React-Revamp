import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";

export default function Header() {
  let name = ["Troy Richards"];
  let textPos = -20;
  let speed = 100;

  useEffect(() => {
    function typewriter() {
      document.getElementById("message").innerHTML =
        name[0].substring(0, textPos) + "<span className='blicker'>|</span>";

      if (textPos++ !== name[0].length) setTimeout(typewriter, speed);
    }
    typewriter();
  }, []);

  return (
    <header className="hero">
      <div className="hero__container">
        <div id="header__content">
          <h1 className="hero__name" id="message">
            {name}
          </h1>
          <h2 className="hero__title">Frontend Developer </h2>
          <a className="hero__link--projects" href="#projects">
            View My Work{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </a>
          <a className="hero__mouse" href="#about">
            <div className="hero__mouse--wheel"></div>
            <p className="hero__mouse--text">learn about me</p>
          </a>
        </div>
      </div>
    </header>
  );
}
