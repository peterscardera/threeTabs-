import React from 'react';
import styled from 'styled-components';

const TabButtons = ({ pageState, setPageState, setListOfNames }) => {
  return (
    <StyledTabContainer>
      <StyledTab
        pageState={pageState}
        onClick={() => {
          return setPageState('Forms'), pageState === 'Names' && setListOfNames([]);
        }}
      >
        Forms
      </StyledTab>
      <StyledTab
        pageState={pageState}
        onClick={() => {
          setPageState('Names');
        }}
      >
        Names
      </StyledTab>
      <StyledTab
        pageState={pageState}
        onClick={() => {
          return setPageState('Animals'), pageState === 'Names' && setListOfNames([]);
        }}
      >
        Animals
      </StyledTab>
    </StyledTabContainer>
  );
};

export default TabButtons;

const StyledTabContainer = styled.div`
  /* background: green; */
  display: flex;
  justify-content: center;
`;

const StyledTab = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  height: 50px;
  width: 160px;
  margin-right: 5px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily};
  padding-bottom: none;
  color: ${(props) => props.theme.colors.offWhite};
  background: ${(props) =>
    props.children === 'Forms' && props.pageState === 'Forms'
      ? props.theme.colors.bizLight
      : props.children === 'Names' && props.pageState === 'Names'
      ? props.theme.colors.bizLight
      : props.children === 'Animals' && props.pageState === 'Animals'
      ? props.theme.colors.bizLight
      : props.theme.colors.bizOrange};
`;

//!add prop types
