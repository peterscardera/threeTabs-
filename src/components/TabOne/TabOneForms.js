import React, { useState } from 'react';
import styled from 'styled-components';

import { Container } from '../ReusableStyles/Container';

const TabOneForms = ({ listOfAnimals, setListOfAnimals, listOfNames, setListOfNames }) => {
  //States that keep track of current entries
  const [currentName, setCurrentName] = useState('');
  const [currentAnimal, setCurrentAnimal] = useState('');


  //handlers that fire of changes to parent state app js
  const addAnimalHandler = (e) => {
    e.preventDefault();
    let copy = [...listOfAnimals, { animal: currentAnimal }];
    setListOfAnimals(copy);
    setCurrentAnimal('');
  };

  const addNameHandler = (e) => {
    e.preventDefault();
    let copy = [...listOfNames, { name: currentName }];
    setListOfNames(copy);
    setCurrentName('');
  };

  return (
    <>
      <Container>
        <StyledForm onSubmit={addNameHandler}>
          <label htmlFor="name">Name:</label>
          <input required id="name" type="text" value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
          <button type="submit"> Submit</button>
        </StyledForm>

        <StyledForm onSubmit={addAnimalHandler}>
          <label htmlFor="animal">Favorite animal:</label>
          <input required id="animal" type="text" value={currentAnimal} onChange={(e) => setCurrentAnimal(e.target.value)} />
          <button type="submit"> Submit</button>
        </StyledForm>
      </Container>
    </>
  );
};

export default TabOneForms;

const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
