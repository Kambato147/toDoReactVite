import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../context";

function TodoSearch() {
  const { search, setSearch } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <input
      className="td-search"
      placeholder="Buscar 🍳"
      minLength={"3"}
      maxLength={"30"}
      value={search}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
