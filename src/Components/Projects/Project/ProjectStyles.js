import styled from "styled-components";
import { tablet, desktop } from "../../../responsive";

export const Container = styled.div`
  display: grid;

  ${tablet({
    width: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    columnGap: "30px",
  })}
`;

export const ImgContainer = styled.div`
  position: relative;
  display: grid;

  border: 0.3px solid var(--dimHighlightColor);
  box-shadow: 10px 10px 10px 6px rgba(48, 46, 46, 0.582);
  border-radius: 5px;

  transition: 0.2s;

  &:hover {
    opacity: 1;
    z-index: 2;
    box-shadow: unset;
  }

  ${tablet({
    gridColumn: "1/3",
    gridRow: "1",
    transform: "translateY(-30px)",
    zIndex: 0,
    boxShadow: "40px 20px 20px rgba(48, 46, 46, 0.582)",
    transition: "all .2s ease-in-out",
  })}
`;

export const LinkedImg = styled.a`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border-radius: 5px;
`;

export const ImageCover = styled.div`
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

export const TextContainer = styled.div`
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

export const Title = styled.h3`
  text-align: center;
  margin: 4rem 0 0;
  font-size: 2rem;
  color: var(--dimHighlightColor);
  text-decoration: underline var(--mainTextColor);
  text-underline-offset: 3px;

  ${tablet({
    margin: "unset",
    textAlign: "unset",
  })}
`;

export const Desc = styled.div`
  text-align: center;
  line-height: 2rem;
  background-color: var(--projectTextBG);
  color: #ffffffe1;
  padding: 25px;

  ${tablet({
    textAlign: "right",
    backgroundColor: "var(--projectTextBG)",
    padding: "25px",
    marginTop: "10px",
    boxShadow: "0 10px 30px -15px var(--box-shadow)",
  })}
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  font-size: 1.5rem;
`;

export const Link = styled.a`
  color: var(--dimHighlightColor);
  transition: all 1s ease-in-out;

  &:hover {
    color: var(--highlightColor);
  }
`;

export const ProjectSkills = styled.p`
  display: grid;
  justify-content: center;
  text-align: center;
`;

export const DevWith = styled.span`
  color: var(--highlightColor);

  ${tablet({
    backgroundColor: "var(--projectTextBG)",
    zIndex: " 3",
    padding: "10px",
  })}
`;

export const Skills = styled.span`
  color: var(--dimHighlightColor);
  word-spacing: 0.7rem;
  font-family: var(--fnt-tech);
`;
