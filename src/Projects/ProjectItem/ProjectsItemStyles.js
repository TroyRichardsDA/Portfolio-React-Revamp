import styled from "styled-components";
import { tablet, desktop } from "../../responsive";

const Container = styled.div`
  display: grid;

  ${tablet({
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    columnGap: "30px",
  })}
`;

const ImgContainer = styled.div``;

export { Container };
