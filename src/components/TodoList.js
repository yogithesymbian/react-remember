import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../hooks/useTodo";

function TodoList() {
  const { todos, deleteTodo } = useTodo();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
