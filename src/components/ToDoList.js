import React from "react";
import ToDo from "./ToDo";
import Container from 'react-bootstrap/Container';
import PropTypes from "prop-types";

function ToDoList(props){
  return (
    <Container>
      <hr/>
      {props.toDoList.map((toDo) =>
        <ToDo
          whenToDoClicked = { props.onToDoSelection }
          date ={toDo.date}
          time ={toDo.time}
          location ={toDo.location}
          description ={toDo.description}
          id={toDo.id}
          key={toDo.id}/>
      )}
    </Container>
  );
}

ToDoList.propTypes={
  toDoList: PropTypes.array,
  onToDoSelection: PropTypes.func
};

export default ToDoList;