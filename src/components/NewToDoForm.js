import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewToDoForm(props){
  function handleNewToDoFormSubmission(event) {
    event.preventDefault();
    props.onNewToDoCreation({
      date: event.target.date.value,
      time: event.target.time.value,
      location: event.target.location.value,
      description: event.target.description.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewToDoFormSubmission}>
        <input
          type='text'
          name='date'
          placeholder='Date' />
        <input
          type='text'
          name='time'
          placeholder='Time' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name = "description"
          placeholder = "Description of task" />
        <button type="submit">create to do!</button>
      </form>
    </React.Fragment>
  );
}

NewToDoForm.propTypes={
  onNewToDoCreation: PropTypes.func
};

export default NewToDoForm;