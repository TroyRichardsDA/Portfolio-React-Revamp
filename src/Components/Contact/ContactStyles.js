import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

export const Container = styled.section``;

export const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  text-align: center;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 4rem;
  letter-spacing: 2px;
  color: var(--BrighterText);
  text-shadow: var(--headerTextShadow);

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    margin-left: 10px;
    background-color: var(--mainTextColor);
    box-shadow: 3px 3px 2px var(--highlightColor);
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    margin-right: 10px;
    background-color: var(--mainTextColor);
    box-shadow: 3px 3px 2px var(--highlightColor);
  }

  ${tablet({
    margin: "3rem 0 4rem",
  })}

  ${desktop({
    fontSize: "2.7rem",
    marginTop: "6rem",
  })}
`;

export const TextContainer = styled.div`
  margin: 3rem 0;

  ${desktop({
    width: "70%",
    margin: "0 auto",
    marginBottom: "5rem",
    fontSize: "1.2rem",
    lineHeight: "2rem",
  })}
`;

export const SubHeader = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: var(--highlightColor);

  ${desktop({
    fontSize: "3rem",
    margin: "4rem 0",
  })}
`;

export const Text = styled.p``;

export const Link = styled.a`
  border: 1px solid var(--highlightColor);
  color: var(--dimHighlightColor);
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    border-radius: 10px;
    border: 1px solid var(--dimHighlightColor);
    color: var(--highlightColor);
  }

  ${desktop({
    fontSize: "1.5rem",
  })}
`;
