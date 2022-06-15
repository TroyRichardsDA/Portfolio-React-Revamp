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
  margin: 0 auto;
  margin-top: 2rem;
  width: max-content;

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
    transition: 1.5s;
  }

  &:hover {
    border: 1px solid var(--dimHighlightColor);
    background-color: var(--dimHighlightColor);
    color: white;

    span {
      color: white;
      transform: rotate(450deg);
    }
  }

  &:active {
    transform: scale(0.8);
  }

  ${desktop({
    fontSize: "1.3rem",
  })}
`;

export const ScrollIcon = styled.a`
  position: absolute;
  bottom: 12px;
  left: 50%;
  width: 20px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid black;
  opacity: 0;

  display: flex;
  justify-content: center;
  transition: all 400ms ease;
  animation: load 2s ease forwards 2.3s;

  div {
    margin-top: 4px;
    width: 4px;
    height: 8px;
    border-radius: 10px;
    background-color: black;
    transition: all 400ms ease;
    animation: scroll 1s infinite linear alternate;
  }

  p {
    display: inline-block;
    position: absolute;
    top: -20px;
    color: black;
    white-space: nowrap;
    transition: all 400ms ease;

    ${tablet({
      transform: "translateY(40px) scale(0)",
    })}
  }

  &:hover {
    transform: scale(1.07);
    border-color: var(--highlightColor);

    p {
      color: var(--highlightColor);
      ${tablet({
        transform: "translateY(0px) scale(1)",
      })}
    }

    div {
      background-color: var(--highlightColor);
    }
  }
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
    left: 43vw;
  }
  .icon--2 {
    top: 20vh;
    right: 2vw;
  }
  .icon--3 {
    top: 50vh;
    left: 12vw;
  }
  .icon--4 {
    top: 67vh;
    left: 50vw;
  }
  .icon--5 {
    top: 60vh;
    right: 8vw;
  }
  .icon--6 {
    top: 92vh;
    left: 2vw;
  }
  .icon--7 {
    top: 84vh;
    left: 30vw;
  }
  .icon--8 {
    top: 90vh;
    left: 80vw;
  }
`;
