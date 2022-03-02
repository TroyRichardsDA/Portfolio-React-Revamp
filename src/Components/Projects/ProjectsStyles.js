import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

const Container = styled.section`
  width: 85%;
  margin: 3rem auto;
`;

const Header = styled.h2`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
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
      width: "475px",
    })}
  }

  ${tablet({
    fontSize: "1.7rem",
  })}
`;

const SubHeader = styled.p`
  text-align: center;
  padding: 2rem 0;
  font-family: var(--fnt-tech);

  ${tablet({
    fontSize: "1.3rem",
  })}

  ${desktop({
    fontSize: "1.7rem",
  })}
`;

const SmallText = styled.span`
  font-size: 10px;
  margin-left: 30px;
  transition: all 0.5s;

  &:hover {
    font-size: 1em;
    color: var(--dimHighlightColor);
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 6rem;

  ${tablet({
    position: "relative",
    gridTemplateColumns: "1fr",
  })}

  ${desktop({
    width: "90%",
    margin: "4rem auto",
    gap: "8rem",
  })}
`;

export { Container, Header, SubHeader, SmallText, ProjectsContainer };
