import React from 'react';

import { Container } from '../ReusableStyles/Container';

const List = ({ name }) => {
  return (
    <div>
      <div>{name} </div>
    </div>
  );
};

const TabTwoName = ({ listOfNames }) => {
  return (
    <>
      <Container>
        {listOfNames.length === 0
          ? 'Please add a name'
          : listOfNames.map((nameObj, index) => {
              return (
                <div key={index}>
                  <List {...nameObj} />
                </div>
              );
            })}
      </Container>
    </>
  );
};

export default TabTwoName;
