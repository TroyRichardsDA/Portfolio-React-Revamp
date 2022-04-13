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
  function showHide() {
    document.getElementById("dd-content").style.cssText = `
    visibility: visible;
    width: 100%;
    `;
  }

  function closeBtn() {
    document.getElementById("dd-content").style.cssText = `
   
    `;
  }

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
                <Link href="#skills" onClick={closeBtn}>
                  <i className="fas fa-tasks"></i> Skills
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#projects" onClick={closeBtn}>
                  <i className="fas fa-code"></i> Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#about" onClick={closeBtn}>
                  <i className="fas fa-user"></i> About
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#contact" onClick={closeBtn}>
                  <i className="fa-solid fa-address-card"></i> Contact
                </Link>
              </NavItem>
            </NavList>
          </DropdownContent>
        </Navigation>
      </Wrapper>
    </Container>
  );
}

export default Nav;
