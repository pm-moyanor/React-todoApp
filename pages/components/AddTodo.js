import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState("");
  const [count, setCount] = useState(1);

  function handleAddClick() {
    setCount(count + 1);
    onAddTodo(todo, count);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={handleAddClick}>add</button>
    </div>
  );
}
