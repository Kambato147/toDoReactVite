import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {
  const {
    item: todos,
    saveItem: saveTodos,
    syncItem: syncTodos,
    loading,
    error,
  } = useLocalStorage("TODO_V1", []);
  const [search, setSearch] = React.useState("");

  // MODAL
  const [openModal, setOpenModal] = React.useState(false);

  //conteo de ToDo
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    syncTodos,
  };
}

export { useToDos };
