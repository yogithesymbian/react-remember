import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
