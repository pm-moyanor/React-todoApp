import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  function onAddTodo(t, c) {
    setTodos([...todos, { task: t, id: c, done: false }]);
  }

  console.log(todos);
  //s
  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
