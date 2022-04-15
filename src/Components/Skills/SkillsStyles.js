import styled from "styled-components";
import { tablet } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--main-BG);
  max-height: max-content;
  padding: var(--containerPadding);
`;

export const Wrapper = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
`;

export const Header = styled.h2`
  text-align: center;

  letter-spacing: 2px;
  font-size: var(--headers);

  text-shadow: var(--headerTextShadow);

  margin-bottom: 100px;
`;

export const DevSkills = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 2rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  ${tablet({
    width: "90%",
  })}
`;

export const DevSkill = styled.p`
  flex: 1;
  min-width: max-content;

  white-space: nowrap;
  text-align: center;
  padding: 15px 20px;

  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 1px;

  border: 1px solid var(--highlightColor);
  color: var(--dimHighlightColor);
  transition: all 0.5s ease-in-out;

  &:hover {
    color: var(--highlightColor);
    border: 1px solid var(--dimHighlightColor);
    border-radius: 15px;
  }
`;
