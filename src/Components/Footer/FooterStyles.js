import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

export const Container = styled.footer`
  background-color: var(--main-BG);

  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 0;
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const LinkIcon = styled.i`
  font-size: 1.9rem;
  color: var(--BrighterText);
  transition: all 0.5s ease-in-out;

  &:hover {
    color: var(--highlightColor);
  }

  ${desktop({
    fontSize: "2rem",
  })}
`;

export const Copyright = styled.div``;

export const Text = styled.p``;
