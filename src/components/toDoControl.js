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

  handleClick = ()=> {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    let addToDoButton = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewToDoForm />
      buttonText="return to to do list";
    } else {
      currentlyVisibleState=<ToDoList />
      buttonText="Add to do";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default ToDoControl;