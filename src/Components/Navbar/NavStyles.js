import styled from "styled-components";
import { desktop, tablet } from "../../responsive";

export const Container = styled.nav`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  transition: 0.7s;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  ${tablet({
    padding: "20px 40px",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;

  padding: 1.7rem;

  animation: load 2s ease forwards 1s;
`;

export const HomeBtn = styled.a``;

export const Logo = styled.img`
  width: 50px;
  height: 52px;
  opacity: 0.6;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const Navigation = styled.div``;

export const DropdownBtn = styled.i`
  cursor: pointer;
  font-size: 2rem;

  ${tablet({
    display: "none",
  })}
`;

export const DropdownContent = styled.div`
  position: absolute;
  height: 100vh;
  width: 0;
  right: 0;
  top: 0;
  z-index: 2;

  background-color: rgb(5, 5, 5);
  opacity: 0;
  transition: all 1.25s ease-in-out;

  ${tablet({
    display: "block",
    position: "static",
    backgroundColor: "unset",
    height: "unset",
    width: "100%",
  })}
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  ${tablet({
    flexDirection: "row",
    backgroundColor: "unset",
  })}
`;

export const CloseBtn = styled.li`
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

export const NavItem = styled.li`
  font-size: 1.2rem;
  padding: 2rem 1rem;
  white-space: nowrap;
  word-spacing: 2px;

  ${tablet({
    padding: "1rem",
    fontSize: "unset",
  })}
`;

export const Link = styled.a`
  transition: all 0.5s;
  &:hover {
    color: var(--highlightColor);
  }
`;

export const Resume = styled.li`
  font-size: 1.2rem;
  padding: 2rem 1rem;
  white-space: nowrap;
  word-spacing: 2px;

  ${tablet({
    border: "1px solid var(--highlightColor)",
    padding: "1rem 1.3rem",
    borderRadius: "5px",
    transition: "all .5s",
    fontSize: "unset",
  })}

  &:hover {
    ${tablet({
      border: "1px solid var(--dimHighlightColor)",
    })}
  }
`;

export const ResumeLink = styled.a`
  transition: all 0.5s;
  &:hover {
    ${tablet({
      color: "var(--highlightColor)",
    })}
  }
`;
