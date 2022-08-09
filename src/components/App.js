import Container from 'react-bootstrap/Container';
import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList"


function App(){
  return (
    <Container>
    <React.Fragment>
      <Header />
      <ToDoControl />
    </React.Fragment>
    </Container>
  
  );
}

export default App;