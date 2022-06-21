import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  padding: 40px 0;

  background-color: var(--main-BG);
  border-top: 4px solid var(--highlightColor);
  border-bottom: 4px solid var(--highlightColor);

  min-height: 100vh;
`;

export const Wrapper = styled(motion.div)`
  width: var(--wrapper);
  margin: 0 auto;

  text-align: center;

  ${tablet({
    textAlign: "unset",
  })}
`;

export const Header = styled.h2`
  margin: 20px 0 40px;
  font-size: var(--headers);
  letter-spacing: 4px;
  position: relative;

  ${tablet({
    textAlign: "center",
  })}
`;

export const ToggleShowMore = styled.h3`
  display: none;
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--dimHighlightColor);
  }

  ${tablet({
    textAlign: "center",
    display: "block",
    marginBottom: "20px",
    fontSize: "20px",
  })}
`;

export const Small = styled.span`
  font-size: 11px;
  color: var(--dimHighlightColor);
  font-style: italic;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 20px;
  line-height: 2rem;

  ${tablet({
    gap: "2.4rem",
    gridTemplateColumns: "1fr 1fr",
  })}

  ${desktop({
    width: "90%",
    margin: "0 auto",
    fontSize: "1.2rem",
    lineHeight: "2rem",
  })}
`;

export const Text = styled.p`
  letter-spacing: 2px;
  margin-bottom: 12px;

  .about-title {
    display: inline-block;
    font-size: 24px;
    margin-top: 16px;

    ${desktop({
      fontSize: "32px",
    })}
  }

  .shake {
    display: inline-block;
    animation: shaking 1s infinite;
  }

  &:hover {
    opacity: 1 !important;
  }
`;

export const ShowMore = styled.div`
  h3 {
  }
`;

export const MobileShowMore = styled(ToggleShowMore)`
  display: block;
  ${tablet({
    display: "none",
  })}
`;
