import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--second-BG);
  padding: var(--containerPadding);
`;

export const Wrapper = styled(motion.div)`
  width: var(--wrapper);
  margin: 0 auto;
`;

export const Headings = styled.div``;

export const Header = styled.h2`
  text-align: center;
  font-size: var(--headers);

  letter-spacing: 2px;
  text-shadow: var(--headerTextShadow);

  ${tablet({})}
`;

export const SubHeader = styled.p`
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

export const SmallText = styled.span`
  font-size: 10px;
  margin-left: 30px;
  transition: all 0.5s;

  &:hover {
    font-size: 1em;
    color: var(--dimHighlightColor);
  }
`;

export const ProjectsContainer = styled(motion.div)`
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
