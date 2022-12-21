import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  function onAddTodo(t, c) {
    setTodos([...todos, { task: t, id: c, done: false }]);
  }

  function handleRemoveClick(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
    return todos;
  }

  function handleEditClick(todo) {
    console.log("edit clicked", todo);
  }

  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        handleRemoveClick={handleRemoveClick}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}
