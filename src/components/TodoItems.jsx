import React from "react";
import "../styles/TodoItems.css";

function TodoItems(props) {
  return (
    <li className="td-item">
      <span
        className={`Icon Icon-check ${props.check && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <i className="fa-regular fa-circle-check"></i>
      </span>
      <p className={`TodoItem-p ${props.check && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <i class="fa-regular fa-trash-can"></i>
      </span>
    </li>
  );
}

export { TodoItems };
