import styled from "styled-components";
import { tablet } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--main-BG);
  padding: var(--containerPadding);

  min-height: 80vh;
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

  margin-bottom: 40px;
`;

export const IconsListWrapper = styled.div`
  margin-bottom: 40px;
`;

export const IconsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Icon = styled.li`
  text-align: center;
  font-size: 1.5rem;
  color: var(--dimHighlightColor);
  padding: 4px;

  border: 2px solid transparent;
  transition: 0.4s;

  &:hover {
    color: var(--highlightColor);
    border-color: var(--dimHighlightColor);
    border-radius: 5px;

    box-shadow: 3px 10px 20px grey;
  }
`;

export const DevSkill = styled.p`
  flex: 1;
  min-width: max-content;

  white-space: nowrap;
  text-align: center;
  padding: 15px 20px;

  margin: 10px;

  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 1px;

  border: 1px solid var(--highlightColor);
  color: var(--dimHighlightColor);
  transition: 0.5s ease-in-out;
  text-shadow: 0px 10px 20px grey;

  &:hover {
    cursor: default;
    box-shadow: 0px 5px 9px grey;

    color: var(--highlightColor);
    border: 1px solid var(--dimHighlightColor);
    border-radius: 15px;
  }
`;

export const StaticList = styled.details`
  margin-top: 30px;
`;

export const Summary = styled.summary`
  font-size: 1.2rem;
  cursor: pointer;

  text-align: center;

  &:hover {
    color: var(--highlightColor);
  }
`;

export const SummarySkills = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${tablet({
    gridTemplateColumns: "repeat(3, 1fr)",
  })}
`;

export const Skill = styled.p`
  position: relative;
  transition: 0.2s;

  letter-spacing: 2px;
  font-size: 1.2rem;
  text-align: center;

  &::after {
    content: " ";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;

    height: 2px;
    transition: 0.4s;

    background-color: var(--dimHighlightColor);
  }

  &:hover {
    color: var(--dimHighlightColor);

    &::after {
      width: 100%;
    }
  }
`;
