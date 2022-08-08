export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__container container">
        <div id="header__content">
          <h1 className="hero__name" id="message">
            Troy Richards
          </h1>
          <h2 className="hero__title">Frontend Engineer</h2>
          <a className="hero__link--projects" href="#projects">
            View My Work{" "}
            <span>
              <i className="fa-solid fa-right-long"></i>
            </span>
          </a>
          <a className="hero__mouse" href="#about">
            <div className="hero__mouse--wheel"></div>
            <p className="hero__mouse--text">You click, I scroll</p>
          </a>
        </div>
      </div>
    </header>
  );
}
