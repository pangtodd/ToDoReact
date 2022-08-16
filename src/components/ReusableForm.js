import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes={
  formSubmissionHanlder: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;