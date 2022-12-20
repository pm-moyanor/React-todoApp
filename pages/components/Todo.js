import { useState } from "react";

export default function Todo({ handleEditClick, handleRemoveClick, todo }) {
  return (
    <div>
      <li id={todo.id} key={todo.id}>
        {todo.task}
      </li>
      <button onClick={handleEditClick}>edit</button>
      <button onClick={handleRemoveClick}>remove</button>
    </div>
  );
}
