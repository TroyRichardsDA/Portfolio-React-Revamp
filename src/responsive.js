import { css } from "styled-components";

const tablet = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};

const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1024px) {
      ${props}
    }
  `;
};

export { tablet, desktop };
