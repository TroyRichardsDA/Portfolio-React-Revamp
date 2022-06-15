import styled from "styled-components";
import { tablet, desktop } from "../../../responsive";
import { motion } from "framer-motion";

export const Container = styled(motion.div)``;

export const ImageCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  top: 0;
  background-color: rgba(0, 0, 0, 55%);
  transition: all 0.5s ease-in-out;

  ${tablet({
    opacity: "0",
  })}
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: hsla(0, 0%, 96%, 100%);

  height: 100%;
  width: 100%;
  padding: 0px 12px;
  transition: all 600ms ease;

  ${tablet({
    transform: "translateY(100px)",
    opacity: ".3",
  })}

  ${desktop({
    alignItems: "unset",
    padding: "20px",
    paddingTop: "32px",
  })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;

  transition: all 600ms ease;
`;

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

    ${ImageCover} {
      ${tablet({
        opacity: "1",
      })}
    }

    ${TextContainer} {
      ${tablet({
        opacity: "1",
        transform: "translateY(0)",
      })}
    }

    ${Image} {
      ${tablet({
        transform: "scale(1.3)",
        filter: "blur(2px)",
      })}
    }
  }

  ${tablet({
    boxShadow: "0px 20px 50px 0 rgba(48, 46, 46, 0.32)",
    overflow: "hidden",
  })}
`;

export const LinkedImg = styled.a``;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;

  ${desktop({
    textAlign: "left",
    fontSize: "24px",
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

  ${desktop({
    textAlign: "left",
    lineHeight: "1.6",
    fontSize: "16px",
  })}
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;

  ${desktop({
    justifyContent: "unset",
    gap: "12px",
  })}
`;

export const Link = styled.a`
  color: var(--highlightColor);
  transition: all 0.25s ease-in-out;
  cursor: alias;

  &:hover {
    transform: scale(1.1);

    ${tablet({
      color: "var(--highlightColor)",
    })}
  }
  ${tablet({
    color: "var(--dimHighlightColor)",
  })}
`;
