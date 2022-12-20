import { useState } from "react";

export default function Todo({ handleEditClick, handleRemoveClick, todo }) {
  return (
    <>
      {todo.task}

      <button onClick={handleEditClick}>edit</button>
      <button onClick={()=>handleRemoveClick(todo.id)}>remove</button>
    </>
  );
}
