import {
  Container,
  DropdownBtn,
  DropdownContent,
  HomeBtn,
  Logo,
  Navigation,
} from "./NavStyles";

function Nav({ logo }) {
  let prevScroll = window.pageYOffset;
  let dropdown = document.getElementById("dd-content");

  function showHide() {
    dropdown.style.width = "40%";
  }

  function closeBtn() {
    dropdown.style.width = "0";
  }

  window.onclick = function (e) {
    if (!e.target.matches(".fa-bars")) {
      dropdown.style.width = "0";
    }
  };

  window.onscroll = function () {
    let currentPos = window.pageYOffset;
    if (prevScroll > currentPos) {
      document.getElementById("nava").style.top = "0";
    } else {
      document.getElementById("nava").style.top = "-1000px";
    }
    prevScroll = currentPos;
  };

  return (
    <Container id="nava">
      <HomeBtn href="">
        <Logo id="logo" src={logo} />
      </HomeBtn>
      <Navigation>
        <DropdownBtn
          onClick={showHide}
          className="fas fa-soild fa-bars"
        ></DropdownBtn>
        <DropdownContent id="dd-content" className="dropdown-content">
          <ul>
            <li className="nav-item close-button">
              {" "}
              <a onClick={closeBtn}>Close</a>
            </li>
            <li className="nav-item">
              <a href="#skills">
                <i className="fas fa-tasks"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects">
                <i className="fas fa-code"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#about">
                <i className="fas fa-user"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                <i className="fa-solid fa-address-card"></i> Contact
              </a>
            </li>
            <li className="nav-item resume-nav">
              <a href={require("../../Resume/resume-file.pdf")} target="_blank">
                <i className="fa-solid fa-file"></i> Resume
              </a>
            </li>
          </ul>
        </DropdownContent>
      </Navigation>
    </Container>
  );
}

export default Nav;
