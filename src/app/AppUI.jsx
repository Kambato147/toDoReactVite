import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoList } from '../components/TodoList';
import { TodoItems } from '../components/TodoItems';
import { TodoContext } from '../context';
import { Modal } from '../modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Up hbo un erro!...</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            check={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppUI };
