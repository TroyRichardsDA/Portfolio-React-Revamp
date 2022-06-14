import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

export const Container = styled.header`
  position: relative;

  min-height: 100vh;
  padding-top: -4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${tablet({
    textAlign: "center",
  })}
`;

export const Wrapper = styled.div`
  width: var(--wrapper);

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Greeting = styled.h2`
  font-size: 1.4rem;

  transition: all 0.5s;
  opacity: 0;
  animation: load 2s ease forwards 2.3s;
`;

export const Name = styled.h1`
  margin: 20px 0;

  opacity: 0;

  color: var(--highlightColor);
  text-shadow: 3px 8px 10px rgba(136, 136, 136, 0.507);
  font-size: 2.3rem;
  font-family: var(--fnt-tech);

  animation: load 1.6s ease forwards 1s;

  ${tablet({
    letterSpacing: "2px",
    fontSize: "3rem",
  })}

  ${desktop({
    paddingTop: ".2em",
    fontSize: "3.5rem",
  })}
`;

export const HeroHeading = styled.h2`
  font-size: 1.4rem;

  opacity: 0;
  animation: load 2s ease forwards 2.3s;

  ${tablet({
    fontSize: "2rem",
  })}

  ${desktop({
    fontSize: "3rem",
  })}
`;

export const Desc = styled.p``;

export const ToProjects = styled.a`
  padding: 1rem 2rem;
  margin-top: 2rem;

  transition: all 0.3s;
  opacity: 0;
  animation: load 2s ease forwards 2.3s;

  color: var(--mainTextColor);
  box-shadow: 3px 8px 10px rgba(136, 136, 136, 0.507);
  border: 1px solid var(--highlightColor);
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 10px;

  span {
    transition: 0.4s;
  }

  &:hover {
    border: 1px solid var(--dimHighlightColor);
    background-color: var(--dimHighlightColor);
    color: white;

    span {
      color: white;
      transform: rotate(90deg);
    }
  }

  &:active {
    transform: scale(0.8);
  }

  ${desktop({
    fontSize: "1.3rem",
  })}
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 13%;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
  z-index: -1;

  animation: load 2s ease forwards 2.3s;

  svg {
    width: 20px;
    height: 20px;
  }

  .back-drop__icon {
    position: fixed;
    animation: backdrop 3s infinite alternate;
    z-index: 2;
  }

  .icon--0 {
    top: 13vh;
    left: 3vw;
  }
  .icon--1 {
    top: 18vh;
    left: 50vw;
  }
  .icon--2 {
    top: 20vh;
    right: 2vw;
  }
  .icon--3 {
    top: 50vh;
    left: 5vw;
  }
  .icon--4 {
    top: 43vh;
    left: 50vw;
  }
  .icon--5 {
    top: 60vh;
    right: 8vw;
  }
  .icon--6 {
    top: 80vh;
    left: 5vw;
  }
  .icon--7 {
    top: 90vh;
    left: 50vw;
  }
  .icon--8 {
    top: 80vh;
    left: 80vw;
  }
`;
