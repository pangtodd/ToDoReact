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
    let addToDoButton = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewToDoForm />
    } else {
      currentlyVisibleState=<ToDoList />
      addToDoButton = <button onClick={this.handleClick}> Add To Do</button>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addToDoButton}
      </React.Fragment>
    );
  }
}
export default ToDoControl;