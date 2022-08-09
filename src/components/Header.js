import React from "react";
import toDoImage from "./../img/todo.png";

function Header(){
  return (
    <React.Fragment>
      <h1>TO DOs!</h1>
      <img src={toDoImage} alt="guy checking to-dos off" />
    </React.Fragment>
  );
}

export default Header;