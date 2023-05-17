import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useTodo } from "./hooks/useTodo";

function App() {
  const { todos, addTodo, deleteTodo } = useTodo();

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

// import React from "react";
// import TodoController from "./controller/TodoController";

// function App() {
//   return <TodoController />;
// }

// export default App;
