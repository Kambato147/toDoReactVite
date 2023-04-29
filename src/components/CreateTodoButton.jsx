// import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  const btnClick = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={btnClick} title="button create">
      <i className="fa-solid fa-circle-plus fa-sm"></i>
    </button>
  );
}

export { CreateTodoButton };
