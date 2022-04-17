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
  font-size: 2rem;

  transition: all 0.5s;
  opacity: 0;
  animation: load 2s ease forwards 2.3s;
`;

export const Name = styled.h1`
  margin: 20px 0;

  color: var(--highlightColor);
  text-shadow: 3px 8px 10px rgba(136, 136, 136, 0.507);
  font-size: 2.3rem;
  font-family: var(--fnt-tech);

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
  font-size: 2rem;

  opacity: 0;
  animation: load 2s ease forwards 2.3s;

  ${tablet({
    fontSize: "2.5rem",
  })}

  ${desktop({
    fontSize: "3rem",
  })}
`;

export const ToProjects = styled.a`
  padding: 1rem 2rem;
  margin-top: 2rem;

  transition: all 0.5s;
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

  ${desktop({
    fontSize: "1.3rem",
  })}
`;
