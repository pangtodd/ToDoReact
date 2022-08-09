import React from "react";
import ToDo from "./ToDo";
import Container from 'react-bootstrap/Container';


const mainToDoList = [
  {
    date: "8/11/21",
    time: "8:00am",
    location: "home",
    description:"wake up/go for run"
  },
  {
    date: "8/11/21",
    time: "9:00am",
    location: "home",
    description:"shower/breakfast"
  },
  {
    date: "8/11/21",
    time: "10:00am",
    location: "store",
    description:"get food for the week"
  }
];


function ToDoList(){
  return (
    <Container>
    <React.Fragment>
      <hr/>
      {mainToDoList.map((toDo, index) =>
        <ToDo date={toDo.date}
        time={toDo.time}
        location={toDo.location}
        description={toDo.description}
        key={index}/>  
      )}
    </React.Fragment>
    </Container>
  );
}

export default ToDoList;