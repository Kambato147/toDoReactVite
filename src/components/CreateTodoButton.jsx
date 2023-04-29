import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  const btnClick = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton animate__bounce" onClick={btnClick}>
      <i className="fa-solid fa-circle-plus fa-sm"></i>
    </button>
  );
}

export { CreateTodoButton };
