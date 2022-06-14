import styled from "styled-components";
import { tablet } from "../../../responsive";
import { motion } from "framer-motion";

export const Container = styled(motion.div)``;

export const ImgContainer = styled(motion.div)`
  position: relative;
  display: grid;

  border: 0.3px solid var(--dimHighlightColor);
  box-shadow: 10px 10px 10px 6px rgba(48, 46, 46, 0.582);
  border-radius: 5px;

  transition: 0.2s;

  &:hover {
    opacity: 1;
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

export const LinkedImg = styled.a``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ImageCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  top: 0;
  background-color: rgba(0, 0, 0, 55%);
  transition: opacity 0.5s ease-in-out;
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  padding: 0px 12px;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;

  ${tablet({
    margin: "unset",
    textAlign: "unset",
  })}
`;

export const DevWith = styled.p`
  color: var(--highlightColor);
  margin: 4px 0;
  font-size: 12px;
`;

export const Desc = styled.div`
  font-size: 12px;
  text-align: center;
  line-height: 1.5;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
`;

export const Link = styled.a`
  display: none;
  color: var(--dimHighlightColor);
  transition: all 0.25s ease-in-out;

  &:hover {
    color: var(--highlightColor);
  }
`;
