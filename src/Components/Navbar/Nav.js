import { useCallback, useState, useEffect } from "react";
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
  Wrapper,
} from "./NavStyles";

function Nav({ logo }) {
  function show() {
    document.getElementById("dd-content").style.cssText = `
    transition: all 1s ease-in-out;
    width: 100%;
    `;
  }
  function close() {
    document.getElementById("dd-content").style.cssText = `
    width: -100px;
    `;
  }

  /* Nav BG Colors */
  const white = {
    backgroundColor: "rgba( 255, 255, 255, 48%)",
    height: "50px",
  };
  const trans = { backgroundColor: "transparent" };

  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = useCallback(() => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", changeNavbarColor, { passive: true });
    return () => document.removeEventListener("scroll", changeNavbarColor);
  }, [changeNavbarColor]);

  return (
    <Container style={!colorChange ? trans : white} id="nava">
      <Wrapper>
        <HomeBtn href="">
          <Logo id="logo" src={logo} />
        </HomeBtn>
        <Navigation>
          <DropdownBtn
            onClick={show}
            className="fas fa-soild fa-bars"
          ></DropdownBtn>
          <DropdownContent id="dd-content">
            <NavList>
              <CloseBtn>
                {" "}
                <p onClick={close}>Close</p>
              </CloseBtn>
              <NavItem>
                <Link href="#about" onClick={close}>
                  <i className="fas fa-user"></i> About
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#skills" onClick={close}>
                  <i className="fas fa-tasks"></i> Skills
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#projects" onClick={close}>
                  <i className="fas fa-code"></i> Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#contact" onClick={close}>
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
