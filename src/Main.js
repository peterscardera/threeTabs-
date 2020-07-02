import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import TabButtons from './components/TabButtons';
import TabOneForms from './components/TabOneForms';
import TabTwoNames from './components/TabTwoNames';
import TabThreeAnimals from './components/TabThreeAnimals';

const Main = () => {

  //state that dictates which tab we're on
  const [pageState, setPageState] = useState('Forms');

  const [listOfNames, setListOfNames] = useState([]);

  const [listOfAnimals, setListOfAnimals] = useState(() => JSON.parse(localStorage.getItem('animals')) || []);

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(listOfAnimals));
  }, [listOfAnimals]);

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

export default Main;


const theme = {
    fontFamily: 'Noto Sans JP',
    colors: {
      light: 'RGBA(30,44,61,0.7)',
      dark: '#373D49',
      bizOrange: '#F95245',
      lightOrange: 'RGBA(249,82,69,0.81)',
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
  