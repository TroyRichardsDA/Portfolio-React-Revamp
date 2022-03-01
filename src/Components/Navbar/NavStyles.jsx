import styled from "styled-components";
import { desktop, tablet } from "../../responsive";

const Container = styled.nav`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.7rem;
  z-index: 2;
  opacity: 0;

  transition: top 0.7s;
  animation: load 2.5s ease forwards 1s;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  ${tablet({
    padding: "20px 40px",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeBtn = styled.a``;

const Logo = styled.img`
  width: 50px;
  height: 52px;
  opacity: 0.6;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }
`;

const Navigation = styled.div``;

const DropdownBtn = styled.i`
  cursor: pointer;
  font-size: 2rem;

  ${tablet({
    display: "none",
  })}
`;

const DropdownContent = styled.div`
  position: fixed;
  height: 100vh;
  width: 0;
  right: 0;
  top: 0;
  z-index: 2;

  background-color: rgb(5, 5, 5);
  transition: width 1s ease-in-out;

  ${tablet({
    display: "block",
    position: "static",
    backgroundColor: "unset",
    height: "unset",
    width: "unset",
  })}
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;

  ${tablet({
    flexDirection: "row",
    backgroundColor: "unset",
  })}
`;

const CloseBtn = styled.li`
  text-align: right;
  padding-bottom: 3rem;
  transition: all 0.5;
  cursor: pointer;
  padding: 1.4em;
  font-size: 1.2rem;

  ${tablet({
    display: "none",
  })}
`;

const NavItem = styled.li`
  font-size: 1.2rem;
  padding: 1.2rem 1rem;
  white-space: nowrap;
  word-spacing: 2px;

  ${tablet({
    padding: "1rem",
    fontSize: "unset",
  })}
`;

const Link = styled.a`
  transition: all 0.5s;
  &:hover {
    color: var(--highlightColor);
  }
`;

const Resume = styled.a`
  font-size: 1.2rem;
  padding: 1.2rem 1rem;
  white-space: nowrap;
  word-spacing: 2px;

  ${tablet({
    padding: "1rem",
    fontSize: "unset",
  })}
`;

const ResumeLink = styled.a`
  ${tablet({
    border: "1px solid var(--highlightColor)",
    color: "var(--highlightColor)",
    padding: "1rem 1.3rem",
    borderRadius: "5px",
    transition: "all .5s",
  })}
`;

export {
  Container,
  Wrapper,
  HomeBtn,
  Logo,
  Navigation,
  DropdownBtn,
  DropdownContent,
  NavList,
  CloseBtn,
  NavItem,
  Link,
  Resume,
  ResumeLink,
};
