import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  padding: var(--containerPadding);
`;

export const Wrapper = styled(motion.div)`
  width: var(--wrapper);
  margin: 0 auto;
`;

export const Header = styled.h2`
  text-align: center;
  font-size: var(--headers);
  margin-bottom: 32px;
  position: relative;

  letter-spacing: 2px;
  text-shadow: var(--headerTextShadow);
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
