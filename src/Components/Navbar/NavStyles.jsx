import styled from "styled-components";
import { desktop, tablet } from "../../responsive";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

export { Container, HomeBtn, Logo, Navigation, DropdownBtn, DropdownContent };
