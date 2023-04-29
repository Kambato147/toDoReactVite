import React from "react";
import { TodoContext } from "../context";
import "../styles/TodoForm.css";

function TodoForm() {
  const [inputValue, setInputValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(inputValue); //
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        value={inputValue}
        onChange={onChange}
        placeholder="Cualquier tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          <i className="fa-regular fa-circle-xmark fa-xl"></i>
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          <i class="fa-regular fa-circle-check fa-xl"></i>
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
