import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

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
      <ReusableForm
        formSubmissionHandler={handleNewToDoFormSubmission}
        buttonText="add to do!" />
    </React.Fragment>
  );
}

NewToDoForm.propTypes={
  onNewToDoCreation: PropTypes.func
};

export default NewToDoForm;