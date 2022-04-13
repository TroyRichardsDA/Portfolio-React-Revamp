import styled from "styled-components";
import { desktop, tablet } from "../../responsive";

export const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  transition: 0.7s;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  ${tablet({
    padding: "10px 40px",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;

  padding: 1.3rem;

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

  background-color: rgb(5, 5, 5);
  transition: all 1s ease-in-out;
  visibility: visible;

  ${tablet({
    position: "relative",
    display: "block",
    backgroundColor: "unset",
    height: "unset",
    width: "100%",
  })}
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  ${tablet({
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
  }

  ${tablet({
    display: "none",
  })}
`;

export const NavItem = styled.li`
  font-size: 1.2rem;
  padding: 2rem 0;
  white-space: nowrap;
  word-spacing: 2px;

  ${tablet({
    padding: "1rem",
    fontSize: "unset",
  })}
`;

export const Link = styled.a`
  transition: all 0.5s;
  padding: 30px 10px;
  border-bottom: 0.02px solid var(--highlightColor);
  border-radius: 10%;

  &:hover {
    color: var(--highlightColor);
    padding: 30px 70px;
  }
`;
