import { useToDos } from "./useToDos";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";
import { Modal } from "../modal";
import { TodoForm } from "../components/TodoForm";
import { TodoHeader } from "../components/TodoHeader";
import { TdEmpty } from "../components/TdEmpty";
import { TdError } from "../components/TdError";
import { TdLoading } from "../components/TdLoading";
import { ChangeAlert } from "../components/listener/ChangeAlert";
import "./App.css";

function App() {
  const { states, stateUpdate } = useToDos();

  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodos,
    openModal,
  } = states;

  const { addTodo, completeTodo, deleteTodo, setOpenModal, syncTodos } =
    stateUpdate;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={search}
        onError={() => <TdError />}
        onLoading={() => <TdLoading />}
        onEmpty={() => <TdEmpty />}
        onEmptySearch={(searchText) => (
          <p className="empty">
            No hubo resultado para <span className="color">{searchText}</span>
          </p>
        )}

        // render props
        // render={(todo) => (
        //   <TodoItems
        //     key={todo.text}
        //     text={todo.text}
        //     check={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {
          (todo) => (
            <TodoItems
              key={todo.text}
              text={todo.text}
              check={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
          //esto es una render huok
        }
      </TodoList>
      {!!openModal && (
        <Modal>
          {/* hace falta volver a poner setOpenModal para que funcione bien */}
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlert sincronize={syncTodos} />
    </>
  );
}

export default App;
