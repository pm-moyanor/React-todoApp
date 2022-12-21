import { useState } from "react";

export default function Todo({ handleEditClick, handleRemoveClick, todo }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <input type="checkbox" onChange={() => setIsDone(!isDone)}></input>
      <h3>{todo.task}</h3>
      {isDone ? <h4>DONE!</h4> : undefined}
      <button onClick={() => handleEditClick(todo)}>edit</button>
      <button onClick={() => handleRemoveClick(todo.id)}>remove</button>
    </>
  );
}
