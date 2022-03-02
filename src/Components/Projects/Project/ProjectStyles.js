import styled from "styled-components";
import { tablet, desktop } from "../../../responsive";

const Container = styled.div`
  display: grid;

  ${tablet({
    width: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    columnGap: "30px",
  })}
`;

const ImgContainer = styled.div`
  position: relative;
  display: grid;
  border: 0.3px solid var(--dimHighlightColor);
  box-shadow: 10px 10px 10px 6px rgba(48, 46, 46, 0.582);
  border-radius: 5px;

  &:hover {
    ${tablet({
      zIndex: 2,
      boxShadow: "unset",
      opacity: 1,
    })}
  }

  ${tablet({
    gridColumn: "1/3",
    gridRow: "1",
    transform: "translateY(-30px)",
    zIndex: 0,
    boxShadow: "40px 20px 20px rgba(48, 46, 46, 0.582)",
    border: "1px solid var(--dimHighlightColor)",
    transition: "all .2s ease-in-out",
  })}
`;

const LinkedImg = styled.a``;

const Image = styled.img`
  width: 100%;
  opacity: 0.9;
  border-radius: 5px;
`;

const ImageCover = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  top: 0;
  background: var(--dimHighlightColor);
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0;
  }

  ${tablet({
    opacity: "0.3",
  })}
`;

const TextContainer = styled.div`
  display: grid;
  gap: 2rem;

  ${tablet({
    textAlign: "right",
    gridColumn: "2 / -1",
    gridRow: 1,
    right: 0,
    gap: "10px",
    zIndex: 1,
  })}
`;

const Title = styled.h3`
  text-align: center;
  margin: 4rem 0 0;
  font-size: 1.3rem;
  color: var(--highlightColor);
  text-decoration: underline var(--mainTextColor);
  text-underline-offset: 3px;

  ${tablet({
    margin: "unset",
    textAlign: "unset",
  })}
`;

const Desc = styled.div`
  line-height: 1.7rem;
  background-color: var(--projectTextBG);
  padding: 25px;

  ${tablet({
    backgroundColor: "var(--projectTextBG)",
    padding: "25px",
    marginTop: "10px",
    boxShadow: "0 10px 30px -15px var(--box-shadow)",
  })}
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 1.4rem;
`;

const Link = styled.a`
  color: var(--dimHighlightColor);
  transition: all 1s ease-in-out;

  &:hover {
    color: var(--highlightColor);
  }
`;

const ProjectSkills = styled.p`
  display: grid;
  justify-content: center;
  text-align: center;
`;

const DevWith = styled.span`
  color: var(--highlightColor);

  ${tablet({
    backgroundColor: "var(--projectTextBG)",
    zIndex: " 3",
    padding: "10px",
  })}
`;

const Skills = styled.span`
  color: var(--dimHighlightColor);
  word-spacing: 0.7rem;
  font-family: var(--fnt-tech);
`;

export {
  Container,
  ImgContainer,
  LinkedImg,
  Image,
  ImageCover,
  TextContainer,
  Title,
  Desc,
  ProjectLinks,
  Link,
  ProjectSkills,
  DevWith,
  Skills,
};
