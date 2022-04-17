import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--thrid-BG);
  padding: var(--containerPadding);
  min-height: 100vh;

  border-top: 10px solid var(--highlightColor);
`;

export const Wrapper = styled(motion.div)`
  width: var(--wrapper);
  margin: 0 auto;

  text-align: center;
`;

export const Header = styled.h2`
  color: white;

  margin-bottom: 4rem;

  letter-spacing: 2px;
  font-size: var(--headers);
`;

export const SubHeader = styled.h1`
  color: var(--highlightColor);
  font-size: 3rem;
  margin-bottom: 2rem;

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
  line-height: 2rem;

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

export const Text = styled.p`
  color: white;
  transition: 0.3s;

  cur &:hover {
    opacity: 1 !important;
  }
`;
