import styled from "styled-components";

const TitleCategory = styled.h2`
  margin: 0;
  color: ${(props) => props.$color || "#6bd1ff"};
  background-color: ${(props) => props.$colorFondo || "#f5f5f5"};
  font-weight: 400;
  font-size: 6rem;
  border: none;
  width: 29.6rem;
  height: 9.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TitleCategory;
