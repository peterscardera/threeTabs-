import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import TabButtons from "./components/TabButtons";
import TabOneForms from "./components/TabOneForms";
import TabTwoNames from "./components/TabTwoNames";
import TabThreeAnimals from "./components/TabThreeAnimals";

const App = () => {
  //state that dictates which tab we're on
  const [pageState, setPageState] = useState("Forms");

  const [listOfNames, setListOfNames] = useState([]);

  const [listOfAnimals, setListOfAnimals] = useState(
    () => JSON.parse(localStorage.getItem("animals")) || []
  );

  //States that keep track of current entries
  const [currentName, setCurrentName] = useState("");
  const [currentAnimal, setCurrentAnimal] = useState("");

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(listOfAnimals));
  }, [listOfAnimals]);

  //handler updates current typing states.
  const onChangeHandler = (fieldType) => (e) => {
    const value = e.target.value;

    if (fieldType === "name") {
      setCurrentName(value);
    } else if (fieldType === "animal") {
      setCurrentAnimal(value);
    }
  };

  //handlers that fires of changes to parent state app.js.
  const addAnimalHandler = (e) => {
    // e.preventDefault();
    let copy = [...listOfAnimals, { animal: currentAnimal }];
    setListOfAnimals(copy);
    setCurrentAnimal("");
  };

  const addNameHandler = (e) => {
    // e.preventDefault();
    let copy = [...listOfNames, { name: currentName }];
    setListOfNames(copy);
    setCurrentName("");
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <TabButtons
            pageState={pageState}
            setPageState={setPageState}
            setListOfNames={setListOfNames}
          />
          {pageState === "Forms" ? (
            <TabOneForms
              onChangeHandler={onChangeHandler}
              currentName={currentName}
              currentAnimal={currentAnimal}
              addAnimalHandler={addAnimalHandler}
              addNameHandler={addNameHandler}
            />
          ) : pageState === "Names" ? (
            <TabTwoNames listOfNames={listOfNames} />
          ) : (
            pageState === "Animals" && (
              <TabThreeAnimals listOfAnimals={listOfAnimals} />
            )
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

const theme = {
  fontFamily: "Noto Sans JP",
  colors: {
    light: "RGBA(30,44,61,0.7)",
    dark: "#373D49",
    bizOrange: "#F95245",
    lightOrange: "RGBA(249,82,69,0.81)",
    offWhite: "#EDEDED",
    black: "#000000",
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
  margin: 2% 5% 0;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
