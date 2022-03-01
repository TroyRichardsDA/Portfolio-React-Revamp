import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

const Container = styled.section`
  background-color: var(--main-BG);
  height: 100vh;
  padding: 7rem 0;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.h2`
  letter-spacing: 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--BrighterText);
  text-shadow: var(--headerTextShadow);

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    margin-left: 15px;
    background-color: var(--mainTextColor);
    box-shadow: 3px 3px 2px var(--highlightColor);

    ${tablet({
      width: "300px",
    })}

    ${desktop({
      width: "500px",
    })}
  }

  ${tablet({
    fontSize: "1.7rem",
    justifyContent: "left",
  })}
`;

const DevSkills = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 2rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  ${tablet({
    width: "80%",
  })}
`;

const DevSkill = styled.p`
  flex: 1;
  min-width: min-content;
  white-space: nowrap;
  text-align: center;
  padding: 15px 20px;

  text-transform: uppercase;
  letter-spacing: 1px;

  border: 1px solid var(--highlightColor);
  color: var(--dimHighlightColor);
  transition: all 0.5s ease-in-out;

  &:hover {
    color: var(--highlightColor);
    border: 1px solid var(--dimHighlightColor);
    border-radius: 15px;
  }
`;

export { Container, Wrapper, Header, DevSkills, DevSkill };
