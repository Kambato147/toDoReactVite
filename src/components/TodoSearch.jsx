import "../styles/TodoSearch.css";

function TodoSearch({ search, setSearch }) {
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
