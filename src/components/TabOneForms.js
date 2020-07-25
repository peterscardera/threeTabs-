import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Container } from "./ReusableStyles/Container";

const TabOneForms = ({
  currentName,
  currentAnimal,
  onChangeHandler,
  addNameHandler,
  addAnimalHandler,
}) => {

  const { register, handleSubmit, errors } = useForm();
  const {
    register: registerTwo,
    handleSubmit: HandleSubmitTwo,
    errors: errorsTwo,
  } = useForm();

    return (
    <>
      <Container>
        <StyledForm onSubmit={handleSubmit(addNameHandler)}>
          <label htmlFor="name">Name:</label>
          <input
            ref={register({ pattern: /^[A-Za-z]+$/i })}
            id="name"
            name="name"
            type="text"
            value={currentName}
            onChange={onChangeHandler("name")}
          />
          <StyledButton type="submit">SUBMIT</StyledButton>

          {errors.name && (
            <p style={{ color: "red", fontSize: "16px" }}>
              Please enter a valid name
            </p>
          )}
        </StyledForm>

        <StyledForm onSubmit={HandleSubmitTwo(addAnimalHandler)}>
          <label htmlFor="animal">Favorite animal:</label>
          <input
            ref={registerTwo({ pattern: /^[A-Za-z]+$/i })}
            id="animal"
            name="animals"
            type="text"
            value={currentAnimal}
            onChange={onChangeHandler("animal")}
          />
          <StyledButton type="submit">SUBMIT</StyledButton>
          {errorsTwo.animals && (
            <p style={{ color: "red", fontSize: "16px" }}>
              Please enter a valid animal
            </p>
          )}
        </StyledForm>
      </Container>
    </>
  );
};

export default TabOneForms;

const StyledForm = styled.form`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  margin-top: 8px;
  border: none;
  width: 150px;
  height: 30px;
  letter-spacing: 4px;
  background: ${(props) => props.theme.colors.bizOrange};
  border-radius: 4px;
  transition: all 0.5s;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background: ${(props) => props.theme.colors.lightOrange};
    border: 1px solid ${(props) => props.theme.colors.bizOrange};
  }
`;
