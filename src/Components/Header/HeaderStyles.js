import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: -40px;

  ${tablet({
    marginTop: "4rem",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Greeting = styled.h2`
  font-size: 2rem;

  ${tablet({
    fontSize: "1rem",
  })}

  ${desktop({
    fontSize: "1.3rem",
  })}
`;

export const Name = styled.h1`
  color: var(--highlightColor);
  font-family: var(--fnt-tech);
  margin: 20px 0;
  text-shadow: 3px 8px 10px rgba(136, 136, 136, 0.507);
  font-size: 2.3rem;

  ${tablet({
    fontSize: "3rem",
  })}

  ${desktop({
    paddingTop: ".2em",
    fontSize: "3.5rem",
  })}
`;

export const HeroHeading = styled.h2`
  opacity: 0;
  font-size: 2rem;
  animation: load 2s ease forwards 2.3s;

  ${tablet({
    fontSize: "2.5rem",
  })}

  ${desktop({
    fontSize: "3rem",
  })}
`;

export const ToProjects = styled.a`
  position: absolute;
  bottom: 20%;
  left: 30%;

  padding: 1rem 2rem;
  border: 1px solid var(--highlightColor);
  border-radius: 5px;

  transition: all 0.5s;
  animation: load 2s ease forwards 2.3s;

  color: var(--mainTextColor);
  box-shadow: 3px 8px 10px rgba(136, 136, 136, 0.507);

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
