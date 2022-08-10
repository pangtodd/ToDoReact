import React from "react";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";

class ToDoControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainToDoList: []
    };
  }

  handleClick = ()=> {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewToDoToList = (newToDo) => {
    const newMainToDoList = this.state.mainToDoList.concat(newToDo);
    this.setState({
      mainToDoList: newMainToDoList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewToDoForm onNewToDoCreation={this.handleAddingNewToDoToList} />
      buttonText="return to the to do list";
    } else {
      currentlyVisibleState=<ToDoList toDoList={this.state.mainToDoList}/>;
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