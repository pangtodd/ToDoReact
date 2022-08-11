import React from "react";
import PropTypes from "prop-types";

function ToDoDetail(props){
  const { toDo } = props;

  return (
    <React.Fragment>
      <h1>To Do detail</h1>
      <h3>{toDo.date}</h3>
      <h3>{toDo.time}</h3>
      <h3>{toDo.location}</h3>
      <h3>{toDo.description}</h3>
      <hr/>
    </React.Fragment>
  );
}
ToDoDetail.propTypes={
  toDo: PropTypes.object
}

export default ToDoDetail;