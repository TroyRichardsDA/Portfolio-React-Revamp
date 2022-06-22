import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 1s;

  z-index: -1;
`;

export const Wrapper = styled.div`
  width: 80%;
  max-width: 550px;
  margin: 0 auto;
  position: relative;

  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  transition: box-shadow 1s ease 2.5s;

  .modal__close {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 20px;

    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    transition: all 300ms ease-in-out;

    &:hover {
      border-color: black;
      transform: scale(1.2) rotate(360deg);
    }
  }
`;

export const TopHalf = styled.div`
  transition: all 1s ease;
  transform: translateX(-110%);
  background-color: white;
  color: black;
`;

export const Header = styled.div`
  padding: 20px;
  padding-top: 52px;

  font-weight: bold;
`;

export const Desc = styled.div`
  line-height: 1.5;
  padding: 20px;
  padding-top: 4px;

  small {
    background: linear-gradient(
      270deg,
      rgba(20, 15, 0, 1) 21%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const Footer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;

  transition: all 1s ease;
  transform: translateX(110%);

  small {
    display: none;
    ${tablet({
      display: "block",
    })}
  }
`;

export const Contact = styled.div`
  margin-top: 12px;
  position: relative;

  p {
    font-size: 32px;
    transition: all 300ms ease;
    cursor: default;
    &:hover {
    }
  }

  .modal__contact--icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 24px;
    color: var(--highlightColor);
    transition: all 300ms ease;

    cursor: alias;

    &:hover {
      animation: blinker 2s infinite;
    }
  }

  .linkedin {
    transform: translate(-56px, -12px);
    z-index: 1;
    ${tablet({
      transform: "translate(-20px, -2px) scale(0)",
    })}
  }

  .mail {
    transform: translate(36px, -10px);
    ${tablet({
      transform: "translate(0px, 2px) scale(0)",
    })}
  }

  &:hover {
    p {
      ${tablet({
        transform: "scale(0.8)",
        filter: " brightness(0.6)",
      })}
    }

    .mail {
      ${tablet({
        transform: "translate(36px, -10px) scale(1)",
      })}
    }

    .linkedin {
      ${tablet({
        transform: "translate(-56px, -12px) scale(1)",
      })}
    }
  }
`;
