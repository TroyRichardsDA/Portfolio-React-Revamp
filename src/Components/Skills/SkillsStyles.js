import styled from "styled-components";
import { tablet } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--main-BG);
  padding: var(--containerPadding);

  min-height: 80vh;
`;

export const Wrapper = styled(motion.div)`
  width: var(--wrapper);
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
  margin: 40px 0;
`;

export const IconsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

export const MainSkills = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 2px solid transparent;
  transition: 0.4s;
  text-align: center;

  > * {
    transition: 0.4s;
  }

  .skill-name {
    color: var(--dimHighlightColor);
    font-size: 1.5rem;
    transform: scale(0) translateY(-50px);
  }

  &:hover {
    border-color: var(--dimHighlightColor);
    border-radius: 5px;

    box-shadow: 3px 10px 20px grey;

    * {
      color: var(--highlightColor);
    }

    p {
      transform: scale(0.8);
    }

    .skill-name {
      transform: scale(1) translateY(0);
    }
  }
`;

export const Icon = styled.p`
  text-align: center;
  font-size: 3rem;
  color: var(--dimHighlightColor);
  padding: 4px;
`;

export const StaticList = styled.details`
  margin: 40px 0;
`;

export const Summary = styled.summary`
  font-size: 1.2rem;
  cursor: pointer;

  text-align: center;

  &:hover {
    color: var(--highlightColor);
  }
`;

export const Disclaimer = styled.p`
  margin: 20px 0 10px;

  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;

  color: red;
`;

export const DText = styled.p`
  text-align: center;
  margin: 0 auto 60px;

  width: 80%;
  line-height: 30px;
  letter-spacing: 3px;

  color: red;
`;

export const SummarySkills = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

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

export const MarqueeSkill = styled.p`
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
