import React, { useState } from "react";
import { useTodo } from "../hooks/useTodo";

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useTodo();

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoForm;
