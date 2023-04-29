import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../context';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1 className="tdc">
      Completaste {completedTodos} de {totalTodos} ToDo
    </h1>
  );
}

export { TodoCounter };
