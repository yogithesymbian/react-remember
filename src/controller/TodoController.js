// import React, { useState, useEffect } from "react";
// import TodoForm from "../components/TodoForm";
// import TodoList from "../view/TodoList";
// import {
//   getTodosFromLocalStorage,
//   saveTodosToLocalStorage,
// } from "../model/TodoModel";

// function TodoController() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storedTodos = getTodosFromLocalStorage();
//     setTodos(storedTodos);
//     console.log("try to use [1]");
//   }, []);

//   useEffect(() => {
//     saveTodosToLocalStorage(todos);
//     console.log("try to use");
//   }, [todos]);

//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//     };
//     console.log("try to save [2]");
//     setTodos([...todos, newTodo]);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default TodoController;
