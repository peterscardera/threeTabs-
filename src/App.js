import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import TabButtons from './components/TabButtons/TabButtons';
import TabOneForms from './components/TabOne/TabOneForms';
import TabTwoNames from './components/TabTwo/TabTwoNames';
import TabThreeAnimals from './components/TabThree/TabThreeAnimals';

const App = () => {
  //state that dictates which tab we're on
  const [pageState, setPageState] = useState('Forms');

  const [listOfNames, setListOfNames] = useState([]);
  const [listOfAnimals, setListOfAnimals] = useState([]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <TabButtons pageState={pageState} setPageState={setPageState} setListOfNames={setListOfNames} />
          {pageState === 'Forms' ? (
            <TabOneForms
              listOfAnimals={listOfAnimals}
              setListOfAnimals={setListOfAnimals}
              listOfNames={listOfNames}
              setListOfNames={setListOfNames}
            />
          ) : pageState === 'Names' ? (
            <TabTwoNames listOfNames={listOfNames} />
          ) : (
            pageState === 'Animals' && <TabThreeAnimals listOfAnimals={listOfAnimals} />
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

const theme = {
  fontFamily: 'Noto Sans JP',
  colors: {
    bizDark: '#2D323B',
    bizLight: '#373D49',
    bizOrange: '#F95245',
    offWhite: '#EDEDED',
    black: '#000000',
  },
};
const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    background:#eee
   
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
     font-family: 'Noto Sans JP', sans-serif;
  }
  a {
    text-decoration: none;
   
  }
  button {  font-family: 'radnika_next'; }
`;

const Container = styled.div`
  margin-top: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
