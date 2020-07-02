import styled, { css } from "styled-components";

const StyledContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.colors.bizLight};
  border-radius: 5px;
  width: 700px;
  height: 300px;
  @media only screen and (max-width: 735px) {
    width: 420px;
  }
`;

export const Container = styled.div`
  ${StyledContainer}
`;
