import styled, { css } from 'styled-components';

const StyledContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.theme.colors.bizLight};
  border-radius: 5px;
  min-width: 700px;
  min-height: 300px;
`;

export const Container = styled.div`
  ${StyledContainer}
`;
