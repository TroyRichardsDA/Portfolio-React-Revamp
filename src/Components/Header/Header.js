import { Container } from "./HeaderStyles";

export default function Header() {
  let greeting = ["Hello, my name is "];
  let textPos = 0;
  let speed = 60;

  function typewriter() {
    document.getElementById("message").innerHTML =
      greeting[0].substring(0, textPos) +
      "<span class='animate-pulse'>|</span>";

    if (textPos++ != greeting[0].length) setTimeout(typewriter, speed);
  }

  window.addEventListener("load", typewriter);

  return (
    <Container>
      <div id="header" className="header-content">
        <p id="message" className="greeting">
          {greeting}
        </p>
        <h2 className="name">
          <span>T</span>roy <span>R</span>ichards
        </h2>
        <h1 className="hero-header">
          {" "}
          I type on keyboards and make web things look good.
        </h1>
        <p className="hero-desc">
          I am a Frontend Developer with experience building and designing
          responsive websites. I am currently looking for a position as a
          Frontend Developer.
        </p>
        <a
          href={require("../../Resume/resume-file.pdf")}
          target="_blank"
          className="header-resume"
        >
          Resume
        </a>
      </div>
    </Container>
  );
}
