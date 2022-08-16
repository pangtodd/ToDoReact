import React from "react";
import PropTypes from "prop-types";

function ToDoDetail(props){
  const { toDo, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>To Do detail</h1>
      <h3>{toDo.date}</h3>
      <h3>{toDo.time}</h3>
      <h3>{toDo.location}</h3>
      <h3>{toDo.description}</h3>
      <button onClick={()=> onClickingDelete(toDo.id)}>Delete to-do</button>
      <hr/>
    </React.Fragment>
  );
}
ToDoDetail.propTypes={
  toDo: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default ToDoDetail;