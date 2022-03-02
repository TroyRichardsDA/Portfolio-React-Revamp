import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${tablet({
    marginTop: "4rem",
  })}
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Greeting = styled.p`
  color: var(--highlightColor);
  font-family: var(--fnt-tech);
  font-size: 0.9rem;

  ${tablet({
    fontSize: "1rem",
  })}

  ${desktop({
    fontSize: "1.3rem",
  })}
`;

const Name = styled.h1`
  opacity: 0;
  margin-top: 20px;
  text-shadow: 3px 8px 10px rgba(136, 136, 136, 0.507);
  font-size: 2rem;
  color: var(--BrighterText);
  animation: load 2s forwards 1.5s;

  ${tablet({
    fontSize: "3rem",
  })}

  ${desktop({
    paddingTop: ".2em",
    fontSize: "3.5rem",
  })}
`;

const HeroHeading = styled.h2`
  opacity: 0;
  font-size: 2rem;
  margin-top: 0.5rem;
  animation: load 2s ease forwards 2.3s;

  ${tablet({
    fontSize: "2.5rem",
  })}

  ${desktop({
    fontSize: "3rem",
  })}
`;

const HeroDesc = styled.p`
  opacity: 0;
  animation: load 2s ease forwards 2.3s;
  margin-top: 2rem;
  margin-bottom: 5rem;

  ${tablet({
    maxWidth: "540px",
    marginTop: "3rem",
  })}

  ${desktop({
    fontSize: "1.3rem",
    marginTop: "2rem",
  })}
`;

const HeroResume = styled.a`
  opacity: 0;
  border: 1px solid var(--highlightColor);
  color: var(--mainTextColor);
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.5s;
  animation: load 2s ease forwards 2.3s;

  &:hover {
    border: 1px solid var(--dimHighlightColor);
    color: var(--highlightColor);
  }

  ${desktop({
    fontSize: "1.3rem",
  })}
`;

export {
  Container,
  Greeting,
  Wrapper,
  Name,
  HeroHeading,
  HeroDesc,
  HeroResume,
};
