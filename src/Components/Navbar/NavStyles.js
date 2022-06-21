import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 1s ease 2s;
  z-index: 10;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  ${tablet({
    padding: "2px 20px",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 30px;
  margin: 0 auto;

  height: 100%;

  opacity: 0;
  animation: load 2s ease forwards 1s;
`;

export const HomeBtn = styled.a`
  svg {
    transition: all 300ms ease;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Navigation = styled.div``;

export const DropdownBtn = styled.i`
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;
  transition: 0.25s;

  &:hover {
    transform: scale(1.2);
    text-shadow: 0px 5px 10px grey;
    color: var(--highlightColor);
  }

  &:active {
    transform: scale(0.8);
  }

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

  background-color: rgb(5, 5, 5);
  transition: all 1s ease-in-out;

  ${tablet({
    display: "none",
  })}
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  ${tablet({
    gap: "10px",
    flexDirection: "row",
    backgroundColor: "unset",
  })}
`;

export const CloseBtn = styled.li`
  text-align: right;
  padding-bottom: 3rem;
  transition: 0.5s;
  cursor: pointer;
  padding: 1.4em;
  font-size: 1.2rem;
  color: white;

  &:hover {
    color: var(--highlightColor);
    text-shadow: 0px 10px 20px white;
  }

  ${tablet({
    display: "none",
  })}
`;

export const NavListDesktop = styled.ul`
  display: none;

  ${tablet({
    display: "flex",
  })}
`;

export const NavItem = styled.li`
  font-size: 1.2rem;
  padding: 2rem 0;
  white-space: nowrap;
  word-spacing: 2px;

  ${tablet({
    color: "black",
    padding: "1rem",
    fontSize: "unset",
  })}
`;

export const Link = styled.a`
  transition: all 0.5s;
  padding: 30px 10px;
  border-bottom: 1px solid var(--highlightColor);
  border-radius: 10%;

  &:hover {
    color: var(--highlightColor);
    padding: 30px 70px;

    ${tablet({
      borderWidth: "10px",
      padding: "10px 10px",
      boxShadow: "0px 5px 5px grey",
    })}
  }

  ${tablet({
    padding: "10px 10px",
    color: "black",
  })}
`;
