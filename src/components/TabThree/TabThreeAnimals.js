import React from 'react';

import { Container } from '../ReusableStyles/Container';

const List = ({ animal }) => {
  return (
    <div>
      <div>{animal} </div>
    </div>
  );
};

const TabThreeAnimals = ({listOfAnimals}) => {
  return (
    <>
      <Container>
        {listOfAnimals.length === 0
          ? 'Please add an animal'
          : listOfAnimals.map((animalObj, index) => {
              return (
                <div key={index}>
                  <List {...animalObj} />
                </div>
              );
            })}
      </Container>
    </>
  );
};

export default TabThreeAnimals;
