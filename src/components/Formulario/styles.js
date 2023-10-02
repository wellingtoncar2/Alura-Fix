import { colores } from "../UI/variables";
import styled from "styled-components";

export const Div = styled.div`
  @media (min-width: 768px) {
    max-width: 100rem;
    margin-inline: auto;
  }
`;

export const Titulo = styled.h2`
  color: ${colores.grayLight};
  font-size: 6rem;
  text-align: center;
  font-weight: 400;
  margin: 0 0 5rem 0;
`;