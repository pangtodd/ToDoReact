import Container from 'react-bootstrap/Container';
import React from "react";
import Header from "./Header";
import ToDoControl from "./ToDoControl"


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