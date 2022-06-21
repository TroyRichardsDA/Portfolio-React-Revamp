import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease 2s;
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 20px;
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

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .moon {
    font-size: 32px;
    transition: all 1s ease;
    cursor: pointer;

    &:hover {
      filter: blur(1px);
      transform: rotate(360deg);
    }
  }
`;

export const DropdownBtn = styled.i`
  cursor: pointer;
  font-size: 2rem;
  padding: 12px;
  transition: all 100ms ease;

  &:hover {
    transform: scale(1.2);
    text-shadow: 0px 4px 12px grey;
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

  background-color: rgb(5, 5, 5, 0.9);
  transition: all 1s ease-in-out;

  ${tablet({
    display: "none",
  })}
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 40px;
  text-align: center;

  ${tablet({
    gap: "12px",
    flexDirection: "row",
    backgroundColor: "unset",
  })}
`;

export const CloseBtn = styled.li`
  text-align: right;
  padding-bottom: 40px;
  transition: 0.5s;
  cursor: pointer;
  padding: 24px;
  font-size: 20px;
  color: white;

  &:hover {
    color: var(--highlightColor);
    text-shadow: 0px 8px 20px white;
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
  padding: 32px 12px;
  border-bottom: 1px solid var(--highlightColor);
  border-radius: 10%;

  &:hover {
    color: var(--highlightColor);
    padding: 32px 72px;

    ${tablet({
      borderWidth: "12px",
      padding: "12px 12px",
      boxShadow: "0px 5px 5px grey",
    })}
  }

  ${tablet({
    padding: "12px 12px",
    color: "black",
  })}
`;
