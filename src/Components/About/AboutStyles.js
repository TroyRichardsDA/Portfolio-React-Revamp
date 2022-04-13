import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

export const Container = styled.section`
  background-color: var(--second-BG);
  padding: 7rem 0;

  border-top: 10px solid var(--highlightColor);
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  text-align: center;
`;

export const Header = styled.h2`
  margin-bottom: 4rem;

  letter-spacing: 2px;
  font-size: 3rem;

  ${tablet({
    fontSize: "1.7rem",
  })}
`;

export const SubHeader = styled.h1`
  color: var(--highlightColor);
  font-size: 3rem;
  margin-bottom: 3rem;

  ${tablet({
    fontSize: "3rem",
  })}

  ${desktop({
    fontSize: "3rem",
    lineHeight: "20px",
  })}
`;

export const Small = styled.span`
  font-size: 11px;
  color: var(--dimHighlightColor);
  font-style: italic;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  ${tablet({
    gap: "2.4rem",
  })}

  ${desktop({
    width: " 70%",
    margin: "0 auto",
    fontSize: "1.2rem",
    lineHeight: "2rem",
  })}
`;

export const Text = styled.p``;
