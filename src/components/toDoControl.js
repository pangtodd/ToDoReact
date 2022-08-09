import React from "react";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";

class ToDoControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return(
      <React.Fragment>
      </React.Fragment>
    );
  }
}
export ToDoControl;