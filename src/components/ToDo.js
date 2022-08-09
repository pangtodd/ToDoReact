import React from "react";
import PropTypes from "prop-types";

function ToDo(props){
  return(
    <React.Fragment>
      <h3>{props.date} - {props.time}</h3>
      <h3>{props.location}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

ToDo.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string
};

export default ToDo;