import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--main-BG);
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
  margin-bottom: 20px;

  letter-spacing: 2px;
  text-shadow: var(--headerTextShadow);
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
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  })}

  ${desktop({
    margin: "4rem auto",
    gap: "32px",
  })}
`;
