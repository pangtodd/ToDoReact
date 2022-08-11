import React from "react";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";
import ToDoDetail from "./ToDoDetail";

class ToDoControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainToDoList: [],
      selectedTicket: null
    };
  }

  handleClick = ()=> {
    if(this.state.selectedToDo != null){
      this.setState({
        formVisibleOnPage: false,
        selectedToDo: null
      });
    }else{
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

  handleAddingNewToDoToList = (newToDo) => {
    const newMainToDoList = this.state.mainToDoList.concat(newToDo);
    this.setState({
      mainToDoList: newMainToDoList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedToDo= (id)=> {
    const selectedToDo = this.state.mainToDoList.filter(toDo => toDo.id === id)[0];
    this.setState({selectedToDo: selectedToDo})
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;

    if (this.state.selectedToDo != null){
      currentlyVisibleState= <ToDoDetail toDo = {this.state.selectedToDo} />
    } else if (this.state.formVisibleOnPage){
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