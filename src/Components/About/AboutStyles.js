import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

export const Container = styled.section`
  background-color: var(--main-BG);
  padding: 7rem 0;
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  text-align: center;
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: var(--BrighterText);
  text-shadow: var(--headerTextShadow);
  margin-bottom: 4rem;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    margin-left: 15px;
    background-color: var(--mainTextColor);
    box-shadow: 3px 3px 2px var(--highlightColor);

    ${desktop({
      width: "475px",
    })}
  }

  ${tablet({
    fontSize: "1.7rem",
  })}

  ${desktop({
    marginBottom: "5rem",
  })}
`;

export const SubHeader = styled.p`
  text-align: center;
  color: var(--highlightColor);
  font-size: 1.7rem;
  margin-bottom: 10px;

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
