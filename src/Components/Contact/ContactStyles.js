import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  padding: var(--containerPadding);
  min-height: 110vh;
  background-color: var(--thrid-BG);
`;

export const Wrapper = styled(motion.div)`
  width: 85%;
  margin: 0 auto;

  text-align: center;
`;

export const Header = styled.h2`
  margin: 2rem 0 4rem;

  font-size: var(--headers);
  letter-spacing: 2px;
  text-shadow: var(--headerTextShadow);
  color: var(--AltText);

  ${tablet({
    margin: "3rem 0 4rem",
  })}

  ${desktop({
    marginTop: "6rem",
  })}
`;

export const TextContainer = styled.div`
  width: 70%;
  margin: 3rem auto;

  font-size: 1.1rem;
  line-height: 40px;
  color: var(--AltText);

  ${desktop({
    width: "70%",
    margin: "0 auto",
    marginBottom: "5rem",
    fontSize: "1.2rem",
    lineHeight: "2rem",
  })}
`;

export const SubHeader = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: var(--highlightColor);

  ${desktop({
    fontSize: "3rem",
    margin: "4rem 0",
  })}
`;

export const Text = styled.p``;

export const Link = styled.a`
  border: 1px solid var(--highlightColor);
  color: var(--dimHighlightColor);
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.5s;

  text-shadow: 0px 10px 10px grey;
  box-shadow: 0px 10px 20px grey;

  background-color: var(--second-BG);

  &:hover {
    border-radius: 10px;
    border: 1px solid var(--dimHighlightColor);
    color: white;
    background-color: var(--dimHighlightColor);
    box-shadow: 0px 5px 100px 10px var(--highlightColor);
  }

  ${desktop({
    fontSize: "1.5rem",
  })}
`;
