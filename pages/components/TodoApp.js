import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  function onAddTodo(t) {
    setTodos([...todos, t]);
    console.log(todos);
  }

// WORK ON TODO BUTTONS
  function handleRemoveClick(e) {
    setTodos(todos.filter(t=>t !=))
    console.log("remove clicked");
    
  }
//
  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
