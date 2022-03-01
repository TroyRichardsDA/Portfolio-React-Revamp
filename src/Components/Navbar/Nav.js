import {
  CloseBtn,
  Container,
  DropdownBtn,
  DropdownContent,
  HomeBtn,
  Link,
  Logo,
  Navigation,
  NavItem,
  NavList,
  Resume,
  ResumeLink,
  Wrapper,
} from "./NavStyles";

function Nav({ logo }) {
  let prevScroll = window.pageYOffset;
  const dropdown = document.getElementById("dd-content");
  const navbar = document.getElementById("nava");

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
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-1000px";
    }
    prevScroll = currentPos;
  };

  return (
    <Container id="nava">
      <Wrapper>
        <HomeBtn href="">
          <Logo id="logo" src={logo} />
        </HomeBtn>
        <Navigation>
          <DropdownBtn
            onClick={showHide}
            className="fas fa-soild fa-bars"
          ></DropdownBtn>
          <DropdownContent id="dd-content">
            <NavList>
              <CloseBtn>
                {" "}
                <p onClick={closeBtn}>Close</p>
              </CloseBtn>
              <NavItem>
                <Link href="#skills">
                  <i className="fas fa-tasks"></i> Skills
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#projects">
                  <i className="fas fa-code"></i> Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#about">
                  <i className="fas fa-user"></i> About
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#contact">
                  <i className="fa-solid fa-address-card"></i> Contact
                </Link>
              </NavItem>
              <Resume>
                <ResumeLink
                  href={require("../../Resume/resume-file.pdf")}
                  target="_blank"
                >
                  <i className="fa-solid fa-file"></i> Resume
                </ResumeLink>
              </Resume>
            </NavList>
          </DropdownContent>
        </Navigation>
      </Wrapper>
    </Container>
  );
}

export default Nav;
