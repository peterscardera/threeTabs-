import React from "react";
import styled from "styled-components";

const TabButtons = ({ pageState, setPageState, setListOfNames }) => {
  return (
    <StyledTabContainer>
      <StyledTab
        pageState={pageState}
        onClick={() => {
          setPageState("Forms");
          pageState === "Names" && setListOfNames([]);
        }}
      >
        Forms
      </StyledTab>
      <StyledTab
        pageState={pageState}
        onClick={() => {
          setPageState("Names");
        }}
      >
        Names
      </StyledTab>
      <StyledTab
        pageState={pageState}
        onClick={() => {
          setPageState("Animals");
          pageState === "Names" && setListOfNames([]);
        }}
      >
        Animals
      </StyledTab>
    </StyledTabContainer>
  );
};

export default TabButtons;

const StyledTabContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  @media only screen and (max-width: 735px) {
    width: 400px;
  }
`;

const StyledTab = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  height: 50px;
  width: 95%;
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
    props.children === "Forms" && props.pageState === "Forms"
      ? props.theme.colors.light
      : props.children === "Names" && props.pageState === "Names"
      ? props.theme.colors.light
      : props.children === "Animals" && props.pageState === "Animals"
      ? props.theme.colors.light
      : props.theme.colors.dark};
`;
