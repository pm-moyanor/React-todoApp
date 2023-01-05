import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState("");

  function handleAddTodo(text, id) {
    setTodos([...todos, { text: text, id: id, isDone: false }]);
  }

  function handleRemoveClick(todoId) {
    const newTodos = todos.filter((t) => t.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleRemoveClick={handleRemoveClick} />
    </div>
  );
}
