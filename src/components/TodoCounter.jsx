import "../styles/TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
      <h1 className="tdc title-word">
        <span className="title-word title-word-1">Completaste </span>
        <span className="title-word title-word-2">{completedTodos}</span>
        <span className="title-word title-word-3"> de </span>
        <span className="title-word title-word-4"> {totalTodos} </span>
        <span className="title-word title-word-1"> ToDo</span>
      </h1>
  );
}

export { TodoCounter };
