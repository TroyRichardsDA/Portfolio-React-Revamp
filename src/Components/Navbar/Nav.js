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

  function showHide() {
    document.getElementById("dd-content").style.cssText = `
    transition: all 1s ease-in-out;
    width: 100%;
    `;
  }

  function closeBtn() {
    document.getElementById("dd-content").style.cssText = `
    width: 0;
    `;
  }

  window.onscroll = function () {
    let currentPos = window.pageYOffset;
    let navbar = document.getElementById("nava");
    if (prevScroll > currentPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-1000px";
      document.getElementById("dd-content").style.cssText = `
      transition: 0.25s;
      width: 0;
      `;
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
