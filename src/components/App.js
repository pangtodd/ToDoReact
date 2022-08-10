import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "./Header";
import ToDoControl from "./ToDoControl"


function App(){
  return (
    <Container>
      <Header />
      <ToDoControl />
    </Container>
  );
}

export default App;