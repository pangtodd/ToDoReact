import React from "react";
import ToDo from "./ToDo";
import Container from 'react-bootstrap/Container';
import PropTypes from "prop-types";

function ToDoList(props){
  return (
    <Container>
      <hr/>
      {props.toDoList.map((toDo, index)=>
        <ToDo 
          date ={toDo.date}
          time ={toDo.time}
          location ={toDo.location}
          description ={toDo.description}
          key={index}/>
      )}
    </Container>
  );
}

ToDoList.propTypes={
  toDoList: PropTypes.array
};

export default ToDoList;